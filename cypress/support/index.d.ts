/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Sign in using userName & password
         * @example
         * cy.login('test', 'Test1234*')
         */
        login(userName: string, password: string): Chainable<any>
        userId(): Chainable<any>
    }
}
