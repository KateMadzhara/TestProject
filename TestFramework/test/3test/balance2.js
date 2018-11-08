var MongoClient = require('mongodb').MongoClient,
    config = require('../config.json'),
    util = require('../util');

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
            MongoClient.connect(config.url, { useNewUrlParser: true }, function(err, client) {
                if (err) { 
                    throw new Error("Something not good happened");
                }
                var db = client.db(config.dbName),
                    col = db.collection('l1cio')
                    
                col.aggregate([
                        {$match: {"_id.session": util.sessionId}},
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
                        if (err) { 
                            throw new Error("Something not good happened"); 
                        }
                        items.toArray(function(err, result) {
                            if (err) { 
                                throw new Error("Something not good happened");
                            }
                            resolve(result.every(elem => parseInt(elem.cioBalance) !== 0));
                            client.close();
                        });
                    });
                });
            })
        }
    }