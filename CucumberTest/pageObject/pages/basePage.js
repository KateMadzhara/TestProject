
var BasePage = function () {

    this.visit = function () {
        return browser.get(this.url);
    };

    this.checkPageTitle = function (pageTitle) {
        return browser.getTitle().then(function (title) {
            return title === pageTitle;
        });
    };
    this.hitEnter = function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    this.isPage = function(page) {
        if (page == "interests") {
            return element(by.css("[label.ng-scope]")).getText() === 'What\'s Your Console of Choice?'
        } else if (page == "payment") {
            return element(by.css("[#form-views > div:nth-child(1) > h3:nth-child(2)]")).getText() === 'Test Completed, WooHoo!'
        }
      }

};

module.exports = new BasePage();