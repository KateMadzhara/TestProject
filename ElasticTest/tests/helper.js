const client = require('./connection');

module.exports = {

  search: function(list, index, type) {
      return client.search({  
        index: index,
        type: type,
        body: {
          query: {
              match: {
                  "_id": list._id
              }
          }
        }
      })
  },

  makeBulk: function(data, index, type) {
    let bulkBody = [];
    for (let key in data) {
      bulkBody.push({
        index: {
          _index: index,
          _type: type,
          _id: data[key]._id
        }
      }),
      bulkBody.push({_source: data[key]._source});
    }
    return bulkBody;
  },

  indexBulk: function(data, callback) {
  client.bulk({body: data}, function(err, resp) {callback(resp)});
},

  compareData: function(dataBaseline) {
    function inside(dataNewBuild) {
    let result = false;
    if (JSON.stringify(dataBaseline) === JSON.stringify(dataNewBuild)) {
      result = true;
    } else {
      result = false; 
    }
    return result;
  }  
  return inside;
}

}