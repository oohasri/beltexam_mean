const mongoose = require('mongoose');
      Product = mongoose.model('Product');
      products = require('../controllers/controllers.js');

module.exports = function(app) {
    app.get('/products', (req, res) => {
        products.retrive_all(req, res);
    });
    app.post('/products/new', (req, res) => {
        products.create(req, res);
    });
    app.put('/product/update/:id', (req, res) => {
        products.update(req, res);
    });
    app.get('/product/edit/:id', (req, res) => {
        products.retrive_id(req, res);
    });
    app.delete('/product/delete/:id', (req, res) =>{
        products.delete(req, res);
    });
}