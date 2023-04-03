import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
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
