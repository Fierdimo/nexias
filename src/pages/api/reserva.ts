export const prerender = false;
export const config = { runtime: "edge" };

interface BookingPayload {
  nombre:   string;
  email:    string;
  whatsapp: string;
  servicio: string;
  fecha:    string;
  hora:     string;
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  let payload: BookingPayload;
  try {
    payload = await request.json() as BookingPayload;
    // Basic validation
    const required: (keyof BookingPayload)[] = ["nombre","email","whatsapp","servicio","fecha","hora"];
    for (const field of required) {
      if (!payload[field] || typeof payload[field] !== "string" || payload[field].trim().length < 1) {
        return new Response(JSON.stringify({ error: `Campo requerido: ${field}` }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    // Sanitize
    payload = {
      nombre:   payload.nombre.trim().slice(0, 80),
      email:    payload.email.trim().slice(0, 120),
      whatsapp: payload.whatsapp.trim().slice(0, 20),
      servicio: payload.servicio.trim().slice(0, 80),
      fecha:    payload.fecha.trim().slice(0, 20),
      hora:     payload.hora.trim().slice(0, 10),
    };
    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return new Response(JSON.stringify({ error: "Email inválido." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
  } catch {
    return new Response(JSON.stringify({ error: "Solicitud inválida." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  const resendKey = import.meta.env.RESEND_API_KEY as string | undefined;

  if (resendKey) {
    const fromAddress = (import.meta.env.RESEND_FROM as string | undefined) ?? "onboarding@resend.dev";
    const emailHtml = `
      <div style="font-family: sans-serif; color: #222; max-width: 520px; margin: 0 auto;">
        <h2 style="color: #00D4FF;">✅ Reserva confirmada — Nexia</h2>
        <p>Hola <strong>${payload.nombre}</strong>,</p>
        <p>Tu cita de diagnóstico ha sido confirmada:</p>
        <table style="width:100%; border-collapse:collapse; margin:16px 0;">
          <tr><td style="padding:8px 12px; background:#f5f5f5; font-weight:600;">Servicio</td><td style="padding:8px 12px;">${payload.servicio}</td></tr>
          <tr><td style="padding:8px 12px; background:#f5f5f5; font-weight:600;">Fecha</td><td style="padding:8px 12px;">${payload.fecha}</td></tr>
          <tr><td style="padding:8px 12px; background:#f5f5f5; font-weight:600;">Hora</td><td style="padding:8px 12px;">${payload.hora} (Colombia)</td></tr>
          <tr><td style="padding:8px 12px; background:#f5f5f5; font-weight:600;">WhatsApp</td><td style="padding:8px 12px;">${payload.whatsapp}</td></tr>
        </table>
        <p>Nos comunicaremos contigo al WhatsApp proporcionado para confirmar los detalles. Si necesitas cambiar la cita, escríbenos con al menos 24 horas de anticipación.</p>
        <p style="color:#888; font-size:13px;">— El equipo de Nexia · nexia.co</p>
      </div>`;

    await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:  `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from:    fromAddress,
        to:      [payload.email],
        subject: `Reserva confirmada — ${payload.servicio} · ${payload.fecha} ${payload.hora}`,
        html:    emailHtml,
      }),
    });
  }
  // If no Resend key, still return success (demo mode)
  return new Response(JSON.stringify({ ok: true, message: "Reserva confirmada." }), {
    headers: { "Content-Type": "application/json" },
  });
}
