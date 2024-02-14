import { AlertDemoQAPage } from '../../pages/AlertDemoQA'
describe('Verify alerts for DemoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlDemoQA')}/alerts`)
    })
    it('Click Button to see alert', () => {
        AlertDemoQAPage.alertJS()
        // cy.get('#alertButton').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('You clicked a button')
        // })
        // cy.on('window:confirm', () => true)
    })
    it.only('On button click, alert will appear after 5 seconds', () => {
        AlertDemoQAPage.timerAlertJS()
        // cy.get('#timerAlertButton').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('This alert appeared after 5 seconds')
        // })
        // cy.on('window:confirm', () => true)
    })
    it('On button click, confirm box will appear OK', () => {
        AlertDemoQAPage.confirmJSOk()
        // cy.get('#confirmResult').should('not.exist')
        // cy.get('#confirmButton').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('Do you confirm action?')
        // })
        // cy.on('window:confirm', () => true)
        // cy.get('#confirmResult').should('be.visible').and('have.text', 'You selected Ok')
    })
    it('On button click, confirm box will appear CANCEL', () => {
        AlertDemoQAPage.confirmJSCancel()
        // cy.get('#confirmResult').should('not.exist')
        // cy.get('#confirmButton').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('Do you confirm action?')
        // })
        // cy.on('window:confirm', () => false)
        // cy.get('#confirmResult').should('be.visible').and('have.text', 'You selected Cancel')
    })
    it('On button click, prompt box will appear', () => {
        AlertDemoQAPage.promptJS()
        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt').returns('Hello Hello')
        //     cy.get('#promtButton').click()
        // })
        // cy.get('#promptResult').should('have.text', 'You entered Hello Hello')
    })
})
