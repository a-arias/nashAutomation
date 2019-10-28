import BasePage from './basePage';
import DashboardPage from './dashboardPage';
import ILoginPage from '../interfaces/ILoginPage';

const selectors = require('src/selectors/login.json');
export default class LoginPage extends BasePage implements ILoginPage {
    /**
     * Locators
     */
     get usernameInput() : WebdriverIO.Element {return $(selectors.username);}
     get passwordInput() : WebdriverIO.Element {return $(selectors.password);}
     get loginButton() : WebdriverIO.Element {return $(selectors.loginButton);}
     get loginError() : WebdriverIO.Element {return $(selectors.loginError);}

    /**
     * Get loginError element text 
     */
    public getLoginErrorText() {
        this.loginError.isDisplayed();
        return this.loginError.getText();
    }

    /**
     * Perform complete login with given credentials
     */
    public loginWithCredentials(username : String, password : String) :DashboardPage  {
        this.usernameInput.waitForDisplayed();
        this.usernameInput.setValue(username);
        this.loginButton.click();
        this.passwordInput.waitForDisplayed();
        this.passwordInput.setValue(password);
        this.loginButton.click();
        return new DashboardPage();
    }
}
