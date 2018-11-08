//clean folder with reports
var rimraf = require('rimraf'),
    AllureReporter = require('jasmine-allure-reporter'),
    allure = require('allure-commandline'),
    myReporter = {
        specDone: function(result) {
            if (result.status === 'fail') {
                console.log('Spec FullName: ' + result.fullName);
                console.log('Spec Result: ' + result.status);
            }
        },
    };
rimraf('./allure-results/*', function () { console.log('done'); });
jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
  }))
jasmine.getEnv().addReporter(myReporter);
//generate allure report  
jasmine.getEnv().afterAll(function (done) {allure(['serve', 'allure-results']).on('exit', function(exitCode) {
    console.log('Generation is finished with code:', exitCode);
    done();
  });});
