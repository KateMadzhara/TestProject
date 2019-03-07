var profile = require("../../pageObject/pages/profilePage");
const { Given, When, Then } = require('cucumber');

When('I submit profile form with {string} and {string}', function(name, email) {
    profile.login(name, email)
  });