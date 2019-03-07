const helper = require('../helper');

module.exports = {
    newBaseline: function(data) {
        return new Promise(resolve => {
            data = JSON.parse(data)
            let baselineData = helper.makeBulk(data, 'govs_1', 'constituencies');
           resolve (helper.indexBulk(baselineData))
            // resolve(baselineData);
        }); 
    }
};
