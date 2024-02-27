import { LoginStageLocalCodingPage } from '../../pages/LoginStageLocalCoding'

describe('Intercept for LocalCoding Katas', () => {
    before(() => {
        cy.userId()
    })

    it('Verify network request and response page katas', function () {
        cy.fixture('katasLocalCoding.json').as('data')
        cy.intercept('POST', '*/login').as('login')
        cy.intercept(
            `${Cypress.env('serverStage')}/progress/codewars/completed/${Cypress.env('userId')}`,
            { fixture: 'katasLocalCoding.json' }
        ).as('katas')

        cy.visit(`${Cypress.env('stage')}/user/login`)
        LoginStageLocalCodingPage.login()

        cy.wait('@login').then((res) => {
            console.log(res, 'Whole response')
            let id = res.response.body.payload.user._id
            cy.log(id)
            //cy.url().should('eq', `https://stage.pasv.us/profile/${id}`)
            cy.location().should((loc) => {
                console.log(loc, 'location')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit(
            `${Cypress.env('stage')}/profile/${Cypress.env('userId')}/katas`
        )
        cy.wait('@katas').then((el) => {
            //console.log(el, 'Response katas progress')
            //cy.log(JSON.stringify(el))
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })
    })
})
