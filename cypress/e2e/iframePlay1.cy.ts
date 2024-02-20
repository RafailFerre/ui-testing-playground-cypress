import { IframePlay1Page } from '../../pages/IframePlay1'

describe('Verify Iframes without plugin', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlPlay1')}/frames.html`)
    })
    it('Iframe1', () => {
        IframePlay1Page.getIframe1()
    })
    it('Iframe2', () => {
        IframePlay1Page.getIframe2()
    })
    it('Iframe3', () => {
        IframePlay1Page.getIframe3()
    })
    it('Iframe4', () => {
        IframePlay1Page.getIframe4()
    })
})
describe('Verify Iframes with plugin', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('urlPlay1')}/frames.html`)
    })
    it('Iframe1 with plugin', () => {
        IframePlay1Page.getIframe1Plugin()
    })
    it.only('Iframe2 with plugin', () => {
        IframePlay1Page.getIframe2Plugin()
    })
})
