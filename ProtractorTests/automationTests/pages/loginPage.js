var loginButton = element(by.css('[class = "btn btn-danger"]')),
    username = element(by.model('Auth.user.name')),
    password = element(by.model('Auth.user.password')),
    description = element(by.model('model[options.key]'));

module.exports = {
  gets: function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
  },
  
  login: function(name, passwords, descriptions) {
    username.sendKeys(name);
    password.sendKeys(passwords);
    description.sendKeys(descriptions);
  },

  pressButton: function() {
    loginButton.click();
  }

}; 
