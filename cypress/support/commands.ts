/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             login(userName: string, password: string): Chainable<void>
//         }
//     }
// }
Cypress.Commands.add('login', (userName: string, password: string) => {
    cy.get('#userName').type('test')
    cy.get('#password').type('Test1234*')
    cy.get('#login').click()
})

Cypress.Commands.add('userId', () => {
    cy.request('POST', 'https://server-stage.pasv.us/user/login', {
        email: Cypress.env('emailStage'),
        password: Cypress.env('passwordStage'),
    }).then((response) => {
        Cypress.env('userId', response.body.payload.user._id)
    })
})
