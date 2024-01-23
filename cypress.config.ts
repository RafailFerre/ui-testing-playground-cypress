import { defineConfig } from 'cypress'

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://uitestingplayground.com/',
        excludeSpecPattern: [
            'cypress/e2e/1-getting-started/*',
            'cypress/e2e/2-advanced-examples/*',
        ],
        watchForFileChanges: false,
        // setupNodeEvents(on, config) {
        //   // implement node event listeners here
        // },
    },
})
