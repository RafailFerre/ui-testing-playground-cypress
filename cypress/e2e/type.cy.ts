const textName = 'Eto Test Test Vasya'
describe('Text input', () => {
    it('Verify text', () => {
        cy.visit('/textinput')
        cy.get('#newButtonName').type(textName)
        //cy.get('#updatingButton').click()
        cy.contains('Button That').click()
        cy.get('#updatingButton').then((el) => {
            cy.log(el.text())
            cy.wrap(el).should('have.text', textName)
        })
        cy.get('.form-group').within((text) => {
            cy.get('[type="button"]').should('have.text', textName)
        })
    })
})
