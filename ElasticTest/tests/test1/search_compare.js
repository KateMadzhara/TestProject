var client = require('../connection');
var panoSearch = require('./search_file.json');



function compareData (dataBaseline, dataNewBuild) {
  let result;
  if (JSON.stringify(dataBaseline) === JSON.stringify(dataNewBuild)) {
    result = true
  } else {
    result = false 
  }
  return result
}  

function responses (data) {
    let element = {};
    data.hits.hits.forEach(function(elem) {
        element = elem
      })
      return element  
}

var makeResults = function(lists, index){
  for (var current in lists){

return client.search({  
  index: index,
  type: 'constituencies',
  body: {
    query: {
        match: {
            "_id": panoSearch[current]._id
        }
    }
  }
})

}};
    
async function indexData() {
  const rawData = await makeResults(panoSearch, 'govs').then(responses).then(function(result){
    makeResults(panoSearch, 'govs_1').then(responses).then(function(result2){
        console.log(compareData(result._score, result2._score))
    })
  });
  
};

indexData();
