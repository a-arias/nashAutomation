import BasePage from './BasePage';
import ILoginPage from '../interfaces/ILoginPage';
import dashboardPage from './dashboardPage';
const loginSelectors = require('../pagesSelectors/login');

export default class LoginPage extends BasePage implements ILoginPage {

    get usernameInput() : WebdriverIO.Element  {return browser.$(loginSelectors.username); }
    get passwordInput() : WebdriverIO.Element {return browser.$(loginSelectors.password); }
    get loginButton()   : WebdriverIO.Element {return browser.$(loginSelectors.loginButton); }

    open() {
        super.open('');
    }

    enterLoginInformation(usernameValue, passwordValue) : void {
        this.usernameInput.setValue(usernameValue);
        this.passwordInput.setValue(passwordValue);
    }

    login(usernameValue, passwordValue): DashboardPage {
        this.enterLoginInformation(usernameValue, passwordValue);
        this.loginButton.click();
        return new DashboardPage;
    }

}
