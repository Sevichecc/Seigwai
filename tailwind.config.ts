import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['**/*.{js,ts,jsx,tsx}', '**/*.vue', '**/*.html'],
  darkMode: 'class',
  plugins: [
    typography,
    daisyui,
    iconsPlugin({
      collections: getIconCollections(['tabler']),
    }),
  ],
  daisyui: {
    themes: false,
  },
} satisfies Config
