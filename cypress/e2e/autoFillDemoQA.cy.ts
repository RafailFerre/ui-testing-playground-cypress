import { AutoFillPage } from '../../pages/AutoFillDemoQA'

describe('AutoFill', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit(`${Cypress.env('urlDemoQA')}/auto-complete`)
    })
    it('Verify autofill', () => {
        AutoFillPage.autoComplete()
    })
})
