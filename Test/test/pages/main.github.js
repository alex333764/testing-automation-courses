import { Key } from 'webdriverio'

class GitHub {
    get signUpButton() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get copilotAppLink() {return $('#cta a[href="/features/ai/github-app"]')}
    get subscribeButton() {return $('a[href="/newsletter"]')}
    get searchButton() {return $('button.HeaderSearch-module__trigger__zsF9q')}
    get searchInput() {return $('input.prc-components-Input-IwWrt')}
    get searchResults() {return $('//*[@class="Result-module__Result__I0WVD"][1]/div/div[1]/h3/div/div[2]/a')}
    get pricingButton() {return $('a[href="https://github.com/pricing"]')}

    async signUp() {
        await this.signUpButton.click();
    }

    async ClickCopilotAppLink() {
        await this.copilotAppLink.click();
    }

    async ClickSubscribe() {
        await this.subscribeButton.click();
    }

    async search(value) {
        await this.searchButton.click();
        await this.searchInput.addValue(value);
        await browser.keys(Key.Enter);
    }

    async clickPricingButton() {
        await this.pricingButton.click();
    }
}

export default new GitHub()