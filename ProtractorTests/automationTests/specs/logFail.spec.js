var logPage = require('../pages/loginPage'),
    failPage = require('../pages/failPage');

describe('Login test', function() {
    it('Enter values for login', function() {
        logPage.gets();     
        logPage.login('test', 'test', 'test');
        logPage.pressButton();
        browser.waitForAngular();
        expect(failPage.getText()).toBe('Username or password is incorrect');

    });
});