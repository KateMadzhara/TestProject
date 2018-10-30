const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        // Create a collection we want to drop later
        const col = client.db(dbName).collection('test');
            // Show that duplicate records got dropped
            col.aggregate([
                {$match: {name: "EPUAKYIW1379"}}
            ], function(err, items) {
            var isExists = false;
                 if(items.length > 0) {
                    isExists = true;   
                 }
            client.close();
            resolve(isExists);
            });
        });
        });
    }
}