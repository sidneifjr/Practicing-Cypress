import { defineConfig } from "cypress";

// Verify download import.
const {isFileExist, findFiles } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Verify download import.
      on('task', { isFileExist, findFiles })
    },

    env: {
      varEnv: "Hello from the Cypress.Config.Ts",
      Angular: "https://www.globalsqa.com",
      demonstrationQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com"
    },
  },

  // pageLoadTimeout: 60000,
  viewportWidth: 1400,
  viewportHeight: 1000,
});
