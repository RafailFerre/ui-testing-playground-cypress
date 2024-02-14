class IframePlay1 {
    private iframe1Selector: string = '#frame1'

    getIframe1() {
        cy.frameLoaded(this.iframe1Selector)
    }
}

export const IframePlay1Page = new IframePlay1()
