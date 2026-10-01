import {browser, expect} from '@wdio/globals'

describe ("Homework #1", () => {
    it("URL is matching", async () => {
        await browser.url("https://webdriver.io/");

        let APILink = await $('nav a[href="/docs/api"]');
        await APILink.click();

        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://webdriver.io/docs/api");
    });

    it("Title is correct", async () => {
        await browser.url("https://webdriver.io/");

        let APILink = await $('nav a[href="/docs/api"]');
        await APILink.click();

        await expect($('.markdown h1')).toHaveText("Introduction");
    });

    it("Final test", async () => {
        await browser.url("https://webdriver.io/");

        let SearchLink = await $('.DocSearch-Button');
        await SearchLink.click();

        await $('.DocSearch-Input').setValue("all done");
        await browser.pause(4000);
    })
});

describe ("Homework #2", () => {
    it("link is displayed", async () => {
        await browser.url('https://webdriver.io');

        await $('nav a[href="/docs/api"]').click();
        let Link = await $('footer a[href="/blog"]');
        await Link.waitForExist({timeout: 5000});
        await Link.scrollIntoView();
        await expect(Link).toBeDisplayed({ withinViewport: true });
    });

    it("button is clickable", async () => {
        await browser.url("https://webdriver.io");

        await $('nav a[href="/docs/api"]').click();
        let Button = await $('.pagination-nav__label');
        await Button.waitForExist();
        await Button.scrollIntoView();
        console.log("Outer HTML: " + await Button.getHTML())
        await expect(Button).toBeClickable();
        await expect(Button).toBeDisplayed({ withinViewport: true });
    });

    it("header is displayed", async () => {
        await browser.url("https://webdriver.io");

        let APIButton = await $('nav a[href="/docs/api"]');
        await APIButton.click();

        let Button = await $('.pagination-nav__label');
        await Button.waitForExist();
        await Button.click();

        let Header = await $('#webdriver-protocol');
        await browser.waitUntil(() => {
            return Header.isDisplayed();
        }, 5000, "Header is not displayed")
        console.log("Yippeee! We did it:)");
    })
})