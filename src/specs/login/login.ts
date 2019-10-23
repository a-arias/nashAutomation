import { expect } from 'chai';
import LoginPage from '../../pages/loginPage';
import LandingPage from '../../pages/landingPage';
import DashboardPage from '../../pages/dashboardPage';

const username = process.env.LOGIN_USER;
const password = process.env.LOGIN_PASSWORD;
const incorrectPassword = 'qwerty100';

describe('Login functionality', () => {
    let landing : LandingPage;
    let login: LoginPage;

    before('setup', () => {
        landing = new LandingPage();
        login = new LoginPage();
    });

    it('should perform a correct login with correct credentials', () => {
        landing.open();
        landing.clickLoginButton();

        const dashboard : DashboardPage = login.loginWithCredentials(username, password);
        expect(dashboard.getHeadingText()).to.equal('Move work forward');
        expect(dashboard.getSubHeadingText()).to.equal('Tools for teams, from startup to enterprise');
        expect(dashboard.userFooterIsPresent()).to.be.true;
    })

    it('should Not perform a correct login because invalid password', () => {
        landing.open();
        landing.clickLoginButton();

        login.loginWithCredentials(username, incorrectPassword);
        expect(login.getLoginErrorText()).to.equal('Incorrect email address and / or password.\nDo you need help logging in?');
    })
})