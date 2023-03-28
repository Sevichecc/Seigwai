/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')
module.exports = {
  content: ['**/*.tsx', '**/*.ts', '**/*.vue', '**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    iconsPlugin({
      collections: getIconCollections(['tabler']),
    }),
  ],
}
