var case1 = require("./function");

describe("Result is true?: ", function() {
    it("Check that function returns true", function() {
        expect(case1.returnTrue()).toEqual(true)
    })
    it("Check that reporting works", function() {
        expect(case1.returnTrue()).toEqual(false)
    })
});
