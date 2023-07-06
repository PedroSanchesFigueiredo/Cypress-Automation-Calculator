const { defineConfig } = require("cypress");
reporter: 'cypress-mochawesome-reporter',

module.exports = defineConfig({  
  reporter: 'mochawesome',  
  e2e: {    
    baseUrl: 'https://ingressar-sv-hml.inspirali.com/home',
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // allureWriter(on, config);
      // return config;
    },

    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotOnRunFailure: false
  },
});
