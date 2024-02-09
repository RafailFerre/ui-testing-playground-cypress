class AlertDemoQA {
    private alertButton: string = '#alertButton'
    private

    alertJS() {
        cy.get(this.alertButton).click()
    }
}

export const AlertDemoQAPage = new AlertDemoQA()
