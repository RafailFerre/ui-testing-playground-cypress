import { AlertHerokuaapPage } from '../../pages/AlertHerokuaap'
describe('Alerts', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlAlert')}/javascript_alerts`)
    })
    it('Click for JS Alert', () => {
        AlertHerokuaapPage.alertJS()
        // cy.contains('button', 'Click for JS Alert')
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('I am a JS Alert')
        // })
        // cy.on('window:confirm', () => true)
        // cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('Click for JS Confirm OK', () => {
        AlertHerokuaapPage.confirmJSOk()
        // cy.contains('button', 'Click for JS Confirm').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('I am a JS Confirm')
        // })
        // cy.on('window:confirm', () => true)
        // cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it('Click for JS Confirm Cancel', () => {
        AlertHerokuaapPage.confirmJSCancel()
        // cy.on('window:confirm', () => false)
        // cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it('Click for JS Prompt Cancel', () => {
        AlertHerokuaapPage.promptJSCancel()
        // cy.contains('button', 'Click for JS Prompt').click()
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('I am a JS prompt')
        // })
        // cy.on('window:confirm', () => false)
        // cy.get('#result').should('have.text', 'You entered: null')
    })
    it('Click for JS Prompt', () => {
        AlertHerokuaapPage.promptJS()
        // const text = 'Hello Raf!'
        // cy.window().then(($win) => {
        //     cy.stub($win, 'prompt').returns(text)
        //     cy.contains('button', 'Click for JS Prompt').click()
        // })
        // cy.get('#result').should('have.text', 'You entered: Hello Raf!')
    })
})
