# Nash Automation example

# WebdriverIO_and_TypeScript_BoilerPlate
This is an awesome boilerplate project that uses WebdriverIO v5 and TypeScript V3, this includes examples of PageObject patter, allure and spec report with screenshots for failing tests, integration with BrowserStack to test in real devices with different browser in parallel, Chai js for assertions, multiple environment configuration and API mocks and request testing.

## Getting Started
```
git clone git@github.com:a-arias/nashAutomation.git
cd nashAutomation
npm install
npm test
```
## Running specific suites
```
./node_modules/.bin/wdio wdio.conf.js --suite navigation   
```

## Generating Allure Report
```
npm report
```

## Executing tests in development environment
```
npm run test_development
```

## Executing in BrowserStack using different browsers
```
npm run test_browserStack 
```

## Executing in BrowserStack in parallel
```
npm run test_browserStackParallel
```

## Executing API tests
```
npm run test_api
```

## Executing API Mocks
```
npm run test_mocks
```


## Why TypeScript
TypeScript simplifies JavaScript code, making it easier to read and debug. TypeScript is open source. TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking. TypeScript makes code easier to read and understand.

We can see intellisense helping out here:
![intellisense](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/intellisense.png)

You no longer need to explicitly compile your TypeScript to JavaScript using the command `tsc`. This project uses ts-node/register and tsconfig-paths as detailed on the [WebdriverIO TypeScript setup](https://webdriver.io/docs/typescript.html) page. 

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginWithCredentials()` that allow you to write more concise tests. 

##### `src/pages/LoginPage.ts`

```typescript
import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new LoginPage();
```