import { defineConfig } from "cypress";

export default defineConfig({
  videosFolder: "cypress/artifacts/media/videos",
  downloadsFolder: "cypress/artifacts/downloads",
  screenshotsFolder: "cypress/artifacts/media/screenshots",
  waitForAnimations: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
