import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.tsx'],
    exclude: ["node_modules", ".next"]
  },
  theme: {
    extend: {
      textColor: {
        info: "#ababab"
      },
      maxWidth: {
        "title-width": "21ch",
        "max-w": "1200px"
      },
      spacing: {
        space: "4rem"
      },
      corePlugins: {
        preflight: false
      }
    }
  }
})
