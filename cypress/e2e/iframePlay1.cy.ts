import { IframePlay1Page } from '../../pages/IframePlay1'

describe('Verify Iframes with plugin', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlPlay1')}/frames.html`)
    })
    it('Iframe1', () => {
        IframePlay1Page.getIframe1()
    })
})
