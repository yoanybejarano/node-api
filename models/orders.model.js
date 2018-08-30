var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
    'CustomerID': String,
    'EmployeeID': Number,
    'Freight': Number,
    'OrderDate': String,
    'OrderID': Number,
    'RequiredDate': String,
    'ShipAddress': String,
    'ShipCity': String,
    'ShipCountry': String,
    'ShipName': String,
    'ShipPostalCode': Number,
    'ShipRegion': String,
    'ShipVia': Number,
    'ShippedDate': String,
    '_id': {
        type: Schema.Types.ObjectId,
        ref: '{ref}'
    },
    'field14': String
});

var ordersModel = mongoose.model('orders', ordersSchema);

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {

    /**
     * ordersController.list()
     */
    list: function (req, res) {
        ordersModel.find(function (err, orderss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }
            return res.json(orderss);
        });
    },

    /**
     * ordersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ordersModel.findOne({ _id: id }, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }
            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }
            return res.json(orders);
        });
    },

    /**
     * ordersController.create()
     */
    create: function (req, res) {
        var orders = new ordersModel({
            CustomerID: req.body.CustomerID,
            EmployeeID: req.body.EmployeeID,
            Freight: req.body.Freight,
            OrderDate: req.body.OrderDate,
            OrderID: req.body.OrderID,
            RequiredDate: req.body.RequiredDate,
            ShipAddress: req.body.ShipAddress,
            ShipCity: req.body.ShipCity,
            ShipCountry: req.body.ShipCountry,
            ShipName: req.body.ShipName,
            ShipPostalCode: req.body.ShipPostalCode,
            ShipRegion: req.body.ShipRegion,
            ShipVia: req.body.ShipVia,
            ShippedDate: req.body.ShippedDate,
            _id: req.body._id,
            field14: req.body.field14

        });

        orders.save(function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orders',
                    error: err
                });
            }
            return res.status(201).json(orders);
        });
    },

    /**
     * ordersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ordersModel.findOne({ _id: id }, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders',
                    error: err
                });
            }
            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }

            orders.CustomerID = req.body.CustomerID ? req.body.CustomerID : orders.CustomerID;
            orders.EmployeeID = req.body.EmployeeID ? req.body.EmployeeID : orders.EmployeeID;
            orders.Freight = req.body.Freight ? req.body.Freight : orders.Freight;
            orders.OrderDate = req.body.OrderDate ? req.body.OrderDate : orders.OrderDate;
            orders.OrderID = req.body.OrderID ? req.body.OrderID : orders.OrderID;
            orders.RequiredDate = req.body.RequiredDate ? req.body.RequiredDate : orders.RequiredDate;
            orders.ShipAddress = req.body.ShipAddress ? req.body.ShipAddress : orders.ShipAddress;
            orders.ShipCity = req.body.ShipCity ? req.body.ShipCity : orders.ShipCity;
            orders.ShipCountry = req.body.ShipCountry ? req.body.ShipCountry : orders.ShipCountry;
            orders.ShipName = req.body.ShipName ? req.body.ShipName : orders.ShipName;
            orders.ShipPostalCode = req.body.ShipPostalCode ? req.body.ShipPostalCode : orders.ShipPostalCode;
            orders.ShipRegion = req.body.ShipRegion ? req.body.ShipRegion : orders.ShipRegion;
            orders.ShipVia = req.body.ShipVia ? req.body.ShipVia : orders.ShipVia;
            orders.ShippedDate = req.body.ShippedDate ? req.body.ShippedDate : orders.ShippedDate;
            orders._id = req.body._id ? req.body._id : orders._id;
            orders.field14 = req.body.field14 ? req.body.field14 : orders.field14;

            orders.save(function (err, orders) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orders.',
                        error: err
                    });
                }

                return res.json(orders);
            });
        });
    },

    /**
     * ordersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ordersModel.findByIdAndRemove(id, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orders.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

