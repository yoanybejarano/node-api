var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderDetailsSchema = new Schema({
	'Discount' : Number,
	'OrderID' : Number,
	'ProductID' : Number,
	'Quantity' : Number,
	'UnitPrice' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
}, { collection: 'orderDetails' });

var orderDetailsModel = mongoose.model('orderDetails', orderDetailsSchema);

/**
 * orderDetailsController.js
 *
 * @description :: Server-side logic for managing orderDetailss.
 */

module.exports = {

    /**
     * orderDetailsController.list()
     */
    list: function (req, res) {
        orderDetailsModel.find(function (err, orderDetailss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderDetails.',
                    error: err
                });
            }
            return res.json(orderDetailss);
        });
    },

    /**
     * orderDetailsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        orderDetailsModel.findOne({_id: id}, function (err, orderDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderDetails.',
                    error: err
                });
            }
            if (!orderDetails) {
                return res.status(404).json({
                    message: 'No such orderDetails'
                });
            }
            return res.json(orderDetails);
        });
    },

    /**
     * orderDetailsController.create()
     */
    create: function (req, res) {
        var orderDetails = new orderDetailsModel({
			Discount : req.body.Discount,
			OrderID : req.body.OrderID,
			ProductID : req.body.ProductID,
			Quantity : req.body.Quantity,
			UnitPrice : req.body.UnitPrice,
			_id : req.body._id

        });

        orderDetails.save(function (err, orderDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orderDetails',
                    error: err
                });
            }
            return res.status(201).json(orderDetails);
        });
    },

    /**
     * orderDetailsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        orderDetailsModel.findOne({_id: id}, function (err, orderDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderDetails',
                    error: err
                });
            }
            if (!orderDetails) {
                return res.status(404).json({
                    message: 'No such orderDetails'
                });
            }

            orderDetails.Discount = req.body.Discount ? req.body.Discount : orderDetails.Discount;
			orderDetails.OrderID = req.body.OrderID ? req.body.OrderID : orderDetails.OrderID;
			orderDetails.ProductID = req.body.ProductID ? req.body.ProductID : orderDetails.ProductID;
			orderDetails.Quantity = req.body.Quantity ? req.body.Quantity : orderDetails.Quantity;
			orderDetails.UnitPrice = req.body.UnitPrice ? req.body.UnitPrice : orderDetails.UnitPrice;
			orderDetails._id = req.body._id ? req.body._id : orderDetails._id;
			
            orderDetails.save(function (err, orderDetails) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orderDetails.',
                        error: err
                    });
                }

                return res.json(orderDetails);
            });
        });
    },

    /**
     * orderDetailsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        orderDetailsModel.findByIdAndRemove(id, function (err, orderDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orderDetails.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
