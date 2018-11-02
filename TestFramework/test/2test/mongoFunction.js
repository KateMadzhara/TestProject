const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017/';
// Database Name
const dbName = 'test';

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
            MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
                const db = client.db(dbName);
                function simplePipeline(db, callback) {
                    const col = db.collection('test');
                    col.aggregate([
                        {$match: {"name": "EPUAKYIW1379"}}
                    ], function(err, items) {
                        items.toArray(function(err, result) {
                            var isExists = result.length;
                            resolve(isExists);
                        });
                    });
                }
                simplePipeline(db, function() {
                    client.close();
                });
            });
        })
    }
}