class IframeHerokuapp {
    private iframeSelector: string = '#mce_0_ifr'
    getIframe() {
        cy.frameLoaded(this.iframeSelector)
        //cy.iframe().contains('Your content goes here.').should('be.visible')
        cy.iframe(this.iframeSelector).then((iframe) => {
            // cy.pause()
            // cy.wrap(iframe).type('{selectAll}{del}')
            // cy.wrap(iframe).type('Hello Raf')
            cy.wrap(iframe).clear().type('Hello Raf').contains('Hello Raf')
        })
    }
    visit() {
        cy.visit(`${Cypress.env('urlHerokuapp')}/iframe`)
    }
}

export const IframeHerokuappPage = new IframeHerokuapp()
