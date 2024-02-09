class AlertDemoQA {
    private alertButton: string = '#alertButton'
    private timerAlertButton: string = '#timerAlertButton'
    private confirmButton: string = '#confirmButton'
    private promtButton: string = '#promtButton'
    private confirmResult: string = '#confirmResult'
    private promptResult: string = '#promptResult'

    alertJS() {
        cy.get(this.alertButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You clicked a button')
        })
        cy.on('window:confirm', () => true)
    }
    timerAlertJS() {
        cy.get(this.timerAlertButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('This alert appeared after 5 seconds')
        })
        cy.on('window:confirm', () => true)
    }
    confirmJSOk() {
        cy.get(this.confirmResult).should('not.exist')
        cy.get(this.confirmButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Do you confirm action?')
        })
        cy.on('window:confirm', () => true)
        cy.get('#confirmResult')
            .should('be.visible')
            .and('have.text', 'You selected Ok')
    }
    confirmJSCancel() {
        cy.get(this.confirmResult).should('not.exist')
        cy.get(this.confirmButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Do you confirm action?')
        })
        cy.on('window:confirm', () => false)
        cy.get(this.confirmResult)
            .should('be.visible')
            .and('have.text', 'You selected Cancel')
    }
    promptJS() {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hello Hello')
            cy.get(this.promtButton).click()
        })
        cy.get(this.promptResult).should('have.text', 'You entered Hello Hello')
    }
}

export const AlertDemoQAPage = new AlertDemoQA()
