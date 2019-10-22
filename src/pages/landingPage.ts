import BasePage from './BasePage';
import loginPage from './loginPage';
//const landingPageSelectors = require('../pagesSelectors/landingPage');

export default class LandingPage extends BasePage{

    constructor() {
        super();
    }

    get loginButton2() : any { return browser.$('#gray_link'); }

    get loginButton() : WebdriverIO.Element  { return $('#gray_link'); }

    clickLoginButton() : LoginPage {
        this.loginButton2.click();
        return new LoginPage;
    }

}
