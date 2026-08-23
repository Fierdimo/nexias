import type { Lang } from "../i18n/index";
import { useTranslations } from "../i18n/index";
import { servicios } from "../data/servicios";

export const SITE = "https://nexias.dev";

const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;
/*
 * El fundador necesita @id propio porque ahora lo referencian dos sitios: la
 * ficha de la organización y el `author` de cada artículo. Sin un @id estable
 * Google ve dos personas distintas con el mismo nombre, y la experiencia
 * demostrable de una no le cuenta a la otra.
 */
const PERSON_ID = `${SITE}/#gregorio-morales`;

/**
 * Ficha de la consultoría. `ProfessionalService` es un subtipo de
 * `LocalBusiness`, que es lo que Google espera de un negocio de servicios con
 * sede física — más específico que `Organization` a secas.
 */
export function organization(lang: Lang, description: string) {
  const t = useTranslations(lang);

  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Nexias",
    alternateName: "Nexias — Agentes de IA y automatización",
    slogan: "Para que ningún cliente se quede sin respuesta",
    url: lang === "en" ? `${SITE}/en/` : `${SITE}/`,
    logo: `${SITE}/og-image.jpg`,
    image: `${SITE}/og-image.jpg`,
    description,
    email: "grmoralesp@gmail.com",
    telephone: "+573028308008",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cartagena de Indias",
      addressRegion: "Bolívar",
      addressCountry: "CO",
    },
    /*
     * Un `areaServed` con una sola "Place: América Latina" no le dice a Google
     * que atendemos Bogotá o Medellín, que es como se busca esto en la
     * práctica ("agentes de IA Bogotá"). Se enumeran los mercados reales.
     */
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "City", name: "Cartagena de Indias" },
      { "@type": "City", name: "Barranquilla" },
      { "@type": "City", name: "Bogotá" },
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Cali" },
      { "@type": "Place", name: "América Latina" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.3910,
      longitude: -75.4794,
    },
    /*
     * `keywords` es de las pocas propiedades donde declarar la temática sin
     * forzarla dentro del copy visible. No sustituye al texto de la página:
     * lo confirma.
     */
    keywords:
      "agentes de IA, agentes IA Colombia, chatbots, chatbot WhatsApp, agente de voz IA, inteligencia artificial para empresas, automatización de procesos, RPA, dashboards, business intelligence",
    knowsAbout: [
      "Agentes de IA",
      "Chatbots con inteligencia artificial",
      "WhatsApp Business API",
      "Agentes de voz",
      "Automatización de procesos (RPA)",
      "Analítica de datos y business intelligence",
    ],
    knowsLanguage: ["es-CO", "en-US"],
    // Perfil del fundador: para una práctica de una persona es la referencia
    // real. Un sameAs que apunta a un 404 le estropea a Google la resolución
    // de la entidad, así que aquí solo van perfiles que existen.
    sameAs: ["https://www.linkedin.com/in/gregorio-morales-pajaro/"],
    founder: { "@id": PERSON_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "en" ? "AI and automation services" : "Servicios de IA y automatización",
      itemListElement: t.services.list.map((s: { name: string; desc: string }) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.desc },
      })),
    },
  };
}

export function webSite(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${SITE}/`,
    name: "Nexias",
    inLanguage: lang === "en" ? "en-US" : "es-CO",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Generado desde la misma fuente que renderiza el acordeón visible. Google
 * penaliza el marcado de FAQ que no coincide con lo que ve el usuario, así que
 * esto nunca debe escribirse a mano.
 */
export function faqPage(lang: Lang) {
  const t = useTranslations(lang);

  return {
    "@type": "FAQPage",
    "@id": `${SITE}${lang === "en" ? "/en/" : "/"}#faq`,
    inLanguage: lang === "en" ? "en-US" : "es-CO",
    mainEntity: t.faq.items.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Página de servicio. `provider` referencia el nodo de la organización por
 * @id en vez de repetirlo, que es lo que permite a Google unir ambos.
 */
export function service(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    "@id": `${SITE}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Colombia" },
    url: `${SITE}${opts.path}`,
  };
}

/** Igual que `faqPage`, pero para las preguntas propias de una página. */
export function faqFor(path: string, items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE}${path}#faq`,
    inLanguage: "es-CO",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: `${SITE}${step.path}`,
    })),
  };
}

/**
 * Nodos `Service` de la portada, generados desde las mismas páginas de
 * servicio que existen de verdad.
 *
 * La portada declaraba la organización y el FAQ, pero no qué vende. Sin eso,
 * la única forma que tenía Google de asociar "agentes de IA" o "chatbot" con
 * este dominio era el texto corrido. Cada nodo cuelga de la organización por
 * @id, así que la portada refuerza las páginas hijas en vez de competir con
 * ellas.
 */
export function homeServices() {
  return servicios.map((s) => ({
    "@type": "Service",
    "@id": `${SITE}/servicios/${s.slug}/#service`,
    name: s.nav,
    alternateName: s.h1,
    description: s.description,
    serviceType: s.serviceType,
    url: `${SITE}/servicios/${s.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Colombia" },
  }));
}

/**
 * Ficha del autor. Se emite en cada artículo y en la portada, siempre con el
 * mismo @id, para que Google acumule sobre una sola entidad la experiencia que
 * respalda lo que se publica — que es lo que mira al evaluar contenido
 * sensible como el regulatorio.
 */
export function person() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Gregorio Morales Pajaro",
    url: "https://www.linkedin.com/in/gregorio-morales-pajaro/",
    sameAs: ["https://www.linkedin.com/in/gregorio-morales-pajaro/"],
    jobTitle: "Consultor en IA y automatización",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Agentes de IA",
      "Chatbots con inteligencia artificial",
      "Agentes de voz",
      "Automatización de procesos",
    ],
  };
}

/**
 * Artículo del blog.
 *
 * `dateModified` sale de la fecha real de edición y no de la compilación: es
 * la señal con la que Google decide si vale la pena volver a rastrear la URL,
 * y sellarla en cada despliegue la convierte en ruido que deja de creerse.
 */
export function blogPosting(opts: {
  title: string;
  description: string;
  path: string;
  publishedAt: Date;
  updatedAt?: Date;
  keywords?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${SITE}${opts.path}#article`,
    headline: opts.title,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    inLanguage: "es-CO",
    datePublished: opts.publishedAt.toISOString(),
    dateModified: (opts.updatedAt ?? opts.publishedAt).toISOString(),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE}/og-image.jpg`,
    isPartOf: { "@id": `${SITE}/blog/#blog` },
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${opts.path}` },
  };
}

/** Índice del blog: el contenedor del que cuelga cada artículo por `isPartOf`. */
export function blog(posts: { name: string; path: string }[]) {
  return {
    "@type": "Blog",
    "@id": `${SITE}/blog/#blog`,
    url: `${SITE}/blog/`,
    name: "Blog de Nexias",
    description:
      "Artículos sobre agentes de IA, chatbots y automatización para empresas en Colombia.",
    inLanguage: "es-CO",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE}${p.path}#article`,
      headline: p.name,
      url: `${SITE}${p.path}`,
    })),
  };
}
