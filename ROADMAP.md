# ROADMAP — Nexia Landing Page

## Estado actual
> Fase 0 — Planificación completada. Listo para iniciar desarrollo.

## Idea de negocio (resumen rápido)
Nexia es un estudio de **consultoría de IA, analítica de datos y automatización de procesos** orientado a empresas colombianas que no tienen equipo interno de datos. Modelo: proyectos cerrados + retainer mensual + productización futura. Sectores iniciales: restaurantes, turismo, comercio, manufactura. La web debe ser prueba viva del servicio — no solo texto, sino demos interactivos funcionando.

---

## Fases de desarrollo

### FASE 1 — Scaffold y configuración base
**Objetivo**: Proyecto Astro funcional corriendo en local y deployable en Vercel.

- [ ] Crear proyecto Astro 5 con template minimal y TypeScript strict
- [ ] Instalar y configurar `@astrojs/tailwind` (`applyBaseStyles: false`)
- [ ] Instalar y configurar `@astrojs/vercel` (output: static)
- [ ] Instalar y configurar `@astrojs/sitemap` con i18n (es-CO / en-US)
- [ ] Configurar `astro.config.mjs` con site URL, i18n routing sin prefijo default
- [ ] Crear `tailwind.config.mjs` con paleta de colores custom (variables CSS)
- [ ] Crear `src/styles/global.css` con `@tailwind` directives y `:root` CSS vars
- [ ] Crear `src/layouts/Layout.astro` con `<head>` completo (fuentes Google, meta tags, OG)
- [ ] Crear `vercel.json` con headers de caché para assets estáticos
- [ ] Crear `favicon.svg` (logo Nexia — letra N geométrica en cian)
- [ ] Verificar build limpio: `npm run build` sin errores

**Entregable**: URL de Vercel Preview funcional con página en blanco pero configurada.

---

### FASE 2 — Estructura i18n y Layout
**Objetivo**: Sistema de traducciones operativo, layout responsive con Header y Footer.

- [ ] Crear `src/i18n/es.ts` con todos los strings en español
- [ ] Crear `src/i18n/en.ts` con versión en inglés
- [ ] Crear helper `src/i18n/index.ts` para `useTranslations(lang)`
- [ ] Crear `src/pages/index.astro` (es, default)
- [ ] Crear `src/pages/en/index.astro`
- [ ] Crear `src/components/Header.astro` — logo + nav links + CTA button + mobile menu
- [ ] Crear `src/components/Footer.astro` — links, redes sociales, copyright, WhatsApp flotante
- [ ] Verificar navegación es ↔ en funcional

**Entregable**: Layout completo con Header/Footer en ambos idiomas.

---

### FASE 3 — Secciones de contenido (above the fold)
**Objetivo**: Hero + El Problema visualmente impactantes y con contenido real.

- [ ] **Hero.astro**
  - [ ] Headline principal con tipografía Syne 800 grande + gradiente de texto animado CSS
  - [ ] Subtítulo con DM Sans 400
  - [ ] Glow blob animado en fondo (CSS `@keyframes` + `filter: blur`)
  - [ ] Grid blueprint tenue como SVG `background-image`
  - [ ] **GSAP**: `gsap.from()` con stagger en elementos `.hero-item` al cargar
  - [ ] Cursor glow en desktop (JS vanilla, 60fps con `requestAnimationFrame`)
  - [ ] CTA primario "Agenda tu diagnóstico gratuito" (scroll a formulario)
  - [ ] CTA secundario "Ver cómo funciona ↓" 
  - [ ] Números de social proof (empresas, horas ahorradas, sectores)
  - [ ] Decoración: grid lines en el fondo + glow cian sutil
  - [ ] Animación: fade-in escalonado con `animation-delay` CSS

- [ ] **WhyNow.astro** (El Problema)
  - [ ] 3 pain points en cards con íconos SVG
  - [ ] Estadísticas del mercado colombiano (IA/RPA adopción)  - [ ] **GSAP ScrollTrigger**: reveal `.reveal-section` al entrar en viewport  - [ ] Transición visual suave hacia la sección de servicios

**Entregable**: Primera mitad de la página visualmente completa.

---

### FASE 4 — Secciones de solución y proceso
**Objetivo**: Servicios, proceso y resultados que conviertan al visitante.

- [ ] **Services.astro**
  - [ ] Grid de 5 tarjetas de servicio
  - [ ] Cada tarjeta: ícono SVG + nombre + descripción + badge donde aplique
  - [ ] Hover: borde gradiente cian + `box-shadow` glow + `-translate-y-1` (Tailwind)
  - [ ] Badge "Más solicitado" en Automatización RPA
  - [ ] **Enlace a demo** desde cada tarjeta con badge "Ver demo en vivo →" donde exista demo

- [ ] **HowItWorks.astro**
  - [ ] 3 pasos numerados: Diagnóstico → Implementación → Acompañamiento
  - [ ] Conectados visualmente (línea o flecha)
  - [ ] Tiempo estimado de cada fase

- [ ] **Results.astro**
  - [ ] Métricas de impacto con números grandes animados (**GSAP counter** + ScrollTrigger)
  - [ ] Ejemplos de casos: "aprobaciones de días a horas", "+40% capacidad productiva"
  - [ ] Testimonios genéricos por rol/sector (sin nombres reales hasta tener clientes)

**Entregable**: Flujo completo de propuesta de valor explicado.

---

### FASE 5 — FAQ, formulario y CTA final
**Objetivo**: Reducir objeciones y capturar leads.

- [ ] **FAQ.astro**
  - [ ] Acordeón CSS puro (sin JS o con mínimo JS vanilla)
  - [ ] 6 preguntas: costo, tiempo, integración con sistemas actuales, tamaño mínimo de empresa, datos seguros, soporte post-proyecto

- [ ] **FinalCTA.astro** — Formulario de contacto
  - [ ] Campos: nombre, empresa, WhatsApp, sector (select)
  - [ ] Integración con Formspree (`PUBLIC_FORM_ENDPOINT`)
  - [ ] Validación HTML5 + mensaje de éxito inline
  - [ ] CTA alternativo: botón WhatsApp directo

- [ ] Verificar flujo completo del formulario en producción

**Entregable**: Página 100% funcional con captura de leads operativa.

---

### FASE 5.5 — Demos en vivo (la web como prueba del servicio)
**Objetivo**: 4 demos interactivos que demuestren las capacidades de Nexia sin necesidad de una reunión previa.

> Implementar en orden de prioridad: Calculadora ROI → Dashboard → Chat IA → Reserva de citas.

#### Demo 1 — Calculadora de ROI (prioridad alta, sin dependencias externas)
- [ ] Formulario: empleados, horas manuales/semana, costo hora promedio
- [ ] Cálculo instantáneo: ahorro anual, meses de retorno
- [ ] GSAP counter animado en el resultado
- [ ] CTA que pre-llena el formulario de contacto con los datos ingresados
- [ ] Ruta: `/demos/calculadora-roi`

#### Demo 2 — Dashboard de analítica (alto impacto visual)
- [ ] Instalar Chart.js vía CDN (no npm)
- [ ] KPIs en tarjetas: ventas del día, ticket promedio, unidades vendidas
- [ ] Gráfica de líneas (ventas últimos 7 días) + dona (categorías)
- [ ] Datos simulados con variación aleatoria cada 5s (efecto tiempo real)
- [ ] Filtros: hoy / semana / mes (cambia los datos del gráfico)
- [ ] Ruta: `/demos/dashboard`

#### Demo 3 — Asistente de IA para restaurante
- [ ] UI de chat estilo WhatsApp dark (Vanilla JS, sin framework)
- [ ] Vercel Edge Function en `/api/chat.ts` con OpenAI API (gpt-4o-mini)
- [ ] Streaming de respuesta con `ReadableStream` para efecto de escritura
- [ ] System prompt: restaurante ficticio "La Mesa" (menú, horarios, reservas)
- [ ] Rate limiting: máx 10 mensajes por IP/sesión
- [ ] `OPENAI_API_KEY` solo en env variables de Vercel, nunca en cliente
- [ ] Ruta: `/demos/asistente-ia`

#### Demo 4 — Reserva de citas
- [ ] Formulario multi-paso: servicio → fecha/hora → datos → confirmación
- [ ] Calendario interactivo en Vanilla JS (slots disponibles/ocupados)
- [ ] Al confirmar: Vercel Edge Function envía email de confirmación con Resend API
- [ ] Panel de "agenda del día" visual
- [ ] Estado en `localStorage`
- [ ] `RESEND_API_KEY` solo en env variables de Vercel
- [ ] Ruta: `/demos/reserva-citas`

#### Página índice de demos
- [ ] Crear `/demos/index.astro` con tarjetas de los 4 demos
- [ ] Enlazar desde la barra de navegación principal (tab "Demos")
- [ ] Cada tarjeta: nombre, descripción, badge del servicio que demuestra, CTA "Probar ahora"

**Entregable**: 4 demos accesibles, linkeados desde la landing y con sus propias rutas indexables.

---

### FASE 6 — SEO, performance y accesibilidad
**Objetivo**: Lista para indexar y con buenas métricas Lighthouse.

- [ ] Generar `og-image.jpg` (1200×630) — diseño de marca Nexia
- [ ] Verificar canonical URLs en ambos idiomas
- [ ] Agregar `robots.txt` y confirmar sitemap en `/sitemap-index.xml`
- [ ] Comprimir imágenes a WebP
- [ ] Auditar contraste de colores (mínimo WCAG AA)
- [ ] Agregar `aria-label` a todos los íconos interactivos
- [ ] Lighthouse score objetivo: Performance ≥90, Accessibility ≥90, SEO ≥95
- [ ] Configurar headers de caché en `vercel.json` para assets

**Entregable**: Sitio listo para dominio propio y Google Search Console.

---

### FASE 7 — Dominio, analytics y lanzamiento
**Objetivo**: Nexia online con dominio propio y tracking básico.

- [ ] Conectar dominio `nexia.co` (o el elegido) en Vercel
- [ ] Agregar Google Analytics 4 o Plausible (privacy-friendly)
- [ ] Configurar Google Search Console
- [ ] Crear perfil de Google Business (si aplica)
- [ ] Configurar alertas de formulario (email de notificación en Formspree)
- [ ] Prueba de carga completa en móvil (Chrome DevTools throttling)

**Entregable**: 🚀 **Nexia está vivo.**

---

## Backlog / Fase futura

- Blog/recursos: artículos SEO sobre IA en Colombia, automatización RPA, casos de uso
- Página de casos de éxito con métricas reales de clientes
- Calculadora de ROI interactiva ("¿cuánto pierdes sin automatizar?")
- Portal de cliente para seguimiento de proyectos
- Internacionalización completa revisada por hablante nativo de inglés
- Chatbot de calificación de leads en la propia web

---

## Criterios de aceptación (Definition of Done)

- [ ] Build sin errores ni warnings
- [ ] Deploy en Vercel Preview link funcional
- [ ] Formulario de contacto envía email correctamente
- [ ] Página renderiza correctamente en mobile (375px), tablet (768px) y desktop (1440px)
- [ ] Ambas rutas `/` y `/en/` accesibles y con contenido correcto
- [ ] Sitemap generado correctamente
- [ ] No hay secretos ni tokens hardcodeados en el código
