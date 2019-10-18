const mongoose = require('mongoose');
      Product = mongoose.model('Product');

module.exports = {
    retrive_all: function(req, res) {
    	Product.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    retrive_id :function(req, res){
        Product.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
    },
    create :function(req, res){
        const p = Product.create(req.body)
        // Product.findOneAndUpdate({_id: p._id}, {productid: +1})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update : function(req, res){
        Product.findOneAndUpdate({_id : req.params.id} , req.body, { runValidators: true })
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete : function(req, res){
        Product.deleteOne({_id : req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}