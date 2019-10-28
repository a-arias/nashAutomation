import { expect } from 'chai';
import LoginPage from '../../pages/loginPage';
import LandingPage from '../../pages/landingPage';
import DashboardPage from '../../pages/dashboardPage';

const username = process.env.LOGIN_USER;
const password = process.env.LOGIN_PASSWORD;

describe('Dashboard navigation', () => {
       let landing : LandingPage;
       let login: LoginPage;

    before('setup', () => {
        landing = new LandingPage();
        login = new LoginPage();
    });

    it('should display correct heading text on try for free page', () => {
        landing.open();
        landing.clickLoginButton();

        const dashboard : DashboardPage = login.loginWithCredentials(username, password);
        dashboard.clickTryForFreeButton();

        expect(dashboard.getHeadingText()).to.contain('Products for teams, from startup to enterprise');
    });

    it('should be able to perfom a product search', () => {
        let productName = 'JiraWorkflows';

        landing.open();
        landing.clickLoginButton();

        const dashboard : DashboardPage = login.loginWithCredentials(username, password);
        dashboard.clickSearchButton();
        dashboard.performCompleteSearch(productName);

        dashboard.productSearchResultListIsPresent();
    });
});