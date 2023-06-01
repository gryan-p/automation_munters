import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl : 'https://login.test.mymunters.com/',  //PROD - https://login.mymunters.com/
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    timeout: '30000'
  }
  },
});
