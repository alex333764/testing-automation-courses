import {browser, expect} from '@wdio/globals'
import { Key } from 'webdriverio'

describe ("Homework #3", () => {
    it("should go to the blog page from the navbar", async () => {
        await browser.url('https://github.com/');
        let PlatformButton = await $('//button[contains(text(), "Platform")]');
        await PlatformButton.moveTo();
        let BlogButton = await $('#_R_nd_ a[href="https://github.blog"]');
        await BlogButton.click();
        await browser.switchWindow('https://github.blog/');
        await expect(browser).toHaveUrl('https://github.blog/');
    });

    it("should return articles that match the search query", async () => {
        await browser.url('https://github.blog/');

        let SearchButton = await $('button[aria-label="Toggle search"]');
        await SearchButton.click();
        let Search = await $('#search-input');
        await Search.setValue("testing");
        await browser.keys(Key.Enter);
        let Article = await $('//article[1]/div/div[3]/h3/a');
        await expect(Article).toHaveText(expect.stringContaining("testing"));
    });

    xit("should display the registration form", async () => {
        await browser.url('https://github.com/');

        let SignUpInput = await $('#hero_user_email');
        await SignUpInput.setValue("12345@gm");
        let SignUpButton = await $('button.js-hero-action');
        await SignUpButton.click();
        let EmailInput = await $('input#email');
        EmailInput.waitForExist();
        await expect (EmailInput).toHaveValue("12345@gm");
    });

    it("should follow the link", async () => {
        await browser.url('https://github.com/');

        let Link = await $('a[href="/customer-stories"]');
        await Link.click();
        expect(browser).toHaveUrl("https://github.com/customer-stories")
    });

    it("should show trending repositories", async () => {
        await browser.url('https://github.com/')

        let OpenSourseButton = await $('//button[contains(text(), "Open Source")]')
        OpenSourseButton.moveTo();
        let TrendingButton = await $('a[href="https://github.com/trending"]');
        await TrendingButton.click();

        let ArticleStars = await $('//article[1]/div[2]/a[1]');
        console.log("Popularity of the first article: " + await ArticleStars.getText() + " stars.")
        expect(browser).toHaveUrl('https://github.com/trending');
    })
})