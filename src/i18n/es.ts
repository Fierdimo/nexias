export const es = {
  // Nav
  nav: {
    services: "Servicios",
    howItWorks: "Cómo funciona",
    results: "Resultados",
    demos: "Demos",
    blog: "Blog",
    cta: "Hablemos",
  },

  // Hero
  //
  // El titular nombra lo que el agente HACE y a quién le sirve. La versión
  // anterior ("Automatiza lo repetitivo. Decide con datos. Escala sin límites")
  // la podía firmar cualquier consultora de IA del mundo, y por eso no la
  // firmaba nadie.
  //
  // La primera línea, además, es la única frase de la portada que Google lee
  // como H1. Antes decía "Que ningún cliente se quede sin respuesta": buena
  // promesa, cero coincidencia con lo que la gente escribe en el buscador.
  // Ahora nombra la categoría y el país —"agentes de IA en Colombia"— y deja
  // la promesa en la segunda línea, que es donde sigue funcionando.
  hero: {
    headlineA: "Agentes de IA en Colombia",
    headlineB: "para que ningún cliente se quede sin respuesta.",
    sub: "Chatbots de WhatsApp y agentes de voz con inteligencia artificial que contestan el teléfono, responden las preguntas de siempre, confirman las citas y hacen las llamadas que tu equipo no alcanza. Todos los días, a la hora que sea.",
    ctaPrimary: "Hablemos 30 minutos, sin costo",
    ctaSecondary: "Prueba el chat ahora",
    // Cifras del producto, verificables. Antes había conteos de clientes que
    // no existían: una afirmación que el primer prospecto curioso desmonta.
    proof1Value: "24/7",
    proof1Label: "también domingos y de madrugada",
    proof2Value: "< 1 seg",
    proof2Label: "responde sin silencios incómodos",
    proof3Value: "Ley 2300",
    proof3Label: "cumple la ley de cobranza, y lo demuestra",
  },

  // WhyNow / El Problema
  whyNow: {
    label: "Lo que pasa hoy",
    heading: "No es que tu equipo lo haga mal. Es que no da abasto.",
    pain1Title: "El teléfono suena cuando no hay quién conteste",
    pain1Body:
      "A las siete de la tarde, el sábado, en plena consulta. La llamada entra, nadie la toma, y esa persona rara vez vuelve a llamar.",
    pain2Title: "Las mismas cinco preguntas, todos los días",
    pain2Body:
      "Cuánto cuesta, a qué hora abren, si reciben tal seguro. Tu gente contesta lo mismo veinte veces al día en vez de atender a quien ya está esperando.",
    pain3Title: "Lo que no alcanzas a hacer, simplemente no se hace",
    pain3Body:
      "La cita que nadie confirmó. La cartera que se quedó sin llamar. La renovación que venció el martes. Nadie hizo nada mal — no hubo tiempo, y ya.",
    stat1: "¿Cuántas?",
    stat1Label: "llamadas se quedan sin hacer cada día",
    stat2: "¿Cuánto vale?",
    stat2Label: "una cita que se perdió por no confirmarla",
    stat3: "¿Y el domingo?",
    stat3Label: "cuando alguien escribe y no hay nadie del otro lado",
  },

  // Services
  services: {
    label: "Servicios",
    heading: "Agentes de IA, chatbots y automatización para empresas",
    sub: "Seis frentes: agentes de voz, chatbots de WhatsApp, automatización de procesos, dashboards y diagnóstico. No hay que hacerlos todos, ni todos a la vez — casi siempre conviene empezar por uno solo, el que más tiempo te esté costando.",
    badge: "Más solicitado",
    demoBadge: "Ver demo en vivo →",
    list: [
      {
        name: "Diagnóstico: ver dónde se te va el tiempo",
        page: "/servicios/diagnostico-datos-procesos/",
        linkLabel: "Ver el diagnóstico de procesos",
        desc: "Miramos cómo trabajan hoy y te decimos qué conviene automatizar primero, cuánto costaría y cuánto te ahorraría. Te queda por escrito, aunque no sigas con nosotros.",
      },
      {
        name: "Dashboards y analítica de datos",
        page: "/servicios/analitica-datos-dashboards-bi/",
        linkLabel: "Ver dashboards y analítica de datos",
        desc: "Tus números en una sola pantalla, actualizados solos y legibles desde el celular. Para decidir con datos y no con corazonadas.",
        demo: "/demos/dashboard",
      },
      {
        name: "Automatización de procesos (RPA)",
        page: "/servicios/automatizacion-procesos-rpa/",
        linkLabel: "Ver automatización de procesos y RPA",
        desc: "Esa tarea que alguien hace todos los lunes copiando de un lado a otro: conciliaciones, reportes, aprobaciones, carga de datos. Pasa a hacerse sola.",
        badge: true,
      },
      {
        name: "Agentes de IA y chatbots de WhatsApp",
        page: "/servicios/agentes-ia-whatsapp/",
        linkLabel: "Ver agentes de IA y chatbots de WhatsApp",
        desc: "Un chatbot con IA que responde por WhatsApp con la información real de tu negocio, agenda citas y te pasa la conversación cuando hace falta una persona.",
        demo: "/demos/asistente-ia",
      },
      {
        name: "Agentes de voz que contestan el teléfono",
        page: "/servicios/agentes-voz-ia-llamadas/",
        linkLabel: "Ver agentes de voz con IA",
        desc: "Un agente de voz con IA que atiende las llamadas entrantes y marca las salientes: confirma citas, cobra cartera y agenda, en español y sin sonar a grabación.",
      },
      {
        name: "Soporte y mejora continua",
        desc: "Los negocios cambian y lo que montamos también tiene que cambiar. Revisamos, ajustamos y mejoramos cada mes. O lo operas tú: te enseñamos cómo.",
      },
    ],
  },

  // HowItWorks
  howItWorks: {
    label: "Proceso",
    heading: "Así trabajamos, sin sorpresas en la factura",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        desc: "Nos sentamos contigo y con quien hace el trabajo hoy. Salimos con una lista de qué conviene automatizar y cuánto vale cada cosa.",
        time: "1–2 semanas",
      },
      {
        number: "02",
        title: "Implementación",
        desc: "Construimos y te vamos mostrando cada semana. Nada de desaparecer dos meses y volver con una sorpresa.",
        time: "4–10 semanas",
      },
      {
        number: "03",
        title: "Acompañamiento",
        desc: "Nos quedamos pendientes de que siga funcionando y lo ajustamos cuando tu negocio cambie. Si prefieres manejarlo tú, te dejamos listo para eso.",
        time: "Mensual",
      },
    ],
  },

  // Results
  //
  // Aquí vivían "12+ empresas transformadas", "2.400+ horas liberadas" y tres
  // casos de clientes que no existen. Un prospecto que pide la referencia deja
  // la conversación muerta, y la SIC sanciona la publicidad engañosa
  // (Ley 1480). Se reemplazan por hechos del producto, que además son mejores:
  // son comprobables en el demo, en vivo, durante la propia reunión.
  results: {
    label: "Lo que ya funciona",
    heading: "No te pedimos que nos creas. Pruébalo.",
    sub: "Hay dos formas de comprobarlo, y una es inmediata. Más abajo, cómo se aplica en cada sector — son ejemplos, no clientes referenciados.",
    demos: [
      {
        badge: "Ahora mismo",
        title: "Escríbele por chat",
        body: "Está funcionando en este momento. Pregúntale precios, horarios, lo que quieras — responde con la información real de un negocio de ejemplo. Sin registro.",
        cta: "Abrir el chat",
        href: "/demos/asistente-ia/",
        instant: true,
      },
      {
        badge: "Con cita",
        title: "Que te llame por teléfono",
        body: "El agente te marca y sostiene la conversación de verdad: lo puedes interrumpir a mitad de frase y te agenda la cita antes de colgar. Coordinamos día y hora contigo.",
        cta: "Pedir la llamada",
        href: "https://wa.me/573028308008?text=Hola%2C%20quiero%20agendar%20una%20llamada%20con%20el%20agente%20de%20voz",
        instant: false,
      },
    ],
    metrics: [
      { value: 24, suffix: "/7", label: "atiende sin turnos ni ausencias" },
      { value: 100, suffix: "%", label: "de las llamadas quedan transcritas y analizadas" },
      { value: 2300, suffix: "", label: "Ley 2300: cada intento queda auditado" },
      { value: 30, suffix: " min", label: "dura el diagnóstico gratuito" },
    ],
    cases: [
      {
        title: "La cartera que no se alcanzó a llamar",
        body: "El agente marca el portafolio completo, filtra y solo escala a una persona al deudor que contestó y mostró intención de pago. Tu equipo deja de marcar y solo negocia.",
        sector: "Cobranza",
      },
      {
        title: "La silla vacía de las 3 de la tarde",
        body: "Confirma las citas del día siguiente y reagenda en la misma llamada. También reactiva a los pacientes que no vuelven hace un año, que hoy son una base muerta en el sistema.",
        sector: "Salud y estética",
      },
      {
        title: "La renovación que se venció el martes",
        body: "Llama antes del vencimiento de la póliza o del SOAT, resuelve las dudas con la información real del corredor y deja la renovación lista para confirmar.",
        sector: "Seguros",
      },
    ],
  },

  // FAQ
  faq: {
    label: "Preguntas frecuentes",
    heading: "Lo que siempre preguntan antes de empezar",
    // Las tres primeras existen tanto por el visitante como por el buscador:
    // son consultas que la gente escribe tal cual en Google ("qué es un agente
    // de IA", "cuánto cuesta un chatbot"), y como el acordeón alimenta el
    // marcado FAQPage, la respuesta puede aparecer en el propio resultado.
    items: [
      {
        q: "¿Qué es un agente de IA y en qué se diferencia de un chatbot?",
        a: "Un chatbot responde preguntas; un agente de IA además hace cosas: consulta tu calendario, agenda la cita, registra el dato en tu CRM o te pasa la conversación a una persona con el contexto completo. Los chatbots de menú —los de \"marque 1, marque 2\"— responden con guiones fijos. Un agente entiende lo que le escriben o le dicen en lenguaje normal y actúa sobre tus sistemas.",
      },
      {
        q: "¿Cuánto cuesta un chatbot o un agente de IA en Colombia?",
        a: "Depende de los canales (WhatsApp, voz, web), de cuánta información hay que cargarle y de con qué sistemas se conecta. Un agente de IA para WhatsApp con base de conocimiento y agendamiento arranca como proyecto cerrado de pocas semanas; un agente de voz saliente cuesta más porque exige más ajuste. En el diagnóstico gratuito de 30 minutos te damos la cifra exacta antes de que te comprometas a nada.",
      },
      {
        q: "¿Atienden empresas fuera de Cartagena o de Colombia?",
        a: "Sí. Estamos en Cartagena y trabajamos con empresas de Bogotá, Medellín, Barranquilla, Cali y el resto del país de forma remota, además de clientes en el resto de América Latina. Los agentes atienden en español —con acento y modismos locales— y también en inglés.",
      },
      {
        q: "¿Cuánto cuesta un proyecto con Nexias?",
        a: "Cada proyecto es diferente. Los proyectos cerrados parten desde diagnósticos de alcance definido. En el diagnóstico gratuito establecemos el alcance y el presupuesto exacto. Sin sorpresas.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados?",
        a: "En la mayoría de los casos, las primeras automatizaciones entran en producción entre 4 y 6 semanas. El diagnóstico toma 1–2 semanas adicionales al inicio.",
      },
      {
        q: "¿Se integra con los sistemas que ya usamos?",
        a: "Sí. Trabajamos con Excel, ERP, CRMs, bases de datos SQL/NoSQL, APIs de terceros y herramientas como Google Sheets, WhatsApp Business, SAP, Siigo y más.",
      },
      {
        q: "¿Qué tamaño mínimo debe tener mi empresa?",
        a: "No hay mínimo. Lo que importa no es el tamaño, sino que existan procesos repetitivos o decisiones que hoy se toman sin datos. Eso pasa igual con 5 personas que con 200.",
      },
      {
        q: "¿Mis datos están seguros?",
        a: "Sí. Firmamos NDA antes de iniciar, trabajamos en entornos controlados y nunca almacenamos datos de clientes en servidores propios sin autorización expresa.",
      },
      {
        q: "¿Qué pasa después de terminar el proyecto?",
        a: "Ofrecemos retainer mensual de acompañamiento, o puedes operar todo de forma autónoma. Te entregamos documentación completa y capacitamos a tu equipo.",
      },
    ],
  },

  // Final CTA / Contact Form
  contact: {
    label: "Cuando quieras",
    heading: "Cuéntanos qué te está quitando tiempo",
    sub: "Treinta minutos, sin compromiso y sin tecnicismos. Sales sabiendo qué se puede automatizar en tu negocio y cuánto costaría — aunque decidas no hacerlo con nosotros.",
    namePlaceholder: "Tu nombre",
    companyPlaceholder: "Empresa",
    whatsappPlaceholder: "WhatsApp (con código de país)",
    sectorLabel: "Sector",
    sectors: ["Salud y clínicas", "Cobranza", "Seguros", "Restaurantes", "Turismo", "Comercio", "Otro"],
    submit: "Quiero que me cuenten →",
    altCTA: "O escríbenos por WhatsApp, es más rápido",
    successTitle: "¡Listo! Te escribimos hoy mismo.",
    successBody: "Pendiente del WhatsApp. Buscamos media hora que te sirva y nos cuentas tu caso.",
  },

  // Footer
  footer: {
    tagline: "Agentes de IA, chatbots y automatización para empresas en Colombia. Para que ningún cliente se quede sin respuesta, en español y donde estés.",
    services: "Servicios",
    company: "Empresa",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
    whatsapp: "Escríbenos por WhatsApp",
  },
} as const;

export type TranslationKeys = typeof es;
