class LoginDemoQA {
    userName: string = '#userName'
    password: string = '#password'
    loginButton: string = '#login'
    //logoutButton: string = '#submit'

    submitButtonLogin() {
        cy.get(this.userName).type('test')
        //cy.get('#userName').type('test')
        cy.get(this.password).type('Test1234*')
        cy.get(this.loginButton).click()
        //cy.contains(this.logoutButton)
    }
}

export const LoginPage = new LoginDemoQA()
