class DouMain {
    get SalaryLink() {return $('a[href="https://jobs.dou.ua/salaries/"]')}
    get JobsLink() {return $('a[href="https://jobs.dou.ua/"]')}
    get GefTechLink() {return $('.menu-site__deftech')}

    async clickSalaryLink() {
        await this.SalaryLink.click();
    }

    async clickJobsLink() {
        await this.JobsLink.click()
    }

    async clickGefTechLink() {
        await this.GefTechLink.click()
    }
}

export default new DouMain()