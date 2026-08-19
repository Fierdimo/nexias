export const es = {
  // Nav
  nav: {
    services: "Servicios",
    howItWorks: "Cómo funciona",
    results: "Resultados",
    demos: "Demos",
    cta: "Agenda tu diagnóstico",
  },

  // Hero
  //
  // El titular nombra lo que el agente HACE y a quién le sirve. La versión
  // anterior ("Automatiza lo repetitivo. Decide con datos. Escala sin límites")
  // la podía firmar cualquier consultora de IA del mundo, y por eso no la
  // firmaba nadie.
  hero: {
    headlineA: "Agentes de IA",
    headlineB: "que llaman, responden",
    headlineC: "y agendan por ti.",
    sub: "Y automatizamos el trabajo repetitivo que hoy le consume horas a tu equipo. Para clínicas, cobranza, seguros y empresas de servicios en Colombia.",
    ctaPrimary: "Agenda tu diagnóstico gratuito",
    ctaSecondary: "Habla con un agente ahora",
    // Cifras del producto, verificables. Antes había conteos de clientes que
    // no existían: una afirmación que el primer prospecto curioso desmonta.
    proof1Value: "24/7",
    proof1Label: "sin turnos, ausencias ni rotación",
    proof2Value: "< 1 seg",
    proof2Label: "para responder en la llamada",
    proof3Value: "Ley 2300",
    proof3Label: "cumplimiento auditable en cobranza",
  },

  // WhyNow / El Problema
  whyNow: {
    label: "El problema",
    heading: "Tu equipo trabaja duro. Pero trabaja manual.",
    pain1Title: "Datos dispersos, decisiones a ciegas",
    pain1Body:
      "La información está en hojas de cálculo, correos y sistemas desconectados. Sin una visión unificada, las decisiones se toman tarde y con datos incompletos.",
    pain2Title: "Tareas repetitivas que drenan talento",
    pain2Body:
      "Conciliaciones, reportes, carga de datos, aprobaciones — procesos que consumen horas cada día y que pueden automatizarse esta semana.",
    pain3Title: "Lo que no alcanzas a atender, lo atiende otro",
    pain3Body:
      "El cliente que escribe un domingo, la cita que nadie confirmó, la cartera que no se alcanzó a llamar. No es que se haga mal: es que no se hace.",
    stat1: "¿Cuántas?",
    stat1Label: "llamadas al día quedan sin hacer por falta de tiempo",
    stat2: "¿Cuánto vale?",
    stat2Label: "una cita perdida o una cartera que no se recuperó",
    stat3: "¿Qué pasa?",
    stat3Label: "con quien te escribe a las 9 de la noche o un domingo",
  },

  // Services
  services: {
    label: "Servicios",
    heading: "Todo lo que necesitas para competir con datos e IA",
    sub: "Cinco líneas de servicio diseñadas para el ciclo completo: diagnóstico, implementación y acompañamiento.",
    badge: "Más solicitado",
    demoBadge: "Ver demo en vivo →",
    list: [
      {
        name: "Diagnóstico de datos y procesos",
        page: "/servicios/diagnostico-datos-procesos/",
        desc: "Mapeamos tus operaciones y encontramos las oportunidades de mayor retorno. Entregable: lista priorizada de automatizaciones con ROI estimado.",
      },
      {
        name: "Analítica y BI predictivo",
        page: "/servicios/analitica-datos-dashboards-bi/",
        desc: "Dashboards e insights que anticipan demanda, riesgo y rendimiento. Toma decisiones antes de que el problema ocurra.",
        demo: "/demos/dashboard",
      },
      {
        name: "Automatización RPA + APIs",
        page: "/servicios/automatizacion-procesos-rpa/",
        desc: "Eliminamos tareas repetitivas: conciliaciones contables, reportes automáticos, flujos de aprobación y carga de datos.",
        badge: true,
      },
      {
        name: "Asistentes y agentes de IA",
        page: "/servicios/agentes-ia-whatsapp/",
        desc: "Chatbots y agentes que atienden clientes, generan leads y apoyan a tu equipo interno — disponibles 24/7.",
        demo: "/demos/asistente-ia",
      },
      {
        name: "Acompañamiento continuo",
        desc: "Monitoreo, ajustes y mejoras mensuales de tus sistemas. Tu inversión no se deprecia, evoluciona.",
      },
    ],
  },

  // HowItWorks
  howItWorks: {
    label: "Proceso",
    heading: "De tu problema a resultados en semanas, no meses",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        desc: "Analizamos tus procesos, fuentes de datos y prioridades. En 1–2 semanas tienes un mapa de oportunidades con ROI estimado.",
        time: "1–2 semanas",
      },
      {
        number: "02",
        title: "Implementación",
        desc: "Construimos, probamos y desplegamos las soluciones priorizadas. Iteramos en ciclos cortos con resultados visibles desde la primera entrega.",
        time: "4–10 semanas",
      },
      {
        number: "03",
        title: "Acompañamiento",
        desc: "Monitoreamos, ajustamos y mejoramos mensualmente. Tu equipo gana autonomía; nosotros garantizamos que el sistema evoluciona.",
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
    sub: "El agente de la demo está en vivo y responde ahora mismo. Estos son los ejemplos de aplicación por sector, no clientes referenciados.",
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
    items: [
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
    label: "Empieza hoy",
    heading: "Agenda tu diagnóstico gratuito",
    sub: "30 minutos. Sin compromiso. Saldrás con un mapa claro de las oportunidades de automatización en tu empresa.",
    namePlaceholder: "Tu nombre",
    companyPlaceholder: "Empresa",
    whatsappPlaceholder: "WhatsApp (con código de país)",
    sectorLabel: "Sector",
    sectors: ["Restaurantes", "Turismo", "Comercio", "Manufactura", "Servicios financieros", "Otro"],
    submit: "Solicitar diagnóstico gratuito →",
    altCTA: "O escríbenos directo por WhatsApp",
    successTitle: "¡Listo! Te contactamos en menos de 24 horas.",
    successBody: "Revisa tu WhatsApp. Agendaremos una llamada de 30 minutos para explorar tu caso.",
  },

  // Footer
  footer: {
    tagline: "Automatiza lo repetitivo. Decide con datos. Escala sin límites.",
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
