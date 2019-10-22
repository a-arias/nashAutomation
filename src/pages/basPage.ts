// const locators = require('../selectors/basePage.json');

export default class BasePage {
    open(path) {
        browser.url('/' + path);
    }
}
