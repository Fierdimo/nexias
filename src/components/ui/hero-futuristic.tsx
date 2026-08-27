'use client';

/*
 * Fondo animado del hero.
 *
 * El componente original (21st.dev) era un hero completo para página oscura:
 * traía su propio titular en inglés, un botón "scroll to explore" y una
 * franja roja a pantalla completa. Aquí solo se conserva el efecto — la
 * imagen con parallax por profundidad y la trama de puntos que la recorre —
 * porque el texto que convierte (titular, subtítulo, CTAs y cifras) vive en
 * Hero.astro y está traducido. Duplicarlo aquí lo sacaría del i18n.
 *
 * Dos adaptaciones al sitio, que es claro (#FDFAF6) y no oscuro:
 *  - La máscara usa el teal de marca, no el rojo del original.
 *  - Se elimina el overlay rojo a pantalla completa: sobre fondo claro teñía
 *    toda la página.
 */

import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three/webgpu';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
} from 'three/tsl';

/* Servidas desde el propio dominio: el hero no puede depender de postimg.cc. */
const TEXTUREMAP = { src: '/hero/hero-color.png' };
const DEPTHMAP = { src: '/hero/hero-depth.webp' };

/* Teal de marca (--color-accent #08616F) normalizado y sobreexpuesto para que
 * la trama brille al mezclarse en modo screen. */
const ACCENT = vec3(0.031 * 12, 0.380 * 12, 0.435 * 12);

extend(THREE as any);

/*
 * El original añadía un pase de bloom por encima de la escena. Aquí se
 * elimina por dos razones: el pase escribe alfa 1 en todo el encuadre, así
 * que el canvas dejaba de componer sobre el fondo crema y se veía como un
 * rectángulo gris; y el bloom es aditivo, o sea prácticamente invisible sobre
 * un fondo claro. Sin él la malla compone con su propio alfa y el efecto se
 * sostiene con la trama, que va sobreexpuesta para compensar.
 */

const WIDTH = 626;
const HEIGHT = 626;

const Scene = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  /*
   * El puntero se lee de `window` y no del canvas: el contenedor va con
   * `pointer-events-none` para no robarle los clics a los CTAs del hero, y
   * con eso el `pointer` de react-three-fiber nunca se actualizaría.
   */
  const pointerRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: PointerEvent) => {
      pointerRef.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reducedMotion]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0.5);
    const uOpacity = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);
    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const flow = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.sub(uProgress))));
    const mask = dot.mul(flow).mul(ACCENT);

    const final = blendScreen(tMap, mask);

    /*
     * El PNG lleva la silueta recortada en su canal alfa. Sin `opacityNode`
     * el plano se dibujaría como un cuadrado opaco y sobre fondo claro se
     * vería el recorte como una caja. Aquí el alfa de la textura recorta la
     * malla y `uOpacity` hace la entrada.
     */
    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      opacityNode: tMap.a.mul(uOpacity),
      transparent: true,
    });

    return { material, uniforms: { uPointer, uProgress, uOpacity } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    if (!reducedMotion) {
      uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
      // Suavizado: el seguimiento directo del ratón resulta nervioso.
      uniforms.uPointer.value.lerp(pointerRef.current, 0.05);
    }
    // Entrada suave una vez las texturas están subidas a la GPU.
    uniforms.uOpacity.value = THREE.MathUtils.lerp(uniforms.uOpacity.value, 1, 0.05);
  });

  const scaleFactor = 0.62;
  return (
    <mesh scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export const HeroFuturistic = ({ live = true }: { live?: boolean }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Sin WebGPU ni WebGL2 no hay nada que dibujar: el hero se queda como está.
  if (failed) return null;

  return (
    <Canvas
      flat
      // 'never' detiene el bucle de render cuando el hero no está al frente.
      frameloop={live ? 'always' : 'never'}
      /*
       * `alpha` deja ver el fondo cálido del sitio a través del canvas; el
       * original iba sobre negro y no lo necesitaba.
       */
      gl={async (props) => {
        const renderer = new THREE.WebGPURenderer({
          ...(props as any),
          alpha: true,
        });
        // WebGPURenderer cae solo a WebGL2 si no hay WebGPU; esto solo cubre
        // el caso de que tampoco haya WebGL2.
        try {
          await renderer.init();
        } catch {
          setFailed(true);
        }
        return renderer;
      }}
    >
      <Suspense fallback={null}>
        <Scene reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
};

export default HeroFuturistic;
