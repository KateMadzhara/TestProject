var case1 = require("./balance1");

describe("Check that balance > 0: ", function() {
    it("random balance", function() {
        case1.test().then((result) => {expect(result).toEqual(true)})
    })

});
