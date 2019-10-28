import BasePage from './basePage';
const selectors = require('src/selectors/dashboard.json');

export default class DashboardPage extends BasePage {
    /**
     *Locators
    */
    private get getDashboardHeadingElement() : WebdriverIO.Element {return $(selectors.headingText);}
    private get getDashboardSubHeadingElement() : WebdriverIO.Element {return $(selectors.subHeadingText);}
    private get getDashboardFooterElement() : WebdriverIO.Element {return $(selectors.footer);}
    private get getDashboardTryForFreeButton() : WebdriverIO.Element {return $(selectors.tryForFreeButton);}
    private get getDashboardSearchButton() : WebdriverIO.Element {return $(selectors.searchButton);}
    private get getDashboardProductInput() : WebdriverIO.Element {return $(selectors.productInput);}
    private get getDashboardSearchSubmitButton() : WebdriverIO.Element {return $(selectors.searchSubmitButton);}
    private get getDashboardSearchResultList() : WebdriverIO.Element {return $(selectors.searchResultList);}

    //############# Perform complete search ###########
    public performCompleteSearch(productName: string) {
        this.clickSearchButton();
        this.fillProductInput(productName);
        this.getDashboardSearchSubmitButton.click();
    }

    /**
     *click search button
     */
    public clickSearchButton() {
        this.getDashboardSearchButton.click();
    }

    /**
     *fill product input
     */
    public fillProductInput(productName: string) {
        this.getDashboardProductInput.setValue(productName);
    }

     /**
     * Makes sure product search result list is present on the page
     */
    public productSearchResultListIsPresent() {
        return this.getDashboardSearchResultList.isDisplayed();
    }

     /**
     *click try for free button 
     */
    public clickTryForFreeButton() {
        this.getDashboardTryForFreeButton.click();
    }

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