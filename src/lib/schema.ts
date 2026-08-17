import type { Lang } from "../i18n/index";
import { useTranslations } from "../i18n/index";

export const SITE = "https://nexias.dev";

const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;

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
    areaServed: { "@type": "Country", name: "Colombia" },
    knowsLanguage: ["es-CO", "en-US"],
    // Perfil del fundador: para una práctica de una persona es la referencia
    // real. Un sameAs que apunta a un 404 le estropea a Google la resolución
    // de la entidad, así que aquí solo van perfiles que existen.
    sameAs: ["https://www.linkedin.com/in/gregorio-morales-pajaro/"],
    founder: {
      "@type": "Person",
      name: "Gregorio Morales Pajaro",
      url: "https://www.linkedin.com/in/gregorio-morales-pajaro/",
    },
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
