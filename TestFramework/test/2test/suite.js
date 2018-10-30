var case1 = require("./mongoFunction");

describe("Is exists data: ", function() {
    it("Check that data presents in DB", function() {
        case1.test().then((result) => {expect(result).toEqual(true)})
    })
    var myReporter = {
            specDone: function(result) {
                if (result.status === 'fail') {
                    console.log('Spec FullName: ' + result.fullName);
                    console.log('Spec Result: ' + result.status);
                }
            },
        }
    jasmine.getEnv().addReporter(myReporter);

});
