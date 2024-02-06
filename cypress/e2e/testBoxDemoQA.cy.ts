import { TestBoxPage } from '../../pages/TestBoxDemoQA'

describe('Test Box', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlDemoQA')}/text-box`)
    })
    it('Verify field text-box page', () => {
        TestBoxPage.submitButtonClick()
        // cy.get('#userName').type('Donald Trump')
        // cy.get('#userEmail').type('donald@trump.com')
        // cy.get('#currentAddress').type('White house, Washington DC')
        // cy.get('#permanentAddress').type('Villa Largo, Florida')
        // cy.get('#submit').should('be.enabled').click()

        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.contains('#currentAddress', 'White house, Washington')
        cy.contains('#permanentAddress', 'Villa Largo, Florida')
    })
})
