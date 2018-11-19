var loginPage = function() {

    this.loginButton = element(by.css('[class = "btn btn-danger"]'));
    this.username = element(by.model('Auth.user.name'));
    this.password = element(by.model('Auth.user.password'));
    this.description = element(by.model('model[options.key]'));
  
    this.gets = function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    };
  
    this.login = function(name, password, description) {
      this.username.sendKeys(name);
      this.password.sendKeys(password);
      this.description.sendKeys(description);
    };

    this.pressButton = function() {
        this.loginButton.click();
    }
}
  
  module.exports = new loginPage();