var case1 = require("./balance1"),
    case2 = require("./balance2"),
    case3 = require("./balance3");

describe("Check that some balance cases", function() {
    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });
    it("random balance > 0", function() {
        return case1.test().then((result) => {expect(result).toEqual(true)}).catch(errorMessage => {
            console.log(errorMessage)
        })
    });
    it("Check balance = 0 for collection charge off", function() {
        return case2.test().then((result) => {expect(result).toEqual(true)}).catch(errorMessage => {
            console.log(errorMessage)
        })
    });
    it("Check cio balance = -1 then no npds balance > -1", function() {
        return case3.test().then((result) => {expect(result).toEqual(true)}).catch(errorMessage => {
            console.log(errorMessage)
        })
    });
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });
});
