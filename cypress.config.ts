import { defineConfig } from 'cypress'

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://uitestingplayground.com',
        excludeSpecPattern: [
            'cypress/e2e/1-getting-started/*',
            'cypress/e2e/2-advanced-examples/*',
        ],
        watchForFileChanges: false,
        env: {
            stage: 'https://stage.pasv.us',
            prod: 'https://coding.pasv.us',
            info: 'Hello Raf',
            urlHomeWork:
                'https://play1.automationcamp.ir/expected_conditions.html',
            urlDemoQA: 'https://demoqa.com',
            urlAlert: 'https://the-internet.herokuapp.com/',
        },
        defaultCommandTimeout: 15000,
        // setupNodeEvents(on, config) {
        //   // implement node event listeners here
        // },
    },
})
