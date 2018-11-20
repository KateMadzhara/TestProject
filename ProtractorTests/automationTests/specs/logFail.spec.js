var logPage = require('../pages/loginPage'),
    failPage = require('../pages/failPage');

describe('Login test', function() {
    it('Enter values for login', function() {
        logPage.gets('http://www.way2automation.com/angularjs-protractor/registeration/#/login');     
        logPage.login('test', 'test', 'test');
        logPage.pressButton();
        browser.waitForAngular();
        expect(failPage.text()).toBe('Username or password is incorrect');

    });
});