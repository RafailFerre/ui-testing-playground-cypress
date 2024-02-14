import { IframeHerokuappPage } from '../../pages/IframeHerokuapp'

describe('Iframe verify for Herokuapp', () => {
    beforeEach(() => {
        IframeHerokuappPage.visit()
    })
    it('Iframe test with plugin', () => {
        IframeHerokuappPage.getIframe()
    })
})
