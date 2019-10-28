var browserstack = require('browserstack-local');
require('dotenv').config();

exports.config = {
  user: process.env.BROWSER_STACK_USER,
  key: process.env.BROWSER_STACK_PASSWORD,

  suites: {
    login: [
        './src/specs/login/login.ts',
    ],
    navigation: [
        './src/specs/dashboard/navigation.ts',
    ],
  },
  baseUrl: 'https://www.atlassian.com',
  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  capabilities: [{
    browser: 'chrome'
  },{
    browser: 'firefox'
  },{
    browser: 'internet explorer'
  },{
    browser: 'safari'
  }],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: [
        'tsconfig-paths/register'
      ],
  },

  before: function() {
    require('dotenv').config()
    require('ts-node').register({ files: true })
  },

  afterTest: function(test) {
    browser.reloadSession();
    if (test.error !== undefined) {
        browser.takeScreenshot();
    }
  },

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.key }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(function() {});
  }
}