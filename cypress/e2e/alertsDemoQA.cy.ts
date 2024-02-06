describe('Verify alerts for DemoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlDemoQA')}/alerts`)
    })
    it('Click Button to see alert', () => {
        cy.get('#alertButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You clicked a button')
        })
    })
})
