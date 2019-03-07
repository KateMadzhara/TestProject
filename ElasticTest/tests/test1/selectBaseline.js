const panoSearch = require('./search_file.json');
const helper = require('../helper');

module.exports = {
    newBaseline: function(data, type, index) {
        return new Promise(resolve => {
            let result = helper.search(data, type, index)
           
            resolve(result);
        }); 
    }
};
