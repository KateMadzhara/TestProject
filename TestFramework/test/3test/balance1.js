var MongoClient = require("mongodb").MongoClient,
    config = require("../config.json"),
    util = require("../util");

module.exports = {
    test: function() {
        return new Promise(resolve => {
            // Connect using MongoClient
            MongoClient.connect(config.url, {useNewUrlParser: true}, function(err, client) {
                // if (err) { 
                //     throw new Error("Something not good happened"); 
                // }
                var db = client.db(config.dbName),
                    col = db.collection("l1cio");
                    
                col.aggregate([
                    {$match: {"_id.session": util.sessionId}},
                    {$project: {balance: "$value.trade.Balance"}},
                    {$limit: 1}
                ], function(err, items) {
                    // if (err) { 
                    //     throw new Error("Something not good happened"); 
                    // }
                    items.toArray(function(err, result) {
                        // if (err) { 
                        //     throw new Error("Something not good happened"); 
                        // }
                        resolve(result.some(elem => parseInt(elem.balance) > 0));
                        client.close();
                    });
                });
            });
        });
    }
};