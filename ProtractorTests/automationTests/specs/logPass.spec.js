var logPage = require('../pages/loginPage'),
    homPage = require('../pages/homePage');

describe('Login test', function() {
    it('Enter values for login', function() {
        logPage.gets();     
        logPage.login('angular', 'password', 'angular');
        logPage.pressButton();
        browser.waitForAngular();
        expect(homPage.getText()).toBe('You\'re logged in!!');

    });
});