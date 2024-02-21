import { LoginLocalCodingPage } from '../../pages/LoginLocalCoding'

//Cypress.session.getCurrentSessionData()
describe('Login and save session on LocalCoding', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.visit(`${Cypress.env('prod')}/user/login`)
            LoginLocalCodingPage.login()
            // cy.get('#normal_login_email').type(Cypress.env('email'))
            // cy.get('#normal_login_password').type(Cypress.env('password'))
            // cy.get('[type="submit"]').click()
            // cy.contains('Группы')
        })
    })
    it('Check the session is Ok', () => {
        cy.visit('https://coding.pasv.us')
        cy.contains('Группы')
    })
})
