const helper = require('../helper');

module.exports = {
    compare: function(data) {
        return new Promise(resolve => {
            data = JSON.parse(data)
            let res = helper.compareData(data._score);          
            resolve(res);
        }); 
    }
};
