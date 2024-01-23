describe('Website visit', () => {
    beforeEach(() => {
        cy.visit('/home')
    })
    it('Verify page', () => {
        cy.title().should('eq', 'UI Test Automation Playground')
    });
    it('Verify page', () => {
        cy.window().title()
    })
})