var BasePage = require('./basePage');

var ProfilePage = function () {

  this.name = element(by.model("formData.name"));
  this.email = element(by.model("formData.email"));
  this.url = "http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile";

  this.login = function (nameKey, emailKey) {
    this.name.sendKeys(nameKey);
    this.email.sendKeys(emailKey);
  };
}; 

ProfilePage.prototype = BasePage;
module.exports = new ProfilePage();