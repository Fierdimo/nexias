export const prerender = false;

// Vercel Edge runtime
export const config = { runtime: "edge" };

/**
 * El menú ejecutivo, por día.
 *
 * "¿Cuál es el plato del día?" es la primera pregunta sugerida de la interfaz
 * y el prompt no la contemplaba: el agente contestaba que no tenía esa
 * información, que es lo correcto pero deja el demo en ridículo en el primer
 * clic. Se resuelve dándole el dato, no relajando la regla de no inventar.
 *
 * Y se calcula por petición, no se escribe fijo: que el agente sepa qué día es
 * hoy es justo lo que un visitante no espera de una máquina, y es la mitad de
 * lo que este demo vende.
 */
const PLATO_DEL_DIA: Record<string, { plato: string; precio: string; carta: string }> = {
  lunes:     { plato: "Ajiaco santafereño con mazorca",   precio: "$30.000", carta: "$38.000" },
  martes:    { plato: "Sudado de res con papa criolla",   precio: "$32.000", carta: "$40.000" },
  miércoles: { plato: "Bandeja paisa",                    precio: "$34.000", carta: "$42.000" },
  jueves:    { plato: "Arroz con pollo al cilantro",      precio: "$28.000", carta: "$35.000" },
  viernes:   { plato: "Cazuela de mariscos",              precio: "$42.000", carta: "$52.000" },
  sábado:    { plato: "Sancocho trifásico (para 2)",      precio: "$56.000", carta: "$65.000" },
  domingo:   { plato: "Sancocho trifásico (para 2)",      precio: "$56.000", carta: "$65.000" },
};

/** Hoy en Bogotá, que es donde está el restaurante — no donde corra el servidor. */
function hoyEnBogota(): string {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    weekday: "long",
  }).format(new Date()).toLowerCase();
}

function buildSystemPrompt(): string {
  const dia = hoyEnBogota();
  const menu = PLATO_DEL_DIA[dia] ?? PLATO_DEL_DIA.lunes;

  return `Eres el asistente virtual de "La Mesa", un restaurante colombiano en Bogotá.

INFORMACIÓN DEL RESTAURANTE:
- Nombre: La Mesa
- Dirección: Carrera 13 #93-40, Bogotá (Zona Rosa)
- Horario: Lunes a viernes 12pm–10pm | Sábados y domingos 11am–11pm
- Teléfono: +57 1 234 5678
- WhatsApp: +57 311 234 5678

HOY ES ${dia.toUpperCase()}.

PLATO DEL DÍA DE HOY (${dia}):
- ${menu.plato} por ${menu.precio}, e incluye sopa del día y jugo natural.
- En carta, ese mismo plato solo vale ${menu.carta}.
- El menú ejecutivo se sirve de lunes a viernes hasta las 3pm; fines de semana, todo el día.

MENÚ (precios en COP):
Entradas:
- Patacones con hogao: $18.000 (vegetariano)
- Buñuelos de chócolo: $14.000 (vegetariano)
- Caldo de costilla: $16.000

Platos principales:
- Bandeja paisa: $42.000
- Ajiaco santafereño: $38.000
- Arroz con pollo al cilantro: $35.000
- Sudado de res con papa criolla: $40.000
- Sancocho trifásico (para 2): $65.000
- Cazuela de mariscos: $52.000

OPCIONES VEGETARIANAS:
- Patacones con hogao ($18.000) y buñuelos de chócolo ($14.000)
- Ajiaco vegetariano, sin pollo y con crema de leche aparte: $32.000
- Arroz con verduras al cilantro, la versión sin pollo: $28.000
- Todos los postres son vegetarianos
- No hay opciones veganas; el ajiaco y los postres llevan lácteos

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
}

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
      /*
       * Modelo sin razonamiento, a propósito.
       *
       * kimi-k2.6 es de razonamiento: emite su cadena de pensamiento en
       * `delta.reasoning_content` y no en `delta.content`. En una pregunta
       * corriente gastaba los 300 tokens completos pensando y terminaba con
       * finish_reason "length" sin haber escrito una sola palabra de
       * respuesta — 299 de 302 fragmentos eran razonamiento. El cliente
       * mostraba su mensaje de respaldo y el demo parecía roto.
       *
       * Para un FAQ de restaurante tampoco hace falta: la respuesta está en
       * el prompt, no hay nada que deducir. Y el demo vende por lo rápido
       * que contesta, que es justo lo que un modelo pensante quita.
       */
      model:       "moonshot-v1-8k",
      messages:    [{ role: "system", content: buildSystemPrompt() }, ...messages],
      stream:      true,
      max_tokens:  300,
      /*
       * Baja de 1 a 0.3: este agente dicta precios y horarios. La variedad
       * creativa aquí solo sirve para que dos visitantes reciban dos precios
       * distintos de la misma bandeja paisa.
       */
      temperature: 0.3,
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
