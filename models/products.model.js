var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productsSchema = new Schema({
	'CategoryID' : Number,
	'Discontinued' : Number,
	'ProductID' : Number,
	'ProductName' : String,
	'QuantityPerUnit' : String,
	'ReorderLevel' : Number,
	'SupplierID' : Number,
	'UnitPrice' : Number,
	'UnitsInStock' : Number,
	'UnitsOnOrder' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

var productsModel = mongoose.model('products', productsSchema);

/**
 * productsController.js
 *
 * @description :: Server-side logic for managing productss.
 */
module.exports = {

    /**
     * productsController.list()
     */
    list: function (req, res) {
        productsModel.find(function (err, productss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products.',
                    error: err
                });
            }
            return res.json(productss);
        });
    },

    /**
     * productsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        productsModel.findOne({_id: id}, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products.',
                    error: err
                });
            }
            if (!products) {
                return res.status(404).json({
                    message: 'No such products'
                });
            }
            return res.json(products);
        });
    },

    /**
     * productsController.create()
     */
    create: function (req, res) {
        var products = new productsModel({
			CategoryID : req.body.CategoryID,
			Discontinued : req.body.Discontinued,
			ProductID : req.body.ProductID,
			ProductName : req.body.ProductName,
			QuantityPerUnit : req.body.QuantityPerUnit,
			ReorderLevel : req.body.ReorderLevel,
			SupplierID : req.body.SupplierID,
			UnitPrice : req.body.UnitPrice,
			UnitsInStock : req.body.UnitsInStock,
			UnitsOnOrder : req.body.UnitsOnOrder,
			_id : req.body._id

        });

        products.save(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating products',
                    error: err
                });
            }
            return res.status(201).json(products);
        });
    },

    /**
     * productsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        productsModel.findOne({_id: id}, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products',
                    error: err
                });
            }
            if (!products) {
                return res.status(404).json({
                    message: 'No such products'
                });
            }

            products.CategoryID = req.body.CategoryID ? req.body.CategoryID : products.CategoryID;
			products.Discontinued = req.body.Discontinued ? req.body.Discontinued : products.Discontinued;
			products.ProductID = req.body.ProductID ? req.body.ProductID : products.ProductID;
			products.ProductName = req.body.ProductName ? req.body.ProductName : products.ProductName;
			products.QuantityPerUnit = req.body.QuantityPerUnit ? req.body.QuantityPerUnit : products.QuantityPerUnit;
			products.ReorderLevel = req.body.ReorderLevel ? req.body.ReorderLevel : products.ReorderLevel;
			products.SupplierID = req.body.SupplierID ? req.body.SupplierID : products.SupplierID;
			products.UnitPrice = req.body.UnitPrice ? req.body.UnitPrice : products.UnitPrice;
			products.UnitsInStock = req.body.UnitsInStock ? req.body.UnitsInStock : products.UnitsInStock;
			products.UnitsOnOrder = req.body.UnitsOnOrder ? req.body.UnitsOnOrder : products.UnitsOnOrder;
			products._id = req.body._id ? req.body._id : products._id;
			
            products.save(function (err, products) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating products.',
                        error: err
                    });
                }

                return res.json(products);
            });
        });
    },

    /**
     * productsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        productsModel.findByIdAndRemove(id, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the products.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
