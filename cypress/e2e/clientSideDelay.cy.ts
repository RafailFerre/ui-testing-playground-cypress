describe('Client Side Delay', () => {
    it('delay test', () => {
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').should('be.visible').and('exist').click()
        cy.get('#spinner').should('be.visible').should('exist')
        cy.contains('.bg-success', 'Data calculated on the client side.')
    })
})
