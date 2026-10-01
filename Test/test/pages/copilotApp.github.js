class CopilotApp {
    get title() {return $('#hero-section-brand-heading')}
    get docsLink() {return $('#_R_4kl_ a[href="https://gh.io/github-app-docs"]')}
    get docsTitle() {return $('#title-h1')}

    async clickDocsLink() {
        await this.docsLink.click();
    }
}

export default new CopilotApp()