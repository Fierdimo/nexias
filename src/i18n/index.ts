import { es } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";

const translations = { es, en } as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "en") return "en";
  return "es";
}

export function getRouteForLang(lang: Lang, path: string = ""): string {
  if (lang === "en") return `/en${path || "/"}`;
  return path || "/";
}
