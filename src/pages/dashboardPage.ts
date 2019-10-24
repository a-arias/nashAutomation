import BasePage from './basePage';
const selectors = require('src/selectors/dashboard.json');


export default class DashboardPage extends BasePage {
    /**
     *Locators
    */
    private get getDashboardHeadingElement() : WebdriverIO.Element {return $(selectors.headingText);}
    private get getDashboardSubHeadingElement() : WebdriverIO.Element {return $(selectors.subHeadingText);}
    private get getDashboardFooterElement() : WebdriverIO.Element {return $(selectors.footer);}

    /**
     *Get heading element text 
     */
    public getHeadingText() {
        this.getDashboardHeadingElement.isDisplayed();
        return this.getDashboardHeadingElement.getText();
    }

    /**
     * Get Sub-heading element text 
     */
    public getSubHeadingText() {
        this.getDashboardSubHeadingElement.isDisplayed();
        return this.getDashboardSubHeadingElement.getText();
    }

    /**
     * Make sure Dashboard footer is present on the page
     */
    public userFooterIsPresent() {
        return this.getDashboardFooterElement.isDisplayed();
    }

    /**
     * Opens Dashboard page
     */
    open() {
        super.open('');
    }
}