const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2jha52',
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
