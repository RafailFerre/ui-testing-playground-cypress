class LoginStageLocalCoding {
    private emailFieldSelector: string = '#normal_login_email'
    private passwordFieldSelector: string = '#normal_login_password'
    private buttonSubmitSelector: string = '[type="submit"]'
    login() {
        cy.get(this.emailFieldSelector).type(Cypress.env('emailStage'))
        cy.get(this.passwordFieldSelector).type(Cypress.env('passwordStage'))
        cy.get(this.buttonSubmitSelector).click()
        // cy.contains('Группы')
    }
}

export const LoginStageLocalCodingPage = new LoginStageLocalCoding()
