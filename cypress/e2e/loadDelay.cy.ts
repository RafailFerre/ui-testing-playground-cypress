describe('Load Delay', () => {
    it('Failing load delay emulate', () => {
        cy.visit('/', { timeout: 100 })
    })
    it('Load delay emulate', () => {
        cy.visit('/', { timeout: 2000 })
        cy.get('#spinner').should('exist')
        cy.get('[href="/loaddelay"]').click()
        cy.contains('[type="button"]', 'Button Appearing After Delay')
    })
})
