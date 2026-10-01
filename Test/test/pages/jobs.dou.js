class JobsDou {
    get JobInput() {return $('input.job')}
    get SearchButton() {return $('input.btn-search')}
    get Vacancy() {return $('//*[@class="l-vacancy"][1]/div[2]/a')}

    async addJobInputValue(value) {
        await this.JobInput.addValue(value)
    }

    async clickSearchButton() {
        await this.SearchButton.click()
    }
}

export default new JobsDou()