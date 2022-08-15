import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.tsx"]
    // exclude: ["node_modules", ".next"]
  },
  theme: {
    extend: {
      colors: {
        accent: "hsla(213, 100%, 83%, 0.68)",
        text: "#474747",
        black: "#000"
      },
      textColor: {
        info: "#ababab",
        "light-text": "#FFF"
      },
      maxWidth: {
        "title-width": "21ch",
        "max-w": "1200px"
      },
      spacing: {
        space: "2rem"
      },
      corePlugins: {
        preflight: true
      }
    }
  }
});
