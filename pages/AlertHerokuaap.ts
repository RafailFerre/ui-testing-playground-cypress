class AlertHerokuaap {
    private selectorButton: string = 'button'
    private selectorResult: string = '#result'
    private alertTextButton: string = 'Click for JS Alert'
    private confirmTextButton: string = 'Click for JS Confirm'
    private promptTextButton: string = 'Click for JS Prompt'

    alertJS() {
        cy.contains(this.selectorButton, this.alertTextButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true)
        cy.get(this.selectorResult).should(
            'have.text',
            'You successfully clicked an alert'
        )
    }
    confirmJSOk() {
        cy.contains(this.selectorButton, this.confirmTextButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', () => true)
        cy.get(this.selectorResult).should('have.text', 'You clicked: Ok')
    }
    confirmJSCancel() {
        cy.contains(this.selectorButton, this.confirmTextButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        cy.get(this.selectorResult).should('have.text', 'You clicked: Cancel')
    }
    promptJSCancel() {
        cy.contains(this.selectorButton, this.promptTextButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS prompt')
        })
        cy.on('window:confirm', () => false)
        cy.get(this.selectorResult).should('have.text', 'You entered: null')
    }
    promptJS() {
        const text: string = 'Hello Raf!'
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(text)
            cy.contains(this.selectorButton, this.promptTextButton).click()
        })
        cy.get(this.selectorResult).should('have.text', `You entered: ${text}`)
    }
}

export const AlertHerokuaapPage = new AlertHerokuaap()
