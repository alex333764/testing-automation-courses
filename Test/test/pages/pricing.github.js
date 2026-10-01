class Pricing {
    get title() {return $('h1.h2-mktg')}
    get compareLink() {return $('a.h5-mktg')}
    get compareTitle() {return $('h1.h1')}

    async compareAllFeatures() {
        await this.compareLink.click();
    }
}

export default new Pricing()