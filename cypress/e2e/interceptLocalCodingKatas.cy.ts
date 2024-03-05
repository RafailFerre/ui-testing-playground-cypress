import { LoginStageLocalCodingPage } from '../../pages/LoginStageLocalCoding'

describe('Intercept for LocalCoding Katas', () => {
    before(() => {
        cy.userId() // custom command to get user id
    })

    it('Verify network request and response page katas', function () {
        cy.log(Cypress.env('userId'))
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

// describe('HOMEWORK INTERCEPT', () => {
//     it('intercept', function () {
//         cy.pause()
//         cy.log(this.userId)
//         cy.fixture('katasLocalCoding.json').as('data')
//         cy.intercept(
//             `https://server-stage.pasv.us/progress/codewars/completed/${this.userId}`,
//             { fixture: 'katasLocalCoding.json' }
//         ).as('katas')
//         cy.intercept('POST', '*/login').as('login')
//         cy.visit(`${Cypress.env('stage')}/user/login`)
//         cy.get('#normal_login_email').type(Cypress.env('emailStage'))
//         cy.get('#normal_login_password').type(Cypress.env('passwordStage'), {
//             log: false,
//         })
//         cy.get('button[type="submit"]').click()
//         cy.wait('@login').then((res) => {
//             let id = res.response.body.payload.user._id
//             cy.wrap(id).as('userId')
//         })
//         cy.visit(`${Cypress.env('stage')}/profile/${this.userId}/katas`)
//         cy.get('div').contains('Katas').click()
//         cy.wait('@katas').then((res) => {
//             console.log(res.response.body)
//             cy.wrap(this.data).should('deep.equal', res.response.body)
//             cy.location().should((loc) => {
//                 expect(loc.href).to.eq(
//                     `${Cypress.env('stage')}/profile/${this.userId}/katas`
//                 )
//             })
//         })
//     })
// })
