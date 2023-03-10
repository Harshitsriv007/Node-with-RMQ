const productController = require('./productController.js');

module.exports = function (handleData) {
    var product = new productController(handleData);
    console.log(product);
    if (error) {
        throw error;
    }
    return true;
}
