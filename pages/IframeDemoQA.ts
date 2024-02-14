class IframeDemoQA {
    private iframeSelector: string = '#frame1'
    private bodySelector: string = 'body'
    private childIframe: string = 'iframe'

    getIframe() {
        cy.get(this.iframeSelector).then((iFrame) => {
            const body = iFrame.contents().find(this.bodySelector)
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body)
                .find(this.childIframe)
                .then((iFrameChild) => {
                    const bodyChild = iFrameChild
                        .contents()
                        .find(this.bodySelector)
                    cy.wrap(bodyChild).should('have.text', 'Child Iframe')
                })
        })
    }
    visit() {
        cy.visit(`${Cypress.env('urlDemoQA')}/nestedframes`)
    }
}

export const IframePage = new IframeDemoQA()
