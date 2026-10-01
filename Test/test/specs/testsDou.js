import { browser, expect } from '@wdio/globals'
import DouMain from '../pages/dou.main'
import JobsDou from '../pages/jobs.dou'
import SalariesDou from '../pages/salaries.dou'
import DefTechDou from '../pages/DefTechDou'

describe("Dou tests", () => {
    it("should should show quartile1", async () => {
        await browser.url('https://dou.ua/');

        DouMain.clickSalaryLink();
        // console.log("Блок містить текст: " + await SalariesDou.Quartile1.getText())
        await expect(SalariesDou.Quartile1).toBeDisplayed({withinViewport: true});
        await expect(SalariesDou.Quartile1).toHaveText(/квартиль/i)
    });

    it("should show vacancies that match the search query", async () => {
        await browser.url('https://dou.ua/');

        DouMain.clickJobsLink();
        JobsDou.addJobInputValue("тестувальник");
        JobsDou.clickSearchButton();
        await expect(JobsDou.Vacancy).toHaveText(/тестувальник/i)
    });

    it("should show all titles", async () => {
        await browser.url('https://dou.ua/')

        DouMain.clickGefTechLink();
        await DefTechDou.BlogTitle.scrollIntoView();
        await expect(DefTechDou.BlogTitle).toBeDisplayed({withinViewport: true});
        await expect(DefTechDou.NewsTitle).toBeDisplayed();
        await expect(DefTechDou.PopularTitle).toBeDisplayed();
    })
})