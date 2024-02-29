import { LoginStageLocalCodingPage } from '../../pages/LoginStageLocalCoding'

describe('Intercept for LocalCoding Login and Progress', () => {
    before(() => {
        cy.userId() // custom command to get user id
    })
    // before(() => {
    //     cy.request('POST', 'https://server-stage.pasv.us/user/login', {
    //         email: Cypress.env('emailStage'),
    //         password: Cypress.env('passwordStage'),
    //     }).then((response) => {
    //         Cypress.env('userId', response.body.payload.user._id)
    //     })
    // })
    it('Verify network request spy for login, fixture for progress', function () {
        cy.fixture('progressLocalCoding.json').as('data') //this data
        cy.intercept('POST', '*/login').as('login')
        cy.intercept(
            `${Cypress.env('serverStage')}/course/coursesProgress/${Cypress.env('userId')}`,
            { fixture: 'progressLocalCoding.json' }
        ).as('progress')

        cy.visit(`${Cypress.env('stage')}/user/login`)
        LoginStageLocalCodingPage.login()
        // cy.get('#normal_login_email').type(Cypress.env('emailStage'))
        // cy.get('#normal_login_password').type(Cypress.env('passwordStage'), {
        //     log: false,
        // })
        // cy.get('[type="submit"]').click()
        cy.wait('@login').then((res) => {
            console.log(res, 'Whole response')
            //cy.log(JSON.stringify(res))
            let id = res.response.body.payload.user._id
            //cy.log(id)
            //cy.url().should('eq', `https://stage.pasv.us/profile/${id}`)
            cy.location().should((loc) => {
                console.log(loc, 'location')
                //cy.log(JSON.stringify(loc))
                expect(loc.href).to.eq(`${Cypress.env('stage')}/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit(
            `${Cypress.env('stage')}/profile/${Cypress.env('userId')}/progress`
        )
        cy.wait('@progress').then((el) => {
            console.log(el, 'Response courses progress')
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })
    })
})
