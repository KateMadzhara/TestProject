module.exports = {

    text: function() {
      return element(by.css('[class = "alert alert-danger ng-binding ng-scope"]')).getText()
    }  
  }  
    