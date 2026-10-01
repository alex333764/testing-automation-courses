class Newsletter {
    get title() {return $('h1.tmp-mb-4')}
    get emailInput() {return $('#form-field-emailAddress')}
    get countrySelector() {return $('#form-field-country')}
    get checkbox() {return $('.Primer_Brand__Checkbox-module__Checkbox___u6_Bq')}
    get subscribeButton() {return $('button[type="submit"]')}
    get thanks() {return $('#hero-section-brand-heading')}

    async setEmailInput(value) {
        await this.emailInput.setValue(value)
    }

    async selectCountry(country) {
        await this.countrySelector.selectByVisibleText(country);
    }

    async setCheckbox() {
        await this.checkbox.click();
    }

    async subscribe() {
        await this.subscribeButton.click();
    }
}

export default new Newsletter()