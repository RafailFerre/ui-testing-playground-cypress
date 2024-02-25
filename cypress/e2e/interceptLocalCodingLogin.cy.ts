describe('Intercept', () => {
    it('Verify network request spy', () => {
        cy.intercept('POST', '*/login').as('login')
        cy.visit(`${Cypress.env('stage')}/user/login`)
        cy.get('#normal_login_email').type(Cypress.env('emailStage'))
        cy.get('#normal_login_password').type(Cypress.env('passwordStage'), {
            log: false,
        })
        cy.get('[type="submit"]').click()
        cy.wait('@login').then((res) => {
            console.log(res, 'Response')
            let id = res.response.body.payload.user._id
            //cy.url().should('eq', `https://stage.pasv.us/profile/${id}`)
            cy.location().should((loc) => {
                console.log(loc, 'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
    })
})
