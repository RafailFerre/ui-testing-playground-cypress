import { defineConfig } from 'cypress'

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    screenshotOnRunFailure: true,
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on)
            // implement node event listeners here
        },
        baseUrl: 'https://uitestingplayground.com',
        excludeSpecPattern: [
            'cypress/e2e/1-getting-started/*',
            'cypress/e2e/2-advanced-examples/*',
        ],
        watchForFileChanges: false,
        env: {
            stage: 'https://stage.pasv.us',
            serverStage: 'https://server-stage.pasv.us',
            emailStage: 'test@mail.com',
            passwordStage: 'Test1234',
            prod: 'https://coding.pasv.us',
            urlHomeWork:
                'https://play1.automationcamp.ir/expected_conditions.html',
            urlDemoQA: 'https://demoqa.com',
            urlHerokuapp: 'https://the-internet.herokuapp.com/',
            urlPlay1: 'https://play1.automationcamp.ir/',
        },
    },
    defaultCommandTimeout: 16000,
    viewportWidth: 1200,
    viewportHeight: 700,
    // retries: {
    //     runMode: 3,
    //     openMode: 2,
    // },
})
