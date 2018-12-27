var nextSectionButton = element(by.css('[class = "btn btn-block btn-info"]'));

module.exports = {
  pressButton: function() {
    nextSectionButton.click();
  }
}; 