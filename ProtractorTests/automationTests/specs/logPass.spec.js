var logPage = require('../pages/loginPage'),
    homPage = require('../pages/homePage');

describe('Login test', function() {
    it('Enter values for login', function() {
        logPage.gets('http://www.way2automation.com/angularjs-protractor/registeration/#/login');     
        logPage.login('angular', 'password', 'angular');
        logPage.pressButton();
        browser.waitForAngular();
        expect(homPage.text()).toBe('You\'re logged in!!');

    });
});