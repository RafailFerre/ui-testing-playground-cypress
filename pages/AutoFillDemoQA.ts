class AutoFillDemoQA {
    private inputFieldSelector: string = '#autoCompleteMultipleContainer'
    private dropDownSelector: string = '#react-select-2-option-0'
    private resultSelector: string = '.auto-complete__multi-value__label'

    autoComplete() {
        const obj = {
            Y: 'Yellow',
        }
        cy.get(this.inputFieldSelector).eq(0).type(Object.keys(obj)[0]) //type Y
        cy.contains(this.dropDownSelector, Object.values(obj)[0]).click() // click Yellow
        cy.get(this.resultSelector).should('have.text', Object.values(obj)[0]) //Yellow
    }
}

export const AutoFillPage = new AutoFillDemoQA()
