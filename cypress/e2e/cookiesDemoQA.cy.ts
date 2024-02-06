import { LoginPage } from '../../pages/LoginDemoQA'

describe('Cookies', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.visit(`${Cypress.env('urlDemoQA')}/login`)
            LoginPage.submitButtonLogin()
            // cy.get('#userName').type('test')
            // cy.get('#password').type('Test1234*')
            // cy.get('#login').click()
            // cy.contains('Log out')
        })
    })
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('urlDemoQA')}/login`)
        cy.contains('Log out')
    })
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('urlDemoQA')}/login`)
        cy.url().then((url) => {
            cy.log(url)
        })
    })
})
