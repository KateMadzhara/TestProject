var BasePage = require("./basePage");

var InterestsPage = function() {

  this.ps = element(by.css("[value = \'ps\']"));
  this.xbox = element(by.css("[value = \'xbox\']"));
  this.url = "http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile";

  this.clickRadiobttn = function(nameKey) {
    if (nameKey === "xbox") {
      this.xbox.click();
    } else if (nameKey === "ps") {
      this.ps.click();
    }
  };
}; 

InterestsPage.prototype = BasePage;
module.exports = new InterestsPage();