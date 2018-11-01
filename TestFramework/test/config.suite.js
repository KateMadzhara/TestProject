//clean folder with reports
var rimraf = require('rimraf');
rimraf('./allure-results/*', function () { console.log('done'); });

var AllureReporter = require('jasmine-allure-reporter');
var allure = require('allure-commandline');
var myReporter = {
    specDone: function(result) {
        if (result.status === 'fail') {
            console.log('Spec FullName: ' + result.fullName);
            console.log('Spec Result: ' + result.status);
        }
    },
}
jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
  }))
jasmine.getEnv().addReporter(myReporter);
//generate allure report  
jasmine.getEnv().afterAll(function (done) {allure(['serve', 'allure-results']).on('exit', function(exitCode) {
    console.log('Generation is finished with code:', exitCode);
    done();
  });});
