import { Config } from '@wdio/sync';
export default class BasePage {
    open(path) {
        browser.url('/' + path);
    }
}
