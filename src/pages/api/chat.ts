export const prerender = false;

// Vercel Edge runtime
export const config = { runtime: "edge" };

const SYSTEM_PROMPT = `Eres el asistente virtual de "La Mesa", un restaurante colombiano en Bogotá.

INFORMACIÓN DEL RESTAURANTE:
- Nombre: La Mesa
- Dirección: Carrera 13 #93-40, Bogotá (Zona Rosa)
- Horario: Lunes a viernes 12pm–10pm | Sábados y domingos 11am–11pm
- Teléfono: +57 1 234 5678
- WhatsApp: +57 311 234 5678

MENÚ (precios en COP):
Entradas:
- Patacones con hogao: $18.000
- Buñuelos de chócolo: $14.000
- Caldo de costilla: $16.000

Platos principales:
- Bandeja paisa: $42.000
- Ajiaco santafereño: $38.000
- Arroz con pollo al cilantro: $35.000
- Sudado de res con papa criolla: $40.000
- Sancocho trifásico (para 2): $65.000
- Cazuela de mariscos: $52.000

Bebidas:
- Jugo natural (mora, maracuyá, lulo, guanábana): $12.000
- Limonada de coco: $14.000
- Agua aromática: $6.000
- Café tinto: $5.000
- Cerveza artesanal: $16.000

Postres:
- Tres leches casero: $16.000
- Arroz con leche: $12.000
- Brownie de chocolate: $15.000

RESERVAS:
- Acepta reservas para grupos de 2 a 20 personas
- Máximo 7 días de anticipación
- Para grupos >10 se requiere pago de anticipo del 30%
- Cancela con mínimo 24 horas de anticipación sin penalidad

INSTRUCCIONES:
- Sé amable, cálido y usa un tono colombiano natural (no puedes usar "parcero/a" ni cualquier otro regionalismo muy marcado, pero puedes usar expresiones comunes como "¿En qué le puedo ayudar?", "¡Claro que sí!", etc.)
- Responde SIEMPRE en español
- Si te preguntan por platillos no disponibles, sugiere alternativas del menú
- Para reservas, solicita: nombre, número de personas, fecha, hora y número de contacto
- Si el usuario dice que NO tiene número de contacto o no quiere darlo, acepta la reserva igual y dile que puede llamar al restaurante (+57 1 234 5678) para confirmar, o acercarse directamente
- Si el usuario no sabe la fecha o la hora exacta, ayúdalo a definirla con opciones concretas
- Si no sabes algo, di que no tienes esa información y sugiere llamar al restaurante
- SIEMPRE genera una respuesta de texto, nunca devuelvas una respuesta vacía
- Mantén respuestas cortas y útiles (máximo 3–4 oraciones por respuesta)
- NO inventes información que no está en este prompt`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Simple in-memory rate limiter (resets per isolate; production needs KV or Redis)
const ipHits = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.reset) {
    ipHits.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  // CORS
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" } });
  }

  // Rate limiting
  const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("cf-connecting-ip") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Intenta en un minuto." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse body
  let messages: Message[];
  try {
    const body = await request.json() as { messages?: unknown };
    if (!Array.isArray(body.messages)) throw new Error("invalid");
    messages = body.messages as Message[];
    // Sanitize: only keep role+content, limit to last 10 turns
    messages = messages
      .slice(-10)
      .filter((m) => typeof m.role === "string" && typeof m.content === "string" && m.content.trim() !== "")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 500) }));
  } catch {
    return new Response(JSON.stringify({ error: "Solicitud inválida." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  const apiKey = import.meta.env.MOONSHOT_API_KEY as string | undefined;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Servicio no configurado." }), { status: 503, headers: { "Content-Type": "application/json" } });
  }

  // Call Kimi (Moonshot AI) with streaming — OpenAI-compatible API
  const upstream = await fetch("https://api.moonshot.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       "kimi-k2.6",
      messages:    [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream:      true,
      max_tokens:  300,
      temperature: 1,
    }),
  });

  if (!upstream.ok) {
    const errBody = await upstream.text().catch(() => "(no body)");
    console.error("[chat.ts] Moonshot error", upstream.status, errBody);
    return new Response(
      JSON.stringify({ error: "Error al contactar el asistente.", detail: errBody, status: upstream.status }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  // Stream SSE back to client
  const { readable, writable } = new TransformStream();
  upstream.body!.pipeTo(writable);

  return new Response(readable, {
    headers: {
      "Content-Type":  "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
    },
  });
}
