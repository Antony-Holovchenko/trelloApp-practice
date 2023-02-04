import { defineConfig } from "cypress";

export default defineConfig({
  
  projectId: "7vknyb",

  retries: {
    openMode: 0,
    runMode: 10,
  },

  video: false,
  viewportHeight: 550,
  viewportWidth: 700,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      coverage: false,
      snapshotOnly: true
    },
    specPattern: "cypress/tests",
    baseUrl: "http://localhost:3000"
  },
});
