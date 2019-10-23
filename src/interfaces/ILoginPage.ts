import DashboardPage from '../pages/dashboardPage';

export default interface ILoginPage {
     usernameInput : WebdriverIO.Element;
     passwordInput : WebdriverIO.Element;
     loginButton : WebdriverIO.Element;
     loginError : WebdriverIO.Element;

    getLoginErrorText() : any;
    loginWithCredentials(username : string, password : string) : DashboardPage;
}
