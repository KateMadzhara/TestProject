const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
var config = require('../mongo.config');

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
        MongoClient.connect(config.url, { useNewUrlParser: true }, function(err, client) {
        // Create a collection we want to drop later
        const col = client.db(config.dbName).collection('l1cio');
            // Show that duplicate records got dropped
            col.aggregate([
                {$match: {session: ObjectId(config.sessionId)}},
                {$project: {balance: "$value.trade.Balance"}},
                {$limit: 1}
            ], function(err, items) {
            var isExists = false;
                 if(items.balance > 0) {
                    isExists = true;   
                 }
            client.close();
            resolve(isExists);
            });
        });
        });
    }
}