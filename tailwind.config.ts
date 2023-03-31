import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['**/*.tsx', '**/*.ts', '**/*.vue', '**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    daisyui,
    iconsPlugin({
      collections: getIconCollections(['tabler']),
    }),
  ],
} satisfies Config
