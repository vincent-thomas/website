import { defineConfig } from "cypress";
import plugins from "./cypress/plugins";
export default defineConfig({
  projectId: "xh4u3x",
  videosFolder: "artifacts/media/videos",
  downloadsFolder: "artifacts/downloads",
  screenshotsFolder: "artifacts/media/screenshots",
  video: false,

  screenshotOnRunFailure: true,

  waitForAnimations: true,
  env: {
    codeCoverage: {
      url: "/api/__coverage__"
    }
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      return plugins(on, config);
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000"
  },

  // fileServerFolder: "out",

  fixturesFolder: false,

  component: {
    setupNodeEvents(on, config) {
      return plugins(on, config);
    },
    specPattern: ["core/**/*.cy.tsx"],
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
