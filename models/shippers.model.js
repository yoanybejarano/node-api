var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var shippersSchema = new Schema({
	'CompanyName' : String,
	'Phone' : String,
	'ShipperID' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

var shippersModel = mongoose.model('shippers', shippersSchema);


/**
 * shippersController.js
 *
 * @description :: Server-side logic for managing shipperss.
 */
module.exports = {

    /**
     * shippersController.list()
     */
    list: function (req, res) {
        shippersModel.find(function (err, shipperss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shippers.',
                    error: err
                });
            }
            return res.json(shipperss);
        });
    },

    /**
     * shippersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        shippersModel.findOne({_id: id}, function (err, shippers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shippers.',
                    error: err
                });
            }
            if (!shippers) {
                return res.status(404).json({
                    message: 'No such shippers'
                });
            }
            return res.json(shippers);
        });
    },

    /**
     * shippersController.create()
     */
    create: function (req, res) {
        var shippers = new shippersModel({
			CompanyName : req.body.CompanyName,
			Phone : req.body.Phone,
			ShipperID : req.body.ShipperID,
			_id : req.body._id

        });

        shippers.save(function (err, shippers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating shippers',
                    error: err
                });
            }
            return res.status(201).json(shippers);
        });
    },

    /**
     * shippersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        shippersModel.findOne({_id: id}, function (err, shippers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shippers',
                    error: err
                });
            }
            if (!shippers) {
                return res.status(404).json({
                    message: 'No such shippers'
                });
            }

            shippers.CompanyName = req.body.CompanyName ? req.body.CompanyName : shippers.CompanyName;
			shippers.Phone = req.body.Phone ? req.body.Phone : shippers.Phone;
			shippers.ShipperID = req.body.ShipperID ? req.body.ShipperID : shippers.ShipperID;
			shippers._id = req.body._id ? req.body._id : shippers._id;
			
            shippers.save(function (err, shippers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating shippers.',
                        error: err
                    });
                }

                return res.json(shippers);
            });
        });
    },

    /**
     * shippersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        shippersModel.findByIdAndRemove(id, function (err, shippers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the shippers.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
