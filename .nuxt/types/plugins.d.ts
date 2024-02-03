// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.8_nuxt@3.10.0_vite@4.5.2/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.8_nuxt@3.10.0_vite@4.5.2/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/app/plugins/check-if-layout-used").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt:chunk-reload' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
