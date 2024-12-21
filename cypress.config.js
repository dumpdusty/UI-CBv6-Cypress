const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://clientbase.pasv.us/v6',
    excludeSpecPattern: 'cypress/e2e/examples/**/*',
    viewportWidth: 1280,
    viewportHeight: 720,
    pageLoadTimeout: 40000
  },
});
