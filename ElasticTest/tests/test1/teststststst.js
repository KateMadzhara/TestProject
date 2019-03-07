var client = require('../connection');
var panoSearch = require('./search_file.json');
var TestData = [];



function indexBulk (index, type, data) {
  let bulkBody = [], responsed;
    bulkBody.push({
      index: {
        _index: index,
        _type: type,
        _id: data._id
      }
    })

    bulkBody.push(data._source);
  
 client.bulk({maxRetries: 5, body: bulkBody}).then(function(resp){return responsed.json(resp);})
//   .then(response => {
//     responsed = response
//     // let errorCount = 0;
//     // response.items.forEach(item => {
//     //   if (item.index && item.index.error) {
//     //     console.log(++errorCount, item.index.error);
//     //   }
//     // });
//   })
//   .catch(console.err);
  }  

var makeResults = function(lists){
  for (var current in lists){

client.search({  
  index: 'govs',
  type: 'constituencies',
  body: {
    query: {
        match: {
            "_id": panoSearch[current]._id
        }
    }
  }
}).then(function(response) {
  response.hits.hits.forEach(function(elem) {
    TestData = elem
  })
//   console.log(TestData);
  return TestData
}).then(function(bulk){
  console.log(indexBulk('govs_1', 'constituencies', bulk))
})

}};
    
// results.hits.hits.forEach(function(hit){
//   TestData.push(hit); 
//    console.log(hit+ "Test Data");
//   } )
async function indexData() {
  const rawData = await makeResults(panoSearch);
  
  // indexBulk('govs_1', 'constituencies', rawData);
};

indexData();
  

//   makeResults(panoSearch, function(response){
//     console.log("Bulk content prepared");

// })
