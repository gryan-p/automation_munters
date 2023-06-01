# Cypress Typescript End to End Automation Framework for Munters
This framework was built for Munters end to end testgi

### Installation Prcess
-  Clone Git Repository
- run `npm install`  on Project folder
you are all set.

### Setting Test Environment
- Go to `cypress>fixtures>user.json`
- Enter your email and password used to login Munters
- Go to `cypress.config.ts`, you may `baseUrl` to either TEST or PROD env (currenlty it is in TEST)

### Running Cypress
- run `npm run test`
- click the e2e testing
- choose a browser and click the `Start E2E Testing in ...` button
- Click the test you want to run e.g. `munterslogin.cy.ts`
