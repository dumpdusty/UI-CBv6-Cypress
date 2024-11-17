const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://clientbase.pasv.us/v6',
    excludeSpecPattern: 'cypress/e2e/examples/**/*',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 5000
  },
});
