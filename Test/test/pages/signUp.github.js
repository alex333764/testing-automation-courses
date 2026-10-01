import { Key } from 'webdriverio'

class SignUpPage {
    get title() {return $('#signup-form-fields')}
    get emailInput() {return $('#email')}
    get passwordInput() {return $('#password')}
    get usernameInput() {return $('#login')}
    get countryButton() {return $('#country-dropdown-panel-button')}
    get countryInput() {return $('#country-dropdown-panel-filter')}
    get checkbox() {return $('input[type="checkbox"]')}

    async addEmailValue(value) {
        await this.emailInput.addValue(value)
    }

    async addPasswordValue(value) {
        await this.passwordInput.addValue(value)
    }

    async addUsernameValue(value) {
        await this.usernameInput.addValue(value)
    }

    async selectCountry(country) {
        await this.countryButton.click();
        await this.countryInput.addValue(country);
        await browser.keys(Key.Enter);
    }

    async clickCheckbox() {
        await this.checkbox.click();
    }
}

export default new SignUpPage()