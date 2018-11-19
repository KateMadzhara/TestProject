var logPage = require('../pages/loginPage'),
    homPage = require('../pages/homePage');

describe('Login test', function() {
    it('Enter values for login', function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        // browser.waitForAngular();
        // logPage.login('angular', 'password', 'angular');
        // browser.waitForAngular();
        // logPage.pressButton();
        // expect(homPage.text()).toBe('You\'re logged in!!');

    });
});