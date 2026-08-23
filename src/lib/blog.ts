import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/**
 * Artículos publicables, del más reciente al más antiguo.
 *
 * Los borradores se ven en desarrollo y desaparecen al compilar: como no se
 * genera la página, tampoco entra al sitemap. Un artículo a medias indexado
 * cuesta más que uno que todavía no existe.
 */
export async function listarPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

const FORMATO_LARGO = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "23 de agosto de 2026". En UTC, para que la fecha no se corra un día. */
export function fechaLarga(fecha: Date): string {
  return FORMATO_LARGO.format(fecha);
}

/** Estimación a 200 palabras por minuto, redondeando hacia arriba. */
export function minutosDeLectura(cuerpo: string): number {
  const palabras = cuerpo.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palabras / 200));
}
