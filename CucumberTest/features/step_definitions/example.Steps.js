var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var page = require('../../pageObject/pages/basePage');
var provider = require('../../pageObject/pages/pageObjectsProvider');
var button = require('../../pageObject/common/nextButton');

chai.use(chaiAsPromised);
var expect = chai.expect;
const { Given, When, Then } = require('cucumber');

// module.exports = function() {
  Given('I am on {string} page', function (getpage) {
    provider.getPageObjects(getpage).visit();
  });

  When('I click the NextSection button', function() {
    button.pressButton();
  });

  Then('I should be on {string} page', function(getpage) {
    page.isPage(getpage);
  });
// };