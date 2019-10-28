import BasePage from './basePage';
import loginPage from './loginPage'
import LoginPage from './loginPage';
const selectors = require('src/selectors/landing.json');
export default class LandingPage extends BasePage {
    /**
     *Locators
    */
    private get loginLink() : WebdriverIO.Element { return $(selectors.loginLink);}

    /**
     * Opens LandingPage page
     */
    open() {
        super.open('');
    }

    /**
     * Clicks login button
     */
    clickLoginButton() {
        this.loginLink.click();
        let Login : LoginPage = new LoginPage;
        Login.loginButton.waitForDisplayed();
    }
}