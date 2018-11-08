var ObjectId = require('mongodb').ObjectID,
      program = require('commander');

program.option('-S, --session <session>', 'add session').parse(process.argv);
var session = program.session.toString();
module.exports = {
    sessionId: new ObjectId(session)
}