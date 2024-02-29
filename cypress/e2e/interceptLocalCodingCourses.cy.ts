import { LoginStageLocalCodingPage } from '../../pages/LoginStageLocalCoding'

describe('Inretcept for LocalCoding Courses', () => {
    before(() => {
        cy.userId() // custom command to get user id
    })
    it('Verify network request spy for courses', function () {
        cy.fixture('coursesLocalCoding.json').as('data')
        cy.intercept('POST', '*/login').as('login')
        cy.intercept(`${Cypress.env('serverStage')}/course`, {
            fixture: 'coursesLocalCoding.json',
        }).as('courses')

        cy.visit(`${Cypress.env('stage')}/user/login`)
        LoginStageLocalCodingPage.login()

        cy.wait('@login').then((res) => {
            console.log(res, 'Whole response')
            //cy.log(JSON.stringify(res))
            let id = res.response.body.payload.user._id
            cy.location().should((loc) => {
                //cy.log(JSON.stringify(loc))
                expect(loc.href).to.eq(`${Cypress.env('stage')}/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit(`${Cypress.env('stage')}/course`)
        cy.wait('@courses').then((el) => {
            console.log(el, 'Response courses')
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })
    })
})
