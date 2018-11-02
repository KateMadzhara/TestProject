var case1 = require("./mongoFunction");

describe("Is exists data: ", function() {
    it("Check that data presents in DB", function() {
        return case1.test().then((result) => {if (result == undefined || result == null) {
			throw new Error("Test result is empty");
		}  expect(result).toEqual(1)})
    })
});
