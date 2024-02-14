import { IframePage } from '../../pages/IframeDemoQA'

describe('Iframe verify', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })

    beforeEach(() => {
        IframePage.visit()
        // cy.visit(`${Cypress.env('urlDemoQA')}/nestedframes`)
    })

    it('Test iframe', () => {
        IframePage.getIframe()
    })
})
