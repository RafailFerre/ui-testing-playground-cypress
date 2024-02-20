class IframePlay1 {
    private iframe1Selector: string = '#frame1'
    private iframe1Button: string = '#click_me_1'
    private iframe2Selector: string = '#frame2'
    private iframe2Button: string = '#click_me_2'
    private iframe3Selector: string = '#frame3'
    private iframe4Selector: string = '#frame4'
    private iframe4Button: string = '#click_me_4'

    getIframe1() {
        cy.get(this.iframe1Selector).then((iframe1) => {
            const bodyIframe1 = iframe1.contents().find('body')
            cy.wrap(bodyIframe1).contains('Frame1 (ID=frame1)')
            cy.wrap(bodyIframe1)
                .find(this.iframe1Button)
                .click()
                .should('have.text', 'Clicked')
                .and('have.css', 'background-color', 'rgb(55, 58, 60)')
        })
        cy.wait(5000)
    }
    getIframe1Plugin() {
        cy.frameLoaded(this.iframe1Selector)
        cy.iframe(this.iframe1Selector).contains('Frame1 (ID=frame1)')
        cy.iframe(this.iframe1Selector)
            .find(this.iframe1Button)
            .click()
            .should('have.text', 'Clicked')
            .and('have.css', 'background-color', 'rgb(55, 58, 60)')
        cy.wait(5000)
    }

    getIframe2() {
        cy.get(this.iframe1Selector).then((iframe1) => {
            const bodyIframe1 = iframe1.contents().find('body')
            cy.wrap(bodyIframe1)
                .find(this.iframe2Selector)
                .then((iframe2) => {
                    const bodyIframe2 = iframe2.contents().find('body')
                    cy.wrap(bodyIframe2).contains('Frame2 (ID=frame2)')
                    cy.wrap(bodyIframe2)
                        .find(this.iframe2Button)
                        .click()
                        .should('have.text', 'Clicked')
                        .and('have.css', 'background-color', 'rgb(55, 58, 60)')
                })
        })
        cy.wait(5000)
    }
    getIframe2Plugin() {
        //cy.iframe(this.iframe1Selector).then((iframe1) => {
        cy.enter(this.iframe1Selector).then((getBody) => {
            //cy.wrap(iframe1)
            getBody()
                .find(this.iframe2Selector)
                .then((iframe2) => {
                    const bodyIframe2 = iframe2.contents().find('body')
                    cy.wrap(bodyIframe2).contains('Frame2 (ID=frame2)')
                    cy.wrap(bodyIframe2)
                        .find(this.iframe2Button)
                        .click()
                        .should('have.text', 'Clicked')
                        .and('have.css', 'background-color', 'rgb(55, 58, 60)')
                })
        })
        cy.wait(5000)
    }
    getIframe3() {
        // cy.iframe(this.iframe1Selector).then((iframe1) => {
        //     cy.wrap(iframe1)
        cy.get(this.iframe1Selector).then((iframe1) => {
            const bodyIframe1 = iframe1.contents().find('body')
            cy.wrap(bodyIframe1)
                .find(this.iframe3Selector)
                .then((iframe3) => {
                    const bodyIframe3 = iframe3.contents().find('body')
                    cy.wrap(bodyIframe3).contains('Frame3 (ID=frame3)')
                })
        })
        cy.wait(5000)
    }
    getIframe4() {
        cy.get(this.iframe1Selector).then((iframe1) => {
            const bodyIframe1 = iframe1.contents().find('body')
            cy.wrap(bodyIframe1)
                .find(this.iframe3Selector)
                .then((iframe3) => {
                    const bodyIframe3 = iframe3.contents().find('body')
                    cy.wrap(bodyIframe3)
                        .find(this.iframe4Selector)
                        .then((iframe4) => {
                            const bodyIframe4 = iframe4.contents().find('body')
                            cy.wrap(bodyIframe4).contains('Frame4 (ID=frame4)')
                            cy.wrap(bodyIframe4)
                                .find(this.iframe4Button)
                                .click()
                                .should('have.text', 'Clicked')
                                .and(
                                    'have.css',
                                    'background-color',
                                    'rgb(55, 58, 60)'
                                )
                        })
                })
        })
        cy.wait(5000)
    }
}

export const IframePlay1Page = new IframePlay1()
