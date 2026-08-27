/*
 * Animaciones de scroll del landing.
 *
 * GSAP se importa como dependencia y no desde un CDN. El motivo está escrito
 * en el propio historial del sitio: los contadores llegaron a mostrar "0/7" y
 * "0%" a visitantes reales cuando el CDN tardaba o un bloqueador lo cortaba.
 * Un dato equivocado es peor que ninguno. Al venir en el bundle, GSAP y
 * ScrollTrigger llegan siempre juntos y con el resto de la página.
 *
 * Regla que se repite en todo el archivo: el estado inicial oculto lo pone
 * GSAP en tiempo de ejecución (`gsap.from`), nunca el CSS. Si este módulo no
 * llegara a ejecutarse, el contenido se queda visible en su sitio en vez de
 * quedarse invisible para siempre.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Cifras que suben desde cero.
 *
 * El cero lo pone el script justo antes de animar (`onStart`), no el marcado:
 * así el número correcto es lo que se sirve en el HTML y lo que ve quien
 * llegue sin que esto llegue a correr.
 */
function countUp(el: HTMLElement) {
  const target = parseInt(el.dataset.target ?? '0', 10);
  if (Number.isNaN(target) || el.dataset.counted === '1') return;
  el.dataset.counted = '1';

  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power1.out',
    onStart() {
      el.textContent = '0';
    },
    onUpdate() {
      el.textContent = String(Math.round(obj.val));
    },
    onComplete() {
      el.textContent = String(target);
    },
  });
}

/**
 * Barra de progreso de lectura y compactado del header.
 *
 * Las dos van atadas al scroll (no son movimiento autónomo), así que se
 * mantienen también con "reducir movimiento": informan de dónde estás, que es
 * justo lo que esa preferencia quiere conservar.
 */
function chrome() {
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
      }
    );
  }

  const header = document.getElementById('main-header');
  if (header) {
    ScrollTrigger.create({
      start: 'top -80',
      end: 'max',
      onToggle: (self) => header.classList.toggle('header-compact', self.isActive),
    });
  }
}

/**
 * Recorrido por slides: la escena se fija y las secciones se reemplazan.
 *
 * El scroll decide *qué* slide toca; el cambio en sí es una transición propia,
 * no un barrido atado al dedo. Con `scrub` el último slide se quedaba sin
 * tramo —aparecía justo en el punto donde el pin termina y ya se estaba
 * yendo—, y cualquier posición intermedia dejaba dos slides a medio fundir.
 *
 * El pin dura un tramo de ventana por slide: los n-1 primeros para las
 * transiciones y uno final para que el último respire igual que el resto.
 */
function slideStage() {
  const section = document.querySelector<HTMLElement>('[data-slides]');
  if (!section) return;

  const pin = section.querySelector<HTMLElement>('[data-slides-pin]');
  const travel = section.querySelector<HTMLElement>('[data-slides-travel]');
  const slides = gsap.utils.toArray<HTMLElement>('[data-slide]', section);
  const dotList = section.querySelector<HTMLElement>('[data-slides-dots]');
  const hint = section.querySelector<HTMLElement>('[data-slides-hint]');
  if (!pin || slides.length < 2) return;

  // Los puntos se generan aquí porque el número de slides lo decide la página
  // (los de texto vienen de i18n, y FAQ y el CTA final entran por el slot).
  const dots: HTMLElement[] = [];
  if (dotList) {
    dotList.replaceChildren();
    slides.forEach(() => {
      const li = document.createElement('li');
      dotList.appendChild(li);
      dots.push(li);
    });
  }

  const mm = gsap.matchMedia();

  mm.add('(min-width: 768px) and (min-height: 520px)', () => {
    // A partir de aquí el CSS superpone los slides. Se pone desde JS para que
    // sin JS el bloque siga siendo texto apilado y legible.
    section.setAttribute('data-slides-active', '');

    const n = slides.length;

    /*
     * Estados de la escultura, uno por slide. Se mueve en porcentaje de su
     * propio tamaño, así que acompaña al texto en cualquier ancho sin
     * recalcular píxeles.
     */
    /*
     * El primero es el hero, que ya trae su propia escultura en 3D: la
     * estática se queda invisible ahí y entra al pasar al segundo slide.
     * Arranca en la misma esquina donde está la del hero para que el relevo
     * entre una y otra no se note.
     */
    const travelStates = [
      { xPercent: 30, yPercent: -50, scale: 1.05, rotation: 0, opacity: 0 },
      { xPercent: 12, yPercent: -46, scale: 1, rotation: 0, opacity: 0.16 },
      { xPercent: -78, yPercent: -34, scale: 0.82, rotation: -14, opacity: 0.14 },
      { xPercent: 6, yPercent: -12, scale: 0.95, rotation: 12, opacity: 0.13 },
      { xPercent: -72, yPercent: -58, scale: 1.1, rotation: -6, opacity: 0.12 },
      { xPercent: 18, yPercent: -70, scale: 0.9, rotation: 18, opacity: 0.1 },
      { xPercent: -50, yPercent: -50, scale: 1.3, rotation: -3, opacity: 0.08 },
    ];
    const stateFor = (i: number) => travelStates[i % travelStates.length];

    const show = (slide: HTMLElement, on: boolean, instant = false) => {
      gsap.to(slide, {
        opacity: on ? 1 : 0,
        y: on ? 0 : 24,
        duration: instant ? 0 : 0.45,
        ease: 'power2.out',
        // `visibility` saca del orden de tabulación los slides que no se ven.
        onStart: () => on && gsap.set(slide, { visibility: 'visible' }),
        onComplete: () => !on && gsap.set(slide, { visibility: 'hidden' }),
      });
    };

    slides.forEach((slide, i) => {
      gsap.set(slide, {
        opacity: i === 0 ? 1 : 0,
        y: i === 0 ? 0 : 24,
        visibility: i === 0 ? 'visible' : 'hidden',
      });
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-on', i === 0));
    if (travel) gsap.set(travel, stateFor(0));

    /*
     * Sensibilidad del recorrido.
     *
     * THRESHOLD_PX es lo único que gobierna la sensibilidad: los píxeles que
     * hay que mover para que el cambio se dé por hecho. Unos 90, es decir un
     * golpe de rueda.
     *
     * SLIDE_SCROLL (cuánta ventana consume cada slide) ya no influye en la
     * sensibilidad, porque el avance está limitado a uno por gesto. Se deja
     * generoso a propósito: con un recorrido corto, un flick violento se salía
     * del bloque hacia el pie de página —donde el enganche ya no puede
     * retener nada— y el recorrido se cerraba de golpe. Cuanto más largo,
     * menos alcanza un gesto a escaparse, y menos rebota el enganche al
     * devolverlo.
     *
     * JUMP: a partir de cuántos slides de diferencia se entiende que no es un
     * gesto sino un salto deliberado (tecla Fin/Inicio, arrastrar la barra).
     * Puede ser bajo porque la rueda y el dedo ya quedan excluidos por origen:
     * lo único que pasa por aquí son saltos que nadie hizo con un gesto.
     */
    const SLIDE_SCROLL = 1;
    const THRESHOLD_PX = 90;
    const JUMP = 2;

    /*
     * Marca de la última rueda o arrastre táctil.
     *
     * El salto deliberado no puede distinguirse solo por la distancia: un
     * flick violento de trackpad recorre más que un Fin, y medido en pasos se
     * colaba por la excepción y se saltaba cuatro slides. Lo que los separa es
     * el origen — si hubo rueda o dedo hace nada, es un gesto y se limita a
     * uno; si no lo hubo (teclado, barra de desplazamiento), se respeta.
     */
    let gestureAt = -Infinity;
    const markGesture = () => {
      gestureAt = performance.now();
    };
    window.addEventListener('wheel', markGesture, { passive: true });
    window.addEventListener('touchmove', markGesture, { passive: true });

    /*
     * Paso en el que descansa el scroll. Es la referencia contra la que se
     * mide el gesto, y lo que impide que un golpe fuerte de rueda se salte
     * varios slides: por muy lejos que llegue el scroll, desde aquí solo se
     * puede avanzar o retroceder uno.
     */
    let restStep = 0;

    /*
     * Entrada de cada slide, según lo que contenga.
     *
     * Va atada a la activación y no a la posición de scroll: dentro de un
     * bloque fijado, un disparador por scroll no llega a cumplirse nunca.
     */
    const playSlide = (slide: HTMLElement) => {
      // La línea de tiempo se dibuja de izquierda a derecha.
      const track = slide.querySelector<HTMLElement>('[data-timeline-track]');
      if (track) {
        gsap.fromTo(
          track,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: 'power2.out', overwrite: true }
        );
      }

      // Y los hitos se encienden en orden, detrás del trazo.
      const tlSteps = gsap.utils.toArray<HTMLElement>('[data-tl-step]', slide);
      tlSteps.forEach((step, i) => {
        step.classList.remove('is-on');
        gsap.delayedCall(0.3 + i * 0.18, () => step.classList.add('is-on'));
      });

      /*
       * Entradas escalonadas. Se recogen las piezas propias del recorrido y
       * también las que traen marcadas las secciones completas (FAQ y el CTA
       * final), que antes animaba una pasada aparte por posición de scroll:
       * encerradas en el bloque fijado, esa pasada se cumplía nada más cargar
       * y el efecto se reproducía sin que nadie lo viera.
       */
      const items = gsap.utils.toArray<HTMLElement>(
        '.slides__card, .slides__metric, .slides__demo, [data-reveal], [data-stagger] > *',
        slide
      );
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power2.out',
            overwrite: true,
          }
        );
      }

      // Las cifras suben cuando su slide llega al frente, no antes.
      slide.querySelectorAll<HTMLElement>('.counter').forEach(countUp);
    };

    let current = 0;
    playSlide(slides[0]);
    const goTo = (index: number) => {
      if (index === current) return;
      show(slides[current], false);
      show(slides[index], true);
      playSlide(slides[index]);
      dots.forEach((dot, i) => dot.classList.toggle('is-on', i === index));
      if (travel) {
        gsap.to(travel, { ...stateFor(index), duration: 0.7, ease: 'power2.inOut' });
      }
      if (hint) gsap.to(hint, { opacity: index === 0 ? 1 : 0, duration: 0.3 });
      /*
       * El canvas WebGL del hero solo debe dibujar mientras se ve. Sin esto
       * seguiría pintando a 60 fps detrás de los demás slides, gastando GPU y
       * batería para nada.
       */
      document.dispatchEvent(
        new CustomEvent('nexias:slide', { detail: { index } })
      );
      current = index;
    };

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      // Un tramo por slide: n-1 para las transiciones y uno final de reposo.
      end: () => '+=' + window.innerHeight * SLIDE_SCROLL * n,
      pin,
      invalidateOnRefresh: true,
      /*
       * El enganche es lo que hace que esto se sienta como secciones que se
       * reemplazan y no como una página larga. `inertia: false` evita que un
       * golpe fuerte de rueda proyecte varios slides de golpe.
       */
      snap: {
        /*
         * El destino se decide aquí en vez de con una lista de puntos fijos,
         * porque hay que medirlo contra el slide en reposo: así un gesto
         * avanza uno y solo uno. El paso extra (n) es el final del pin, sin
         * él no se podía salir del recorrido hacia el pie de página.
         */
        snapTo: (value) => {
          const raw = value * n;
          const delta = raw - restStep;
          // El umbral se recalcula por si cambió el alto de la ventana.
          const STEP = THRESHOLD_PX / (window.innerHeight * SLIDE_SCROLL);
          const isGesture = performance.now() - gestureAt < 500;
          let target: number;
          if (!isGesture && Math.abs(delta) > JUMP) {
            // Salto deliberado: no es un gesto, se respeta el destino.
            target = Math.round(raw);
          } else if (delta > STEP) {
            target = restStep + 1;
          } else if (delta < -STEP) {
            target = restStep - 1;
          } else {
            target = restStep;
          }
          restStep = Math.max(0, Math.min(n, target));
          return restStep / n;
        },
        duration: { min: 0.15, max: 0.4 },
        delay: 0.03,
        ease: 'power2.out',
        inertia: false,
        directional: false,
      },
      /*
       * Si un gesto muy violento se lleva el scroll fuera del bloque, el
       * enganche ya no puede retenerlo: deja de estar activo. Se sincroniza el
       * punto de reposo con la salida real para que al volver a entrar se
       * retome por el slide que toca y no por donde se quedó la cuenta.
       */
      onLeave: () => {
        restStep = n;
        // El bloque queda congelado a la espalda: que muestre el último.
        goTo(n - 1);
      },
      onLeaveBack: () => {
        restStep = 0;
        goTo(0);
      },
      /*
       * Al terminar el enganche, el punto de reposo pudo cambiar: hay que
       * refrescar lo que se ve. Sin esto la vista se quedaba en el slide
       * anterior después de un salto.
       */
      onSnapComplete: () => {
        goTo(Math.max(0, Math.min(n - 1, restStep)));
      },
      onUpdate: (self) => {
        /*
         * Avance "caminando": el punto de reposo sube o baja de uno en uno
         * cada vez que el scroll cruza una frontera de slide.
         *
         * Antes esto se limitaba a un slide por gesto, y un scroll rápido
         * quedaba atrapado: recorrías 2400px, el recorrido avanzaba uno solo y
         * el enganche te devolvía 1200px hacia atrás — se veía el rebote
         * (0→1→2→1). Caminando, un scroll rápido los recorre deprisa pero
         * enseñándolos todos, y ninguno se salta sin verse.
         */
        const raw = self.progress * n;
        const isGesture = performance.now() - gestureAt < 500;
        /*
         * Extremos del recorrido.
         *
         * Subiendo deprisa, el scroll llegaba arriba del todo antes de que el
         * paso de reposo terminara de bajar; allí ya no hay más eventos y el
         * enganche tampoco corrige, porque la posición ya es la correcta.
         * Resultado: el hero se quedaba oculto y solo aparecía si bajabas un
         * poco. Tocar fondo o techo fija el paso sin discusión.
         *
         * La comparación lleva holgura de un par de píxeles a propósito: el
         * inicio del bloque no cae exactamente en cero (el espaciador del pin
         * lo deja en -0.001), así que arriba del todo el progreso vale
         * 0.00000016 y un `<= 0` no se cumplía nunca.
         */
        const tol = 2 / Math.max(1, self.end - self.start);
        if (self.progress <= tol) {
          restStep = 0;
        } else if (self.progress >= 1 - tol) {
          restStep = n;
        } else if (!isGesture && Math.abs(raw - restStep) > JUMP) {
          /*
           * Salto deliberado (barra de desplazamiento, Inicio/Fin, un enlace).
           * Caminando de uno en uno se quedaba a medias: un salto instantáneo
           * apenas genera eventos de scroll, así que no daba tiempo a recorrer
           * la distancia y se detenía un par de slides antes del destino.
           */
          restStep = Math.max(0, Math.min(n, Math.round(raw)));
        } else if (raw >= restStep + 1) {
          restStep = Math.min(n, restStep + 1);
        } else if (raw <= restStep - 1) {
          restStep = Math.max(0, restStep - 1);
        }
        goTo(Math.max(0, Math.min(n - 1, restStep)));
      },
    });

    /*
     * Anclas del nav.
     *
     * Al meter las secciones dentro del bloque fijado, un enlace a #contacto o
     * a #como-funciona aterrizaba en el inicio del recorrido y mostraba el
     * primer slide: la navegación quedaba rota. Aquí se traduce el destino a
     * la posición de scroll en la que ese slide está al frente.
     */
    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.('a[href*="#"]');
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.pathname !== window.location.pathname || !link.hash) return;

      const target = document.getElementById(link.hash.slice(1));
      const slide = target?.closest<HTMLElement>('[data-slide]');
      if (!slide) return;

      const index = slides.indexOf(slide);
      if (index < 0) return;

      event.preventDefault();
      // Sin esto, el tope de un slide por gesto frenaría el salto del enlace.
      restStep = index;
      window.scrollTo({
        top: st.start + ((st.end - st.start) * index) / n,
        behavior: 'smooth',
      });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      window.removeEventListener('wheel', markGesture);
      window.removeEventListener('touchmove', markGesture);
      // matchMedia revierte lo que animó; el atributo hay que quitarlo a mano
      // para que el bloque vuelva a ser texto apilado al bajar de tamaño.
      section.removeAttribute('data-slides-active');
      slides.forEach((slide) => gsap.set(slide, { clearProps: 'all' }));
    };
  });
}

/**
 * Foco que sigue al cursor sobre las tarjetas.
 *
 * Solo escribe dos variables CSS con la posición relativa; el degradado y su
 * aparición viven en la hoja de estilos. Sin este script las tarjetas se ven
 * exactamente igual, solo que sin el foco.
 */
function spotlight() {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener(
      'pointermove',
      (event) => {
        const box = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((event.clientX - box.left) / box.width) * 100}%`);
        card.style.setProperty('--my', `${((event.clientY - box.top) / box.height) * 100}%`);
      },
      { passive: true }
    );
  });
}

chrome();

if (!reduced) {
  spotlight();
  slideStage();
}
