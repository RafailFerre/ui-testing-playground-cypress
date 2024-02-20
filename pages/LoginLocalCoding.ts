class LoginLocalCoding {
    private emailFieldSelector: string = '#normal_login_email'
    private passwordFieldSelector: string = '#normal_login_password'
    private buttonSubmitSelector: string = '[type="submit"]'
    login() {
        cy.get(this.emailFieldSelector).type(Cypress.env('email'))
        cy.get(this.passwordFieldSelector).type(Cypress.env('password'))
        cy.get(this.buttonSubmitSelector).click()
        cy.contains('Группы')
    }
}

export const LoginLocalCodingPage = new LoginLocalCoding()
