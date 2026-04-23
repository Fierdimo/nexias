# COPILOT INSTRUCTIONS — Nexia Landing Page

---

## Contexto del negocio (NO publicar tal cual — usar como guía editorial)

### ¿Qué es Nexia?
Nexia es un **estudio especializado en consultoría de IA, analítica de datos y automatización de procesos**, orientado inicialmente a empresas colombianas (pymes, comercios, restaurantes, turismo, empresas afiliadas a cámaras de comercio) con proyección de escalado a otros sectores y países.

### Propuesta de valor central
Las empresas colombianas están adoptando IA y automatización (RPA) para reducir costos, eliminar trabajo manual y tomar decisiones en tiempo real. **La mayoría de pymes y empresas medianas no tienen equipo interno de datos/IA** y buscan aliados externos. Nexia cubre ese hueco con proyectos concretos, medibles y asequibles.

### Modelo de negocio
| Línea | Descripción | Ticket estimado |
|-------|-------------|-----------------|
| **Proyecto cerrado** | Diagnóstico + 1–3 automatizaciones/dashboards en 6–12 semanas | Por alcance definido |
| **Retainer mensual** | Soporte, monitoreo y mejoras continuas | Paquetes por horas/mes |
| **Productización futura** | Soluciones repetibles empaquetadas como producto para sectores específicos | SaaS / licencia |

### Sectores iniciales con mayor tracción
Restaurantes, turismo, comercio, manufactura, servicios financieros/contables.

### Por qué ahora en Colombia
- La automatización con IA y RPA ha pasado de "tendencia" a **estándar competitivo**.
- Casos documentados: aprobaciones que bajan de días a horas, +40% capacidad productiva, mejoras en servicio al cliente.
- Muchas pymes no tienen equipo de datos y buscan aliados externos especializados.
- Sectores como banca, retail, servicios y manufactura ya reportan ahorros operativos significativos.

### Los 5 servicios core
1. **Diagnóstico de datos y procesos** — Mapa de procesos + inventario de fuentes + lista priorizada de oportunidades
2. **Analítica y BI predictivo** — Dashboards, modelos predictivos (demanda, riesgo, abandono de clientes)
3. **Automatización RPA + APIs** — Conciliación contable, reportes, flujos de aprobación, carga de datos
4. **Asistentes y agentes de IA** — Chatbots de servicio/ventas, agentes internos de soporte y consulta
5. **Acompañamiento continuo** — Monitoreo, ajustes y mejoras mensuales

### Tono editorial de la web
- **Serio pero accesible**: hablar de tecnología sin jerga innecesaria, mostrando impacto en negocios reales.
- **Confianza técnica**: la web misma debe demostrar el dominio de la tecnología (ver sección de demos en vivo).
- **Orientado a resultados**: siempre hablar en términos de tiempo ahorrado, costos reducidos, decisiones mejoradas.
- **Colombiano con proyección**: referentes locales, lenguaje próximo, pero aspiración regional.

---

## Visión del proyecto
Landing page de marketing para **Nexia** con el objetivo de generar leads y credibilidad. La página debe funcionar como **prueba viva del servicio**: no solo describir lo que Nexia hace, sino demostrarlo con elementos tecnológicos interactivos integrados (demos en vivo).

---

## Stack técnico obligatorio
- **Framework**: Astro 5 (static output)
- **Estilos**: Tailwind CSS v3 (`applyBaseStyles: false`)
- **Deploy**: Vercel (`@astrojs/vercel` adapter, modo `static`)
- **i18n**: Español por defecto (`es-CO`), inglés secundario (`en-US`) — routing sin prefijo en locale default
- **Sitemap**: `@astrojs/sitemap` con configuración i18n
- **Sin frameworks JS de UI** (no React, no Vue) — solo Astro components y Vanilla JS donde sea necesario
- **Fuentes**: Google Fonts vía `<link>` en el `<head>` (no paquetes npm de fuentes)
- **Íconos**: SVG inline o Heroicons SVG (sin dependencia de paquete de íconos)

---

## Arquitectura de carpetas esperada

```
nexia/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg          # Open Graph image 1200×630
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── WhyNow.astro
│   │   ├── HowItWorks.astro
│   │   ├── Testimonials.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── es.ts             # Textos en español
│   │   └── en.ts             # Textos en inglés
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML, fuentes, meta tags, OG
│   ├── pages/
│   │   ├── index.astro       # Español (default)
│   │   └── en/
│   │       └── index.astro   # Inglés
│   └── styles/
│       └── global.css        # @tailwind directives + variables CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Identidad visual y diseño

### Paleta de colores
```css
/* Variables en :root dentro de global.css */
--color-bg:        #070B14;   /* azul-negro profundo */
--color-surface:   #0D1526;   /* superficie de tarjetas */
--color-border:    #1A2B4A;   /* bordes sutiles */
--color-accent:    #00D4FF;   /* cian eléctrico — CTA, highlights */
--color-accent2:   #7B5EA7;   /* violeta medio — gradientes secundarios */
--color-text:      #E8EDF5;   /* texto principal */
--color-muted:     #6B7FA3;   /* texto secundario */
```

### Tipografía
- **Display / Headlines**: `Syne` (700, 800) — geométrica, tecnológica, impactante
- **Body**: `DM Sans` (400, 500) — legible, moderna, neutra
- Importar ambas desde Google Fonts en `Layout.astro`

### Estética general
- Tema oscuro como base
- Fondo con ruido de grano sutil (SVG filter o `background-image: url("data:image/svg+xml...")`)
- Grid lines decorativas muy tenues en el hero (estilo blueprint/tech)
- Bordes con gradiente cian en tarjetas de servicios al hacer hover
- **Animaciones: usar GSAP + ScrollTrigger para efectos scroll-driven** (ver sección de Animaciones)
- Tailwind para transiciones hover y utilidades de animación simples

---

## Animaciones y motion design

### Librería: GSAP + ScrollTrigger
Usar **GSAP** (GreenSock) cargado desde CDN en el `<head>` (sin npm) para animaciones avanzadas. Es framework-agnostic y funciona perfecto con Astro + Vanilla JS.

```html
<!-- En Layout.astro -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>
```

### Patrón base de inicialización (en cada .astro con `<script>`)
```javascript
gsap.registerPlugin(ScrollTrigger);

// Entrada del Hero — fade + translateY escalonado
gsap.from(".hero-item", {
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.15,
  ease: "power3.out"
});

// Reveal on scroll para secciones
gsap.utils.toArray(".reveal-section").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true
    }
  });
});

// Contadores animados (métricas de impacto)
gsap.utils.toArray(".counter").forEach((el) => {
  const target = parseInt(el.dataset.target);
  gsap.from({ val: 0 }, {
    val: target,
    duration: 2,
    ease: "power1.out",
    onUpdate() { el.textContent = Math.round(this.targets()[0].val).toLocaleString("es-CO"); },
    scrollTrigger: { trigger: el, start: "top 80%", once: true }
  });
});
```

### Tailwind para animaciones simples
Usar Tailwind `transition`, `hover:`, `group-hover:` para:
- Hover en tarjetas de servicios (borde gradiente + scale sutil)
- Botones CTA (scale + brillo)
- Links de navegación (underline deslizante)

```html
<!-- Ejemplo tarjeta servicio -->
<div class="group border border-[var(--color-border)] hover:border-cyan-400/50
            transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]
            hover:-translate-y-1 rounded-xl p-6">
```

### Efectos especiales del Hero
- **Glow blob**: `position: absolute` con `filter: blur(80px)` en colores accent, animado con CSS `@keyframes` lento
- **Grid blueprint**: SVG background-image con líneas cada 40px en `rgba(0,212,255,0.04)`
- **Cursor glow**: seguimiento del mouse con JS vanilla creando halo detrás del cursor (solo desktop)
- **Texto gradient animado**: `background-clip: text` con gradiente animado en el headline principal

### Respeta `prefers-reduced-motion`
```javascript
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReduced) {
  // inicializar GSAP aquí
}
```

---

## Contenido y copy

### Nombre y tagline
- **Nombre**: Nexia
- **Tagline principal**: "Automatiza lo repetitivo. Decide con datos. Escala sin límites."
- **Subtítulo hero**: "Convertimos los procesos manuales de tu empresa en sistemas inteligentes que trabajan 24/7. Consultoría de IA y automatización para negocios colombianos."

### Propuesta de valor (Hero)
- Headline: impacto directo sobre el resultado de negocio
- Sub-headline: claridad sobre QUÉ hacemos y PARA QUIÉN
- CTA primario: "Agenda tu diagnóstico gratuito"
- CTA secundario: "Ver cómo funciona ↓"
- Social proof: número de procesos automatizados, empresas atendidas, horas ahorradas (usar cifras creíbles iniciales: "12+ empresas piloto", "2,400+ horas liberadas", "6 sectores")

### Secciones en orden
1. **Hero** — Headline + subtítulo + CTA + social proof números
2. **El Problema** — Dolor real: equipos atrapados en tareas manuales, datos dispersos, decisiones a ciegas
3. **Servicios** — 5 servicios con íconos SVG, descripción breve, badge de "más solicitado" en Automatización RPA
4. **Por qué ahora** — Stats del mercado colombiano: tendencia IA/RPA, pymes sin equipo interno de datos
5. **Cómo trabajamos** — 3 pasos: Diagnóstico → Implementación → Acompañamiento
6. **Resultados** — Métricas de impacto (aprobaciones de días a horas, +40% capacidad productiva, etc.)
7. **FAQ** — 6 preguntas frecuentes sobre costo, tiempo, integración con sistemas actuales
8. **CTA Final** — Formulario de contacto simple (nombre, empresa, WhatsApp/email, sector) + CTA

### Los 5 servicios
| # | Nombre | Descripción corta |
|---|--------|-------------------|
| 1 | Diagnóstico de datos y procesos | Mapeamos tus operaciones y encontramos las oportunidades de mayor retorno |
| 2 | Analítica y BI predictivo | Dashboards e insights que anticipan demanda, riesgo y rendimiento |
| 3 | Automatización RPA + APIs | Eliminamos tareas repetitivas: conciliaciones, reportes, flujos de aprobación |
| 4 | Asistentes y agentes de IA | Chatbots y agentes que atienden clientes, generan leads y apoyan a tu equipo |
| 5 | Acompañamiento continuo | Monitoreo, mejoras y evolución mensual de tus sistemas |

---

## Formulario de contacto
- Campos: nombre, empresa, WhatsApp, sector (select: restaurantes, turismo, comercio, manufactura, otro)
- Acción: `mailto:` o endpoint serverless de Vercel (POST a `/api/contact`)
- Sin backend propio por ahora — usar **Formspree** o similar (URL de endpoint como variable de entorno `PUBLIC_FORM_ENDPOINT`)
- Mostrar mensaje de éxito inline sin reload

---

## Demos en vivo ("la web como prueba del servicio")

Esta es la diferencia clave con cualquier otra consultora: **la propia web demuestra las capacidades**. Cada demo vive en una ruta `/demos/[nombre]` y se enlaza desde la sección de servicios correspondiente.

### Por qué incluir demos
- Elimina la barrera de credibilidad antes de la primera reunión
- Convierte la web en una herramienta de venta activa, no solo un folleto
- Diferencia radical frente a competidores que solo muestran texto y logos
- Cada demo genera su propio tráfico orgánico y puede viralizarse

### Demo 1 — Asistente de atención al cliente con IA
**Ruta**: `/demos/asistente-ia`  
**Descripción pública**: "Habla con un asistente de IA para restaurantes. Consulta el menú, haz reservas y resuelve dudas en tiempo real."  
**Qué demuestra**: Servicio #4 — Asistentes y agentes de IA  
**Stack técnico**:
- Widget de chat UI en Astro (Vanilla JS) — apariencia de WhatsApp/Messenger dark
- Integración con **OpenAI API** (gpt-4o-mini) vía Vercel Edge Function (`/api/chat`)
- System prompt configurable: simula un restaurante ficticio (menú, horarios, reservas)
- Streaming de respuesta con `ReadableStream` para efecto de escritura en tiempo real
- Límite de rate: 10 mensajes/sesión por IP (variable de entorno `OPENAI_API_KEY` en Vercel)

```
nexia/
└── src/
    ├── pages/demos/
    │   └── asistente-ia.astro      # UI del chat
    └── api/
        └── chat.ts                 # Vercel Edge Function
```

### Demo 2 — Reserva de citas inteligente
**Ruta**: `/demos/reserva-citas`  
**Descripción pública**: "Sistema de reserva de citas con recordatorio automático. Así luce la automatización de agenda para tu negocio."  
**Qué demuestra**: Servicio #3 — Automatización RPA + APIs  
**Stack técnico**:
- Formulario de reserva multi-paso (fecha/hora, servicio, datos de contacto)
- Calendario interactivo en Vanilla JS (sin librerías pesadas)
- Al confirmar: dispara Vercel Edge Function que envía email de confirmación vía **Resend API**
- Panel visual de "citas agendadas del día" con slots ocupados/disponibles
- Estado persistido en `localStorage` para simular sesión

### Demo 3 — Dashboard de analítica en tiempo real
**Ruta**: `/demos/dashboard`  
**Descripción pública**: "Un dashboard de ventas e inventario como el que podríamos construir para tu empresa. Datos simulados, tecnología real."  
**Qué demuestra**: Servicio #2 — Analítica y BI predictivo  
**Stack técnico**:
- Gráficas con **Chart.js** (CDN) — líneas, barras, dona
- Datos simulados con variación aleatoria realista cada 5 segundos (efecto "tiempo real")
- KPIs en la parte superior: ventas del día, ticket promedio, items más vendidos
- Filtros de período: hoy / semana / mes
- Completamente en Vanilla JS + Astro (sin framework JS)

### Demo 4 — Calculadora de ROI de automatización
**Ruta**: `/demos/calculadora-roi`  
**Descripción pública**: "Calcula cuánto tiempo y dinero podrías ahorrar automatizando tus procesos manuales."  
**Qué demuestra**: Servicio #1 — Diagnóstico de datos y procesos  
**Stack técnico**:
- Formulario interactivo: empleados, horas en tareas manuales/semana, costo hora promedio
- Cálculo instantáneo en JS: ahorro anual estimado, tiempo de retorno de inversión
- Resultado visual con número grande animado (GSAP counter)
- CTA: "Agenda tu diagnóstico gratuito" con los datos pre-llenados en el formulario de contacto

### Arquitectura de carpetas actualizada con demos
```
nexia/
└── src/
    ├── components/
    │   ├── demos/
    │   │   ├── ChatWidget.astro
    │   │   ├── BookingCalendar.astro
    │   │   ├── AnalyticsDashboard.astro
    │   │   └── ROICalculator.astro
    ├── pages/
    │   ├── index.astro
    │   ├── en/index.astro
    │   └── demos/
    │       ├── asistente-ia.astro
    │       ├── reserva-citas.astro
    │       ├── dashboard.astro
    │       └── calculadora-roi.astro
    └── (api functions → Vercel Edge en /api/)
```

### Prioridad de implementación de demos
| Prioridad | Demo | Dificultad | Impacto visual |
|-----------|------|------------|----------------|
| 1 | Calculadora ROI | Baja | Alto (inmediato, sin API key) |
| 2 | Dashboard analítica | Media | Muy alto (gráficas, "wow factor") |
| 3 | Asistente IA chat | Media-alta | Muy alto (conversacional, memorable) |
| 4 | Reserva de citas | Alta | Alto (proceso completo) |

> **Nota de seguridad**: La API key de OpenAI NUNCA va al frontend. Solo en variables de entorno de Vercel. La Edge Function actúa como proxy y aplica rate limiting.

---

## SEO y meta tags (Layout.astro)
```html
<title>{title} | Nexia — IA y Automatización para Empresas</title>
<meta name="description" content="Consultoría de inteligencia artificial, analítica de datos y automatización RPA para empresas colombianas. Diagnóstico gratuito." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<link rel="canonical" href={canonicalURL} />
```

---

## Restricciones y convenciones
- **No inventar** testimonios de personas reales con nombres propios — usar roles genéricos hasta tener clientes reales ("Gerente General, empresa de retail en Bogotá")
- **No usar imágenes de stock** de personas — preferir ilustraciones SVG, mockups de dashboard abstractos o composiciones geométricas
- **Mobile-first** en todo: breakpoints `sm`, `md`, `lg` de Tailwind
- **Performance**: no cargar fuentes extras, no JS pesado, imágenes en formato WebP
- **Accesibilidad**: contraste mínimo AA, `aria-label` en íconos, `alt` en imágenes
- Usar `<a href="https://wa.me/57XXXXXXXXXX">` para CTA de WhatsApp (número real se agrega al final)
- Todo el copy en **español** en la versión default; la versión `/en/` puede ser traducción directa

---

## Variables de entorno esperadas (`.env`)
```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXXXXX
PUBLIC_WA_NUMBER=573XXXXXXXXX
PUBLIC_SITE_URL=https://nexia.co

# Para demos en vivo (solo en Vercel, nunca en PUBLIC_)
OPENAI_API_KEY=sk-...
RESEND_API_KEY=re_...
```

> Las variables sin prefijo `PUBLIC_` nunca se exponen al navegador. Solo las Edge Functions de Vercel las acceden en servidor.

---

## Comandos útiles
```bash
# Iniciar proyecto desde cero (dentro de /nexia)
npm create astro@latest . -- --template minimal --typescript strict

# Instalar integraciones
npx astro add tailwind vercel sitemap

# Dev
npm run dev

# Build
npm run build
```
