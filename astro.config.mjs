import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

/** Mapa "/blog/<slug>/" → fecha ISO de la última edición real del artículo. */
const fechasDelBlog = (() => {
  const dir = path.resolve("./src/content/blog");
  const mapa = new Map();
  if (!fs.existsSync(dir)) return mapa;

  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const texto = fs.readFileSync(path.join(dir, archivo), "utf-8");
    const frontmatter = texto.split(/^---\s*$/m)[1] ?? "";
    const leer = (campo) => frontmatter.match(new RegExp(`^${campo}:\\s*(.+)$`, "m"))?.[1].trim();

    // Los borradores no generan página, así que tampoco cuentan aquí.
    if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;

    const fecha = leer("updatedAt") ?? leer("publishedAt");
    if (!fecha) continue;

    const parseada = new Date(fecha.replace(/^["']|["']$/g, ""));
    if (Number.isNaN(parseada.getTime())) continue;

    mapa.set(`/blog/${archivo.replace(/\.md$/, "")}/`, parseada.toISOString());
  }
  return mapa;
})();

export default defineConfig({
  site: "https://nexias.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      /*
       * Sin lastmod, el sitemap solo dice qué URLs existen. Con él dice
       * además cuáles cambiaron, que es la señal con la que Google decide a
       * cuál volver antes — y la única forma de pedir un re-rastreo que no
       * consume el cupo diario de inspección de URLs.
       *
       * Se sella con la fecha de compilación: en un sitio estático como este,
       * un despliegue es exactamente el momento en que el contenido pudo
       * cambiar.
       */
      lastmod: new Date(),
      /*
       * Los artículos llevan su propia fecha, no la de compilación.
       *
       * Sellar un artículo de hace ocho meses con la fecha del último
       * despliegue le dice a Google que cambió cuando no cambió. Lo hace dos
       * veces, comprueba que el contenido es el mismo y deja de creerle al
       * `lastmod` de todo el dominio — justo la señal que sirve para pedir un
       * re-rastreo cuando de verdad se edita algo.
       *
       * Se lee el frontmatter en crudo porque la configuración se evalúa antes
       * de que exista la API de colecciones. Es poco elegante y es correcto.
       */
      /*
       * Mientras no haya ningún artículo publicado, el índice del blog existe
       * pero no tiene nada que mostrar. Anunciarlo en el sitemap es invitar a
       * Google a indexar una página vacía; la página ya se marca noindex, y
       * esto evita además que se pida el rastreo.
       */
      filter: (url) => fechasDelBlog.size > 0 || new URL(url).pathname !== "/blog/",
      serialize(item) {
        const fecha = fechasDelBlog.get(new URL(item.url).pathname);
        if (fecha) item.lastmod = fecha;
        return item;
      },
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CO",
          en: "en-US",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
