import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xh4u3x",
  videosFolder: "artifacts/media/videos",
  downloadsFolder: "artifacts/downloads",
  screenshotsFolder: "artifacts/media/screenshots",
  waitForAnimations: true,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000"
  },

  // fileServerFolder: "out",

  fixturesFolder: false,

  component: {
    specPattern: ["core/**/*.cy.tsx"],
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
