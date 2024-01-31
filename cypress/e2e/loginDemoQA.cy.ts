import { LoginPage } from '../../pages/LoginDemoQA'

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlDemoQA')}/login`)
    })
    it('verify login', () => {
        LoginPage.submitButtonLogin()
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()

        cy.contains('#submit', 'Log out')
        cy.url().should('eq', 'https://demoqa.com/profile')
        //cy.contains('#submit', 'Log out').click()

        //cy.url().should('eq', `${Cypress.env('urlDemoQA')}/login`)
    })
})
