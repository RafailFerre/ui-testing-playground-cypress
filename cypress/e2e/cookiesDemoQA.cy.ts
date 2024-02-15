import { LoginPage } from '../../pages/LoginDemoQA'
// Cypress.session.clearAllSavedSessions();

describe('Cookies', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
            cy.visit(`${Cypress.env('urlDemoQA')}/login`)
            LoginPage.submitButtonLogin()
            cy.wait(5000)
            // cy.get('#userName').type('test')
            // cy.get('#password').type('Test1234*')
            // cy.get('#login').click()
            // cy.contains('Log out')
        })
    })
    it('create cookies with cy.session', () => {
        LoginPage.visitLoginPage()
        // cy.visit(`${Cypress.env('urlDemoQA')}/login`)
        // cy.contains('Log out')
    })
    it('create cookies with cy.session', () => {
        LoginPage.visitLoginPage()
        // cy.visit(`${Cypress.env('urlDemoQA')}/login`)
        cy.url().then((url) => {
            cy.log(url)
        })
    })
})
