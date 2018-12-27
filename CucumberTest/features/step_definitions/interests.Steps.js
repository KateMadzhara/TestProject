var interests = require("../../pageObject/pages/interestsPage");
const { Given, When, Then } = require('cucumber');

When('I select {string} radiobutton', function(interest) {
    interests.clickRadiobttn(interest);
  });