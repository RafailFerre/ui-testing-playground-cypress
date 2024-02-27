// before(() => {
//     cy.request('POST', 'https://server-stage.pasv.us/user/login', {
//         email: Cypress.env('emailStage'),
//         password: Cypress.env('passwordStage'),
//     }).then((response) => {
//         Cypress.env('userId', response.body.payload.user._id)
//     })
// })
