
var ObjectId = require('mongodb').ObjectID;
module.exports = {
    // Connection url
    url: 'mongodb://localhost.net:27017',
    // Database Name
    dbName: 'test',
    //session ID
    sessionId: new ObjectId("")
}