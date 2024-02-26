import { LoginStageLocalCodingPage } from '../../pages/LoginStageLocalCoding'

describe('Intercept', () => {
    it('Verify network request spy', function () {
        cy.fixture('progressLocalCoding.json').as('data') //this data
        cy.intercept('POST', '*/login').as('login')
        cy.intercept(
            `${Cypress.env('serverStage')}/course/coursesProgress/65d7f7ced34bb09828b7c628`,
            { fixture: 'progressLocalCoding.json' }
        ).as('course')
        cy.visit(`${Cypress.env('stage')}/user/login`)
        LoginStageLocalCodingPage.login()
        // cy.get('#normal_login_email').type(Cypress.env('emailStage'))
        // cy.get('#normal_login_password').type(Cypress.env('passwordStage'), {
        //     log: false,
        // })
        // cy.get('[type="submit"]').click()
        cy.wait('@login').then((res) => {
            console.log(res, 'Whole response')
            let id = res.response.body.payload.user._id
            cy.log(id)
            //cy.url().should('eq', `https://stage.pasv.us/profile/${id}`)
            cy.location().should((loc) => {
                console.log(loc, 'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit(
            'https://stage.pasv.us/profile/65d7f7ced34bb09828b7c628/progress'
        )
        cy.wait('@course').then((el) => {
            console.log(el, 'Response course progress')
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })
    })
})
