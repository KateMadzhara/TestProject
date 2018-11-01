var case1 = require("./balance1"),
    case2 = require("./balance2"),
    case3 = require("./balance3");

describe("Check that some balance cases", function() {
    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });
    it("random balance > 0", function() {
        return case1.test().then((isExists) => {if (isExists == undefined || isExists == null) {
			throw new Error("Test result is empty");
		} expect(isExists).toEqual(1)})
    });
    it("Check balance = 0 for collection charge off", function() {
        return case2.test().then((failResults) => {if (failResults == undefined || failResults == null) {
			throw new Error("Test result is empty");
		} expect(failResults).toEqual(0)})
    });
    it("Check cio balance = -1 then no npds balance > -1", function() {
        return case3.test().then((failResults) => {if (failResults == undefined || failResults == null) {
			throw new Error("Test result is empty");
		} expect(failResults).toEqual(0)})
    });
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });
});
