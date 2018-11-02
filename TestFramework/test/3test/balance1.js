var MongoClient = require('mongodb').MongoClient,
    config = require('../mongo.config');

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
            MongoClient.connect(config.url, { useNewUrlParser: true }, function(err, client) {
                var db = client.db(config.dbName);
                function simplePipeline(db, callback) {
                    var col = db.collection('l1cio')
                    col.aggregate([
                        {$match: {"_id.session": config.sessionId}},
                        {$project: {balance: "$value.trade.Balance"}},
                        {$limit: 1}
                    ], function(err, items) {
                        items.toArray(function(err, result) {
                            var isExist = 0;
                            result.forEach(function(elem) {
                                if (elem.length === 0) {
                                    isExist = 0;   
                                } else if (parseInt(elem.balance) > 0) {
                                    isExist = 1;
                                }
                            })
                            resolve(isExist);
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