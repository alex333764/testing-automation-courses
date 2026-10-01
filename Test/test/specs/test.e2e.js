import { browser, expect } from '@wdio/globals'
import LoginPage from '../pages/main.page.js'

describe ("My first tests", () => {
    xit("should have correct title", async () => {
        await browser.url(`https://webdriver.io/`);

        // const title = await browser.getTitle();
        // console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    xit("should show addValue command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username");
        await input.addValue('hello');

        await browser.pause(2000);

        await input.addValue(123);
        
        await browser.pause(2000);
        await expect(input).toHaveValue('hello123');
    });

    xit("should show setValue command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username");
        await input.setValue("hello");
        await browser.pause(2000);

        await input.setValue("world");
        console.log(await input.getValue());

        await expect(input).toHaveValue("world");
    });

    xit("should show click command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let button = await $('.radius');

        await button.click();
        await browser.pause(2000);

        let inputUsername = await $("#username");
        await inputUsername.setValue('tomsmith');

        let inputPassword = await $("#password");
        await inputPassword.setValue('SuperSecretPassword!');
        await button.click();
        await browser.pause(2000);
    });

    xit("should show setAttribute command", async () => {
        await browser.url(`https://dou.ua/search`);

        let inputSearch = await $("#gsc-i-id1");
        let attr = await inputSearch.getAttribute("aria-label");
        console.log("Placeholder attribute is:" + attr);

        await expect(attr).toBe('шукати');
    });

    xit("should show getLocation command", async () => {
        await browser.url(`https://dou.ua/search`);

        let inputSearch = await $("#gsc-i-id1");
        let location = await inputSearch.getLocation();

        console.log("Location: x = " + location.x + ", y = " + location.y);
    });

    xit("should show getText command", async () => {
        await browser.url(`https://webdriver.io/`);

        let subtitle = await $(".hero__subtitle");
        console.log("Subtitle text: " + await subtitle.getText());
    });

    xit("should show isClicable command", async () => {
        await browser.url("https://webdriver.io/");

        console.log("Is clickable: " + await $('header a[href="/docs/gettingstarted"]').isClickable())

        await expect(await $('header a[href="/docs/gettingstarted"]')).toBeClickable();
    });

    xit("should show isDisplayed command", async () => {
        await browser.url("https://webdriver.io/");

        console.log("Is displayed: " + await $('header a[href="/docs/gettingstarted"]').isDisplayed())
    });

    xit("should show isDisplayed in Viewport command", async () => {
        await browser.url("https://webdriver.io/");
        
        console.log("Is displayed in viewport: " + await $('footer a[href="/docs/gettingstarted"]').isDisplayed({withinViewport: true}));
    });

    xit("should show isEnabled command", async () => {
        await browser.url("https://webdriver.io/");
        console.log("Is enabled: " + await $('header a[href="/docs/gettingstarted"]').isEnabled());
    });

    xit("should show isFocused command", async () => {
        await browser.url("https://webdriver.io/");
        
        let button = await $('header a[href="/docs/gettingstarted"]');
        console.log("Is button focused right now?: " + await button.isFocused());
        await button.click();
        console.log("Is button focused after click on it?: " + await button.isFocused());
    });

    xit("should show scrollIntoView command", async () => {
        await browser.url("https://webdriver.io/");
        let Link = await $('footer a[href="/docs/gettingstarted"]');
        await Link.scrollIntoView();
        await browser.pause(2000);
        expect(Link).toBeDisplayed({withinViewport: true});
    });

    xit("should show saveScreenshot command", async () => {
        await browser.url("https://webdriver.io/");

        let Link = await $('footer a[href="/docs/gettingstarted"]');
        await Link.scrollIntoView();
        await browser.pause(2000);
        await Link.saveScreenshot('LinkScreenshot.png');
    });

    xit("should show newWindow and switchWindow command", async () => {
        await browser.url("https://webdriver.io/")

        await browser.newWindow("https://google.com");
        await browser.pause(2000);
        await browser.switchWindow("https://webdriver.io");
        await browser.pause(2000);
    });

    xit("should show waitUntil command", async () => {
        await browser.url("https://webdriver.io");

        let button = await $('header a[href="/docs/gettingstarted"]');
        await browser.waitUntil(async () => {
            return button.isDisplayed();
        }, 5000, "Button is not displayed");
    });

    xit("should show getHTML command", async () => {
        await browser.url("https://webdriver.io");

        let outerHTML = await $(".dropdown__menu").getHTML();
        console.log("OuterHTML: " + outerHTML);

        let innerHTML = await $(".dropdown__menu").getHTML(false);
        console.log("OuterHTML: " + innerHTML);
    });

    it("shoul show page object abilities", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);
        await LoginPage.setUsernameInput(123);
        await browser.pause(2000);
        await LoginPage.setUsernameInput('hello');
        await browser.pause(2000);
        expect(LoginPage.username).toHaveValue('123hello');
    });

    it("should show ...", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await LoginPage.setUsernameInput('tomsmith');
        await browser.pause(2000);
        await LoginPage.setPasswordInput('SuperSecretPassword!');
        await browser.pause(2000);
        await LoginPage.clickSubButton();
        await browser.pause(2000);
    })
})