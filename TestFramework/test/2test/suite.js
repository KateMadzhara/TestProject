var case1 = require("./mongoFunction");

describe("Is exists data: ", function() {
    it("Check that data presents in DB", function() {
        case1.test().then((result) => {expect(result).toEqual(true)})
    })

});
