import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xh4u3x",
  videosFolder: "cypress/artifacts/media/videos",
  downloadsFolder: "cypress/artifacts/downloads",
  screenshotsFolder: "cypress/artifacts/media/screenshots",
  waitForAnimations: true,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
