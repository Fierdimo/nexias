/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// GSAP CDN globals
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const ScrollTrigger: any;
