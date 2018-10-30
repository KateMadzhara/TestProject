var AllureReporter = require('jasmine-allure-reporter');

jasmine.getEnv().addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));
var myReporter = {
    specDone: function(result) {
        if (result.status === 'fail') {
            console.log('Spec FullName: ' + result.fullName);
            console.log('Spec Result: ' + result.status);
        }
    },
}
jasmine.getEnv().addReporter(myReporter);

