/// <reference types="cypress" />

export {}
declare global {
    namespace Cypress {
        interface Chainable {
            login(email:string, password:string): Chainable<void>;
            logout(): Chainable<void>;
        }
    }
}
