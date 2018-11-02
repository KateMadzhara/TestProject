var MongoClient = require('mongodb').MongoClient,
    config = require('../mongo.config');

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
            MongoClient.connect(config.url, { useNewUrlParser: true }, function(err, client) {
                var db = client.db(config.dbName);
                function simplePipeline(db, callback) {
                    var col = db.collection('l1cio');
                    col.aggregate([
                        {$match: {
                            "_id.session": config.sessionId, 
                            "value.trade.Balance": "-1"
                        }},
                        {$project: {
                            accountNumber: "$value.trade.AccountNumber",
                            balance: "$value.trade.Balance",           
                            balanceNpds: {$max: "$valuenpds.value.data.Balance"},
                            isBalanceEq: {$eq: ["$balance", {$max: "$npds.value.data.Balance"}]}
                        }},
                        {$match: {
                            isBalanceEq: false}}        
                    ], function(err, items) {
                        items.toArray(function(err, result) {
                            var failResults = 0;
                            if (result.length > 0) {
                                result.forEach(function(elem) {
                                    failResults += 1;
                                })
                            }
                            resolve(failResults);
                        });
                    });
                }
                simplePipeline(db, function() {
                    client.close();
                });
            });
        });
    }
};