import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { servicios } from "./data/servicios";

/*
 * Colección del blog.
 *
 * El blog no existe para publicar: existe para que las páginas de servicio
 * rankeen. Por eso `servicio` es obligatorio — cada artículo declara a qué
 * página alimenta, y la plantilla enlaza a esa página con ancla descriptiva.
 * Un artículo que no sabe a qué servicio pertenece es un artículo que no
 * debería escribirse.
 *
 * El slug se valida contra los servicios que existen de verdad, así que un
 * error de dedo rompe la compilación en vez de publicar un enlace muerto.
 */
const slugsDeServicio = servicios.map((s) => s.slug) as [string, ...string[]];

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    /** El `<title>`: el texto que compite en la página de resultados. */
    title: z.string().max(70),
    /** El titular visible. Puede —y suele— diferir del `title`. */
    h1: z.string(),
    description: z.string().min(80).max(180),
    /**
     * La consulta que persigue el artículo. No se renderiza; documenta la
     * intención para que el texto no se desvíe al editarlo dentro de un año.
     */
    keyword: z.string(),
    /** Página de servicio a la que alimenta este artículo. */
    servicio: z.enum(slugsDeServicio),
    publishedAt: z.coerce.date(),
    /**
     * Solo cuando el contenido cambió de verdad. Es lo que se emite como
     * `dateModified` y como `lastmod` del sitemap, y es la señal con la que
     * Google decide a qué URL volver: inflarla la vuelve ruido.
     */
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    /** Preguntas propias del artículo; alimentan el marcado FAQPage. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
