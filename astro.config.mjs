import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nexias.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
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
