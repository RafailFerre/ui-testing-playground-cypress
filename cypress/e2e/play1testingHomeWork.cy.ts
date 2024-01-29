// Home work test case for website 'https://play1.automationcamp.ir/expected_conditions.html'
// add url in env in file cypress.config.ts (after use cy.visit(Cypress.env('urlHomeWork'))
// visit 'urlHomeWork' ('https://play1.automationcamp.ir/expected_conditions.html')
// test all button trigger and events

describe('Delay testing', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('urlHomeWork'))
    })
    it('Wait for alert to be present', () => {
        cy.get('#alert_handled_badge').should('not.be.visible')
        cy.get('#alert_trigger').should('be.visible').and('be.enabled').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am alerting you!')
        })
        cy.get('#alert_trigger').should('be.disabled')
        cy.get('#alert_handled_badge')
            .should('be.visible')
            .and('have.text', 'Alert\n                                handled')
    })
    it('Wait for prompt to be present', () => {
        cy.get('#confirm_ok').should('not.be.visible')
        cy.get('#confirm_cancelled').should('not.be.visible')
        cy.get('#prompt_trigger').should('be.visible').and('be.enabled').click()
        cy.get('#prompt_trigger').should('be.disabled')
        cy.on('window:prompt', (text) => {
            expect(text).to.equal("Choose wisely... It's your life!")
        })
        cy.get('#confirm_ok').should('be.visible')
        cy.get('#confirm_cancelled').should('not.be.visible')
    })
    it('Wait for element to be visible', () => {
        cy.get('#visibility_trigger').should('be.visible').click()
        cy.get('#visibility_target')
            .should('be.visible')
            .should('have.text', 'Click Me')
            .click()
        cy.get('.popover-header').should('have.text', 'Can you see me?')
        cy.get('.popover-body').should(
            'have.text',
            'I just removed my invisibility cloak!!'
        )
    })
    it('Wait for element to be Invisible', () => {
        cy.get('#invisibility_target').should('be.visible')
        cy.get('#invisibility_trigger').should('be.visible').click()
        cy.get('#invisibility_target').should('not.be.visible')
        cy.get('#spinner_gone')
            .should('be.visible')
            .and('have.text', 'Thank God that spinner is gone!')
    })
    it('Wait for element to be enabled', () => {
        cy.get('#enabled_target')
            .should('be.disabled')
            .and(
                'have.text',
                'Disabled\n' + '                            Button'
            )
        cy.get('#enabled_trigger')
            .should('be.visible')
            .and('have.text', 'Trigger')
            .click()
        cy.get('#enabled_target').should('be.enabled')
        cy.get('#enabled_target').should('have.text', 'Enabled Button').click()
        cy.get('.popover-header')
            .should('be.visible')
            .and('have.text', 'Yay! I am super active now!')
        cy.get('.popover-body')
            .should('be.visible')
            .and('have.text', 'See, you just clicked me!!')
    })
    it('Wait for Page Title to change', () => {
        cy.title().should('eq', 'Wait Conditions')
        cy.get('#page_title_trigger').should('be.visible').click()
        cy.title().should('eq', 'My New Title!')
    })
    it('Wait for text/value to have specific values', () => {
        cy.get('#wait_for_value').should('have.value', '')
        cy.get('#text_value_trigger')
            .should('be.visible')
            .and('be.enabled')
            .click()
        cy.get('#wait_for_text').should('be.visible').and('be.enabled').click()
        cy.get('#wait_for_value')
            //.should('have.value', 'Dennis Ritchie')
            .type('Hello World!')
            .should('have.value', 'Hello World!')
    })
    it('Wait for frame to be available and then switch to it', () => {
        cy.get('#wait_for_frame').should('be.enabled').click()
        cy.get('iframe')
            .should('be.visible')
            .then(($iframe) => {
                const iframe = $iframe.get(0)

                const src = iframe.getAttribute('src')
                const id = iframe.getAttribute('id')

                expect(src).to.equal('inner.html')
                expect(id).to.equal('frm')
            })
        cy.visit('https://play1.automationcamp.ir/inner.html')
        cy.get('#inner_button')
            .should('be.visible')
            .and('be.enabled')
            .should('have.text', 'Inner Button')
            .click()
        cy.get('#inner_button')
            .should('be.visible')
            .and('be.enabled')
            .should('have.text', 'Clicked')
            .click()
    })
})
// cy.get('iframe')
//     .should('be.visible')
//     .then(($iframe) => {
//         const $body = $iframe.contents().find('body') // Получаем доступ к содержимому фрейма
//
//         cy.wrap($body)
//             .find('#inner_button') // Находим кнопку внутри фрейма по id или другому селектору
//             .should('be.enabled')
//             .click() // Выполняем действие, например, клик по кнопке
//     })
// cy.frameLoaded('#frame_id').then(() => {
//     cy.switchToFrame('#frame_id')
// })
