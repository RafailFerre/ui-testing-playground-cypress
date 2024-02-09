import { AlertDemoQAPage } from '../../pages/AlertDemoQA'
describe('Verify alerts for DemoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlDemoQA')}/alerts`)
    })
    it('Click Button to see alert', () => {
        AlertDemoQAPage.alertJS()
        // cy.get('#alertButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You clicked a button')
        })
        cy.on('window:confirm', () => true)
    })
    it('On button click, alert will appear after 5 seconds', () => {
        cy.get('#timerAlertButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('This alert appeared after 5 seconds')
        })
        cy.on('window:confirm', () => true)
    })
    it.only('On button click, confirm box will appear OK', () => {
        cy.get('#confirmResult').should('not.exist')
        cy.get('#confirmButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Do you confirm action?')
        })
        cy.on('window:confirm', () => true)
        cy.get('#confirmResult')
            .should('exist')
            .should('be.visible')
            .and('have.text', 'You selected Ok')
    })
    it.only('On button click, confirm box will appear CANCEL', () => {
        cy.get('#confirmResult').should('not.exist')
        cy.get('#confirmButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Do you confirm action?')
        })
        cy.on('window:confirm', () => false)
        cy.get('#confirmResult')
            .should('exist')
            .should('be.visible')
            .and('have.text', 'You selected Cancel')
    })
})
