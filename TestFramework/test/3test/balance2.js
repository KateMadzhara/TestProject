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
                        {$project: {
                            trade: "$value.trade"
                        }},
                        {$project: {
                            accountNumber: "$trade.AccountNumber",
                            chargeoffFlag: "$trade.@CollectionChargeoffFlag",
                            isPaid: "$trade.@IsPaidStatus",
                            cioBalance: {$ifNull: ["$trade.Balance", null]},
                            cioPastDueAmount: {$ifNull: ["$trade.PastDueAmount", null]}
                        }},
                        {$match: {
                            $and: [
                                {chargeoffFlag: {$in: ["-1", "1"]}},
                                {isPaid: "Y"}          
                            ]
                        }}
                    ], function(err, items) {
                        items.toArray(function(err, result) {
                            var failResults = 0;
                            result.forEach(function(elem) {
                                if (elem.cioBalance != 0) {
                                    failResults += 1;
                                }
                            });
                        resolve(failResults);
                        })
                    })
                    }
                    simplePipeline(db, function() {
                        client.close();
                      });
                    });
            
                })
            }
            }