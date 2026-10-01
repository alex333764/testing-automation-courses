import {browser, expect} from '@wdio/globals'
import GitHub from '../pages/main.github'
import SignUpPage from '../pages/signUp.github'
import CopilotApp from '../pages/copilotApp.github'
import Newsletter from '../pages/newsletter.github'
import Pricing from '../pages/pricing.github'

describe("Final home project", () => {
    xit("should sign up", async () => {
        await browser.url('https://github.com/');

        await GitHub.signUp();
        await expect(SignUpPage.title).toBeDisplayed({withinViewport: true});
        await SignUpPage.addEmailValue("example@gmail.com");
        await SignUpPage.addPasswordValue("SuperSecretPassword!");
        await SignUpPage.addUsernameValue("alex21");
        await SignUpPage.selectCountry("Ukraine");
        await SignUpPage.clickCheckbox();
        await browser.pause(2000);
    });

    xit("should show documentation about the GitHub Сopilot app", async () => {
        await browser.url('https://github.com/')

        await GitHub.copilotAppLink.scrollIntoView();
        await expect(GitHub.copilotAppLink).toExist();
        await GitHub.ClickCopilotAppLink();
        await expect(CopilotApp.title).toBeDisplayed({withinViewport: true});
        await CopilotApp.clickDocsLink();
        await expect(CopilotApp.docsTitle).toBeDisplayed({withinViewport: true});
    });

    xit("should subscribe to the newsletter", async () => {
        await browser.url('https://github.com/');

        await GitHub.subscribeButton.scrollIntoView();
        await expect(GitHub.subscribeButton).toExist();
        await GitHub.ClickSubscribe();
        await expect(browser).toHaveUrl("https://github.com/newsletter");
        await Newsletter.setEmailInput("example@gmail.com");
        await Newsletter.selectCountry("Ukraine");
        await Newsletter.setCheckbox();
        await Newsletter.subscribe();
        await Newsletter.thanks.waitForExist();
        await expect(Newsletter.thanks).toHaveText("Thanks for subscribing");
    });

    xit("should display the repository corresponding to the search query", async () => {
        await browser.url('https://github.com/');

        await GitHub.search("act");
        await expect(GitHub.searchResults).toHaveAttribute('href', expect.stringContaining('act'));
    });
    
    it("should show a comparison of features across GitHub subscription tiers", async () => {
        await browser.url('https://github.com/');

        await  GitHub.clickPricingButton();
        await expect(Pricing.title).toBeDisplayed({withinViewport: true});
        await Pricing.compareAllFeatures();
        await expect(Pricing.compareTitle).toBeDisplayed({withinViewport: true});
    })
})