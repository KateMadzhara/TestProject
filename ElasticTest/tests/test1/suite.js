const search = require('./selectBaseline');
const indexBulk = require('./createBaseline');
const compare = require('./compareResults');
const panoSearch = require('./search_file.json');

// describe("Create new Baseline", function() {
//     var originalTimeout;
//     beforeEach(function() {
//       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//       jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
//     });
//     it("Baseline succefully created", function() {
//         return panoSearch.forEach(function(elem){
//             search.newBaseline(elem, 'govs', 'constituencies')
//             .then((result) => {indexBulk.newBaseline(JSON.stringify(result.hits.hits))})
//             // .then((result) => {expect(result).toEqual('200')})
//             .catch(errorMessage => {throw new Error(errorMessage);
//         })
//     })
//     });
//     afterEach(function() {
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
   
//     });
    describe("Compare Data", function() {
        var originalTimeout;
        beforeEach(function() {
          originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
          jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
        });
        it("Compare Baseline with release candidate", function() {
            return panoSearch.forEach(function(elem){
               search.newBaseline(elem, 'govs_1', 'constituencies').then((result) => {compare.compare(JSON.stringify(result.hits.hits))})
               .then(search.newBaseline(elem, 'govs', 'constituencies')).then((result) => {compare.compare(JSON.stringify(result))}).then((resp) => {expect(resp).toEqual(true)})
                
                    // search.newBaseline(elem, 'govs', 'constituencies').then((result1) => {expect(JSON.stringify(result1.hits.hits)).toEqual(true)})
                // })
                    
                // .catch(errorMessage => {throw new Error(errorMessage);
            // })
        })
        });
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
       
        });
});
