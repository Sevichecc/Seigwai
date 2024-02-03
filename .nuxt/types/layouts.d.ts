import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../node_modules/.pnpm/nuxt@3.10.0_eslint@8.56.0_sass@1.70.0_typescript@5.3.3_vite@4.5.2_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}