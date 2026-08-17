/**
 * Contenido de las páginas de servicio.
 *
 * Cada página apunta a un grupo de búsquedas distinto; por eso el `h1` está
 * escrito como la consulta que hace la gente y no como un eslogan de marca.
 * Solo existen en español: el mercado objetivo es Colombia, y una traducción
 * sin tráfico solo diluye la señal. Por eso tampoco llevan hreflang.
 *
 * `keyword` no se renderiza — documenta la intención que persigue cada página
 * para que el copy no se desvíe con el tiempo.
 */

export interface Servicio {
  slug: string;
  nav: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  demo?: { href: string; label: string };
  senales: string[];
  entregables: { titulo: string; detalle: string }[];
  proceso: { paso: string; tiempo: string; detalle: string }[];
  ejemplos: { sector: string; texto: string }[];
  herramientas: string[];
  faq: { q: string; a: string }[];
}

export const servicios: Servicio[] = [
  {
    slug: "automatizacion-procesos-rpa",
    nav: "Automatización RPA",
    keyword: "automatización de procesos / RPA para empresas en Colombia",
    title: "Automatización de Procesos y RPA en Colombia | Nexias",
    description:
      "Eliminamos tareas repetitivas: conciliaciones, reportes, flujos de aprobación y carga de datos. Automatización RPA y APIs para empresas colombianas.",
    h1: "Automatización de procesos (RPA) para empresas en Colombia",
    lead: "Si alguien de tu equipo abre Excel todos los lunes para armar el mismo reporte, eso es un proceso automatizable. Conectamos los sistemas que ya usas para que ese trabajo ocurra solo, sin cambiar de software ni migrar nada.",
    senales: [
      "Alguien copia datos de un sistema a otro a mano, todas las semanas.",
      "Las conciliaciones contables toman días y siempre aparecen diferencias.",
      "Los reportes de gerencia se arman manualmente y llegan tarde.",
      "Una aprobación se demora porque el correo se quedó sin leer.",
      "Tienes la información, pero vive en cinco archivos distintos.",
    ],
    entregables: [
      {
        titulo: "Procesos automatizados en producción",
        detalle:
          "No un piloto ni una demo: el flujo corriendo con tus datos reales, con manejo de errores y alertas cuando algo falla.",
      },
      {
        titulo: "Integraciones entre tus sistemas",
        detalle:
          "Conexión por API entre ERP, CRM, hojas de cálculo y bases de datos, para que el dato se escriba una sola vez.",
      },
      {
        titulo: "Documentación y capacitación",
        detalle:
          "Tu equipo queda capaz de operar y ajustar lo entregado. Sin dependencia obligatoria de nosotros.",
      },
    ],
    proceso: [
      {
        paso: "Mapeo del proceso",
        tiempo: "3–5 días",
        detalle:
          "Nos sentamos con quien hace la tarea hoy y documentamos cada paso, incluidas las excepciones que nadie escribió nunca.",
      },
      {
        paso: "Construcción",
        tiempo: "2–4 semanas",
        detalle:
          "Desarrollamos la automatización contra un ambiente de pruebas, con revisiones semanales para que no haya sorpresas al final.",
      },
      {
        paso: "Puesta en producción",
        tiempo: "1 semana",
        detalle:
          "Salida controlada, corriendo en paralelo con el proceso manual hasta que los resultados coincidan. Después se apaga el manual.",
      },
    ],
    ejemplos: [
      {
        sector: "Servicios financieros",
        texto:
          "Conciliación diaria entre el extracto bancario y el sistema contable, con reporte de diferencias en la bandeja de entrada a primera hora.",
      },
      {
        sector: "Comercio",
        texto:
          "Carga automática de inventario desde los archivos de proveedores, con validación de precios y alerta cuando un costo se sale del rango.",
      },
      {
        sector: "Manufactura",
        texto:
          "Flujo de aprobación de órdenes de compra por WhatsApp, con registro en el ERP y recordatorio automático a quien tenga la aprobación pendiente.",
      },
    ],
    herramientas: [
      "Excel y Google Sheets",
      "SAP",
      "Siigo",
      "APIs REST",
      "SQL Server, PostgreSQL, MySQL",
      "WhatsApp Business API",
      "ERP y CRM propios",
    ],
    faq: [
      {
        q: "¿Tengo que cambiar de software?",
        a: "No. La automatización se conecta a lo que ya usas. Cambiar de sistema es un proyecto aparte, mucho más caro, y en la mayoría de los casos no hace falta.",
      },
      {
        q: "¿Qué pasa si el proceso cambia después?",
        a: "Los procesos cambian, y la automatización se ajusta. Por eso entregamos documentación y capacitación, y ofrecemos acompañamiento mensual para quien prefiera no hacerlo internamente.",
      },
      {
        q: "¿Esto reemplaza gente?",
        a: "En la práctica libera horas, no puestos. La tarea que se automatiza suele ser la que nadie quiere hacer, y el tiempo recuperado se va a trabajo que sí necesita criterio humano.",
      },
      {
        q: "¿Cuánto cuesta automatizar un proceso?",
        a: "Depende de cuántos sistemas toque y de qué tan claras estén las reglas. En el diagnóstico gratuito estimamos el alcance y el presupuesto exacto antes de que te comprometas a nada.",
      },
    ],
  },

  {
    slug: "agentes-ia-whatsapp",
    nav: "Agentes de IA",
    keyword: "chatbot / agente de IA por WhatsApp para empresas",
    title: "Agentes de IA y Chatbots por WhatsApp | Nexias Colombia",
    description:
      "Agentes de IA que atienden clientes por WhatsApp 24/7, responden con la información de tu negocio, califican leads y agendan citas. Demo en vivo.",
    h1: "Agentes de IA y chatbots por WhatsApp para tu negocio",
    lead: "Un agente que responde con la información real de tu negocio —tu menú, tus precios, tus horarios, tus políticas— y no con generalidades. Atiende a la hora que te escriben, que casi nunca es la hora en que tu equipo está disponible.",
    demo: { href: "/demos/asistente-ia", label: "Habla con un agente de verdad" },
    senales: [
      "Contestas las mismas cinco preguntas todos los días.",
      "Los mensajes que llegan de noche o el domingo se responden al otro día — o nunca.",
      "Pierdes reservas porque nadie alcanzó a contestar a tiempo.",
      "No sabes cuántos de los que escriben terminan comprando.",
      "Tu equipo interno pregunta lo mismo una y otra vez sobre procedimientos.",
    ],
    entregables: [
      {
        titulo: "Agente conectado a tu WhatsApp",
        detalle:
          "Sobre WhatsApp Business API, con tu número y tu identidad. El cliente no sale del canal donde ya te escribe.",
      },
      {
        titulo: "Base de conocimiento de tu negocio",
        detalle:
          "El agente responde desde tus documentos, no desde lo que el modelo cree saber. Si no está en tu información, lo dice y escala a una persona.",
      },
      {
        titulo: "Escalamiento a humano y registro",
        detalle:
          "Cuando la conversación se sale del guion, pasa a tu equipo con el contexto completo. Cada conversación queda registrada y clasificada.",
      },
    ],
    proceso: [
      {
        paso: "Definición del alcance",
        tiempo: "3–5 días",
        detalle:
          "Decidimos qué debe responder el agente, qué debe escalar y qué nunca debe hacer. El límite importa más que la capacidad.",
      },
      {
        paso: "Carga de conocimiento y ajuste",
        tiempo: "2–3 semanas",
        detalle:
          "Cargamos tu información y afinamos el tono contra conversaciones reales hasta que responda como responde tu mejor persona de atención.",
      },
      {
        paso: "Salida y monitoreo",
        tiempo: "1 semana",
        detalle:
          "Arranca con volumen limitado y supervisión. Revisamos las conversaciones de la primera semana y ajustamos antes de abrir el canal completo.",
      },
    ],
    ejemplos: [
      {
        sector: "Restaurantes",
        texto:
          "Responde el menú y los horarios, toma reservas con fecha y hora, y avisa al salón cuando una mesa grande necesita confirmación.",
      },
      {
        sector: "Turismo y hotelería",
        texto:
          "Resuelve disponibilidad y tarifas, explica políticas de cancelación y deja la solicitud de reserva lista para confirmar.",
      },
      {
        sector: "Servicios profesionales",
        texto:
          "Califica al que escribe, entiende qué necesita y agenda la cita directamente en el calendario del profesional.",
      },
    ],
    herramientas: [
      "WhatsApp Business API",
      "Telegram",
      "Web chat",
      "Google Calendar",
      "CRM propio o de terceros",
      "Base de conocimiento sobre tus documentos",
    ],
    faq: [
      {
        q: "¿El agente se inventa respuestas?",
        a: "Responde desde tu documentación cargada, no desde conocimiento general. Cuando la pregunta se sale de ahí, la instrucción es decir que no lo sabe y pasar a una persona — es preferible a una respuesta inventada sobre un precio.",
      },
      {
        q: "¿Puedo probarlo antes de contratar?",
        a: "Sí. Hay un agente funcionando en la web, sobre un restaurante ficticio, al que puedes escribirle ahora mismo sin registrarte.",
      },
      {
        q: "¿Necesito WhatsApp Business API?",
        a: "Para operar con volumen, sí, y te acompañamos en el trámite. Para empezar y validar, se puede montar sobre otros canales mientras se aprueba.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Firmamos NDA antes de iniciar y trabajamos en entornos controlados. No almacenamos datos de tus clientes en servidores propios sin autorización expresa.",
      },
    ],
  },

  {
    slug: "analitica-datos-dashboards-bi",
    nav: "Analítica y BI",
    keyword: "dashboards / business intelligence / analítica de datos para pymes",
    title: "Dashboards y Analítica de Datos para Pymes | Nexias",
    description:
      "Dashboards de BI y analítica predictiva para empresas colombianas: ventas, inventario, demanda y rentabilidad en una sola pantalla. Demo en vivo.",
    h1: "Analítica de datos y dashboards de BI para pymes colombianas",
    lead: "La mayoría de las empresas ya tiene los datos que necesita para decidir mejor; lo que no tiene es la pantalla donde mirarlos. Convertimos lo que ya registras en indicadores que responden preguntas de negocio, no en gráficas bonitas.",
    demo: { href: "/demos/dashboard", label: "Ver un dashboard en vivo" },
    senales: [
      "Sabes cuánto vendiste, pero no cuál producto te deja más margen.",
      "El reporte mensual llega cuando el mes ya pasó y no se puede corregir nada.",
      "Cada área presenta cifras distintas para la misma pregunta.",
      "Compras inventario por intuición y a veces te sobra o te falta.",
      "Nadie sabe con certeza cuánto cuesta atender a un cliente.",
    ],
    entregables: [
      {
        titulo: "Dashboard operativo en tiempo real",
        detalle:
          "Los indicadores que de verdad usas para decidir, actualizados automáticamente, accesibles desde el celular.",
      },
      {
        titulo: "Una sola fuente de verdad",
        detalle:
          "Consolidamos los datos dispersos en un modelo único, para que dos áreas no lleguen a la reunión con dos cifras diferentes.",
      },
      {
        titulo: "Modelos predictivos donde aportan",
        detalle:
          "Pronóstico de demanda, riesgo de cartera o rotación de inventario — solo donde haya histórico suficiente para que la predicción valga algo.",
      },
    ],
    proceso: [
      {
        paso: "Definición de preguntas",
        tiempo: "3–5 días",
        detalle:
          "Empezamos por las decisiones que quieres tomar, no por los datos que tienes. Eso determina qué se mide y qué se descarta.",
      },
      {
        paso: "Modelo y tablero",
        tiempo: "3–5 semanas",
        detalle:
          "Consolidamos las fuentes, construimos el modelo de datos y montamos el tablero con revisiones sobre datos reales.",
      },
      {
        paso: "Adopción",
        tiempo: "1–2 semanas",
        detalle:
          "Capacitamos al equipo y ajustamos según el uso real. Un tablero que nadie abre es un proyecto fallido, por bien construido que esté.",
      },
    ],
    ejemplos: [
      {
        sector: "Comercio",
        texto:
          "Rentabilidad por producto y por punto de venta, con alerta cuando un artículo empieza a vender por debajo de su costo de oportunidad.",
      },
      {
        sector: "Restaurantes",
        texto:
          "Ticket promedio por franja horaria y rotación de platos, para ajustar la carta y la programación de personal con evidencia.",
      },
      {
        sector: "Manufactura",
        texto:
          "Pronóstico de demanda por referencia para planear compras y reducir el capital inmovilizado en inventario.",
      },
    ],
    herramientas: [
      "PostgreSQL, SQL Server, MySQL",
      "Excel y Google Sheets",
      "ERP y CRM",
      "APIs de terceros",
      "Tableros web propios",
      "Modelos de series de tiempo",
    ],
    faq: [
      {
        q: "¿Sirve si mis datos están en Excel?",
        a: "Sí, y es el punto de partida más común. Excel deja de alcanzar cuando el archivo lo tocan varias personas o cuando la consulta se vuelve lenta, pero como fuente de datos funciona perfectamente.",
      },
      {
        q: "¿Necesito contratar un analista después?",
        a: "No para operarlo. El tablero se diseña para que lo lea quien toma la decisión, no un especialista. Si más adelante quieres análisis a la medida, ahí sí tiene sentido.",
      },
      {
        q: "¿Cuántos datos históricos hacen falta para predecir?",
        a: "Para pronóstico de demanda, idealmente 18 a 24 meses. Con menos se puede hacer analítica descriptiva —que ya cambia decisiones— y dejamos la predicción para cuando el histórico alcance.",
      },
      {
        q: "¿En cuánto tiempo lo tengo funcionando?",
        a: "Un tablero operativo suele estar en producción entre 4 y 6 semanas, dependiendo de en qué estado estén las fuentes de datos.",
      },
    ],
  },

  {
    slug: "diagnostico-datos-procesos",
    nav: "Diagnóstico",
    keyword: "consultoría de procesos / por dónde empezar a automatizar",
    title: "Diagnóstico de Datos y Procesos Empresariales | Nexias",
    description:
      "Mapeamos tus operaciones y entregamos una lista priorizada de automatizaciones con ROI estimado. Diagnóstico gratuito de 30 minutos para empezar.",
    h1: "Diagnóstico de datos y procesos: dónde automatizar primero",
    lead: "El error más caro en automatización no es elegir mal la herramienta: es automatizar el proceso equivocado. El diagnóstico existe para que la primera inversión caiga donde el retorno es más claro y más rápido.",
    demo: { href: "/demos/calculadora-roi", label: "Calcula tu ahorro potencial" },
    senales: [
      "Sabes que hay que automatizar, pero no por dónde empezar.",
      "Te han cotizado proyectos y no puedes comparar si valen lo que cuestan.",
      "Cada área pide su propia herramienta y nadie ve el conjunto.",
      "Intentaste automatizar algo antes y quedó a medias.",
      "Quieres una cifra antes de comprometer presupuesto.",
    ],
    entregables: [
      {
        titulo: "Mapa de procesos priorizado",
        detalle:
          "Los procesos candidatos, ordenados por retorno estimado y por dificultad de implementación. Con lo que no vale la pena automatizar dicho explícitamente.",
      },
      {
        titulo: "Estimación de ROI por proceso",
        detalle:
          "Horas liberadas, costo evitado y meses de retorno para cada candidato, con los supuestos a la vista para que puedas discutirlos.",
      },
      {
        titulo: "Hoja de ruta a 6 meses",
        detalle:
          "Qué hacer primero, qué depende de qué y qué presupuesto necesita cada fase. Sirve aunque decidas ejecutarla con otro proveedor.",
      },
    ],
    proceso: [
      {
        paso: "Diagnóstico gratuito",
        tiempo: "30 minutos",
        detalle:
          "Una conversación para entender tu operación. Sales con una lectura inicial de dónde están las oportunidades, sin compromiso.",
      },
      {
        paso: "Levantamiento",
        tiempo: "1–2 semanas",
        detalle:
          "Entrevistas con las áreas y revisión de los sistemas y datos que ya existen, incluido lo que no está documentado.",
      },
      {
        paso: "Entrega y sustentación",
        tiempo: "2–3 días",
        detalle:
          "Presentamos el mapa, el ROI y la hoja de ruta, y respondemos por cada supuesto que sostiene los números.",
      },
    ],
    ejemplos: [
      {
        sector: "Servicios financieros",
        texto:
          "Revisión de los procesos de back office para identificar cuáles cuellos de botella son de sistema y cuáles de diseño del proceso.",
      },
      {
        sector: "Turismo",
        texto:
          "Análisis del recorrido desde la consulta hasta la reserva confirmada, para ubicar dónde se están perdiendo clientes.",
      },
      {
        sector: "Comercio",
        texto:
          "Mapeo del flujo de inventario entre proveedores, bodega y puntos de venta, con estimación del costo de los desajustes actuales.",
      },
    ],
    herramientas: [
      "Entrevistas por área",
      "Revisión de sistemas actuales",
      "Análisis de datos existentes",
      "Estimación de ROI por proceso",
      "Hoja de ruta priorizada",
    ],
    faq: [
      {
        q: "¿El diagnóstico es realmente gratis?",
        a: "La sesión inicial de 30 minutos sí, y sales de ella con una lectura útil aunque no contrates nada. El levantamiento completo, con mapa y ROI documentado, es un proyecto de alcance cerrado que se cotiza aparte.",
      },
      {
        q: "¿Puedo usar la hoja de ruta con otro proveedor?",
        a: "Sí. El entregable es tuyo. Un diagnóstico que solo sirve si nos contratas a nosotros no es un diagnóstico, es una cotización disfrazada.",
      },
      {
        q: "¿Qué tan grande debe ser mi empresa?",
        a: "No hay mínimo. Lo que importa es que existan procesos repetitivos o decisiones que hoy se toman sin datos. Eso pasa igual con 5 personas que con 200.",
      },
      {
        q: "¿Cuánto se demora?",
        a: "El diagnóstico completo toma entre 1 y 2 semanas desde el arranque, dependiendo de cuántas áreas haya que entrevistar.",
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
