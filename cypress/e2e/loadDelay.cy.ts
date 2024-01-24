describe('Load Delay', () => {
    it('Failing load delay emulate', () => {
        cy.visit('/', { timeout: 0 })
    })
    it('Load delay emulate', () => {
        cy.visit('/', { timeout: 2000 })
    })
})
