class TestBoxDemoQA {
    userFullName: string = '#userName'
    userEmail: string = '#userEmail'
    userCurrentAddress: string = '#currentAddress'
    userPermanentAddress: string = '#permanentAddress'
    submitButton: string = '#submit'

    submitButtonClick() {
        cy.get(this.userFullName).type('Donald Trump')
        cy.get(this.userEmail).type('donald@trump.com')
        cy.get(this.userCurrentAddress).type('White house, Washington DC')
        cy.get(this.userPermanentAddress).type('Villa Largo, Florida')
        cy.get(this.submitButton).should('be.enabled').click()
    }
}

export const TestBoxPage = new TestBoxDemoQA()
