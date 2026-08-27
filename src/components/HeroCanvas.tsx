'use client';

/*
 * Envoltorio de carga del fondo 3D.
 *
 * three/webgpu pesa cerca de 1 MB. La portada es la página que compite en
 * búsqueda, así que el chunk pesado no se descarga hasta que se cumplen dos
 * condiciones: hay ancho de escritorio (en móvil el efecto quedaría detrás
 * del texto y solo costaría LCP) y el navegador está ocioso. Por eso el
 * import es dinámico: en móvil el chunk no se pide nunca.
 */

import { lazy, Suspense, useEffect, useState } from 'react';

const HeroFuturistic = lazy(() => import('./ui/hero-futuristic'));

export default function HeroCanvas() {
  const [show, setShow] = useState(false);
  /*
   * El hero es el primer slide del recorrido. Cuando deja de estar al frente
   * no tiene sentido seguir dibujando: el módulo de animaciones avisa del
   * slide activo y aquí se para el bucle de render. Si ese evento no llega
   * nunca (móvil, "reducir movimiento", o el recorrido apagado) se queda
   * dibujando, que es el comportamiento correcto por defecto.
   */
  const [live, setLive] = useState(true);

  useEffect(() => {
    const onSlide = (event: Event) => {
      const index = (event as CustomEvent<{ index: number }>).detail?.index;
      setLive(index === 0);
    };
    document.addEventListener('nexias:slide', onSlide);
    return () => document.removeEventListener('nexias:slide', onSlide);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    // Esperar a que el hilo principal esté libre: el hero es el LCP.
    const idle =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(() => setShow(true), { timeout: 2000 })
        : window.setTimeout(() => setShow(true), 600);

    return () => {
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idle as number);
      } else {
        clearTimeout(idle as number);
      }
    };
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <HeroFuturistic live={live} />
    </Suspense>
  );
}
