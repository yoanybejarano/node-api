var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var suppliersSchema = new Schema({
	'Address' : String,
	'City' : String,
	'CompanyName' : String,
	'ContactName' : String,
	'ContactTitle' : String,
	'Country' : String,
	'Fax' : String,
	'HomePage' : String,
	'Phone' : String,
	'PostalCode' : String,
	'Region' : String,
	'SupplierID' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	},
	'field12' : String
});

var suppliersModel = mongoose.model('suppliers', suppliersSchema);


/**
 * suppliersController.js
 *
 * @description :: Server-side logic for managing supplierss.
 */
module.exports = {

    /**
     * suppliersController.list()
     */
    list: function (req, res) {
        suppliersModel.find(function (err, supplierss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting suppliers.',
                    error: err
                });
            }
            return res.json(supplierss);
        });
    },

    /**
     * suppliersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        suppliersModel.findOne({_id: id}, function (err, suppliers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting suppliers.',
                    error: err
                });
            }
            if (!suppliers) {
                return res.status(404).json({
                    message: 'No such suppliers'
                });
            }
            return res.json(suppliers);
        });
    },

    /**
     * suppliersController.create()
     */
    create: function (req, res) {
        var suppliers = new suppliersModel({
			Address : req.body.Address,
			City : req.body.City,
			CompanyName : req.body.CompanyName,
			ContactName : req.body.ContactName,
			ContactTitle : req.body.ContactTitle,
			Country : req.body.Country,
			Fax : req.body.Fax,
			HomePage : req.body.HomePage,
			Phone : req.body.Phone,
			PostalCode : req.body.PostalCode,
			Region : req.body.Region,
			SupplierID : req.body.SupplierID,
			_id : req.body._id,
			field12 : req.body.field12

        });

        suppliers.save(function (err, suppliers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating suppliers',
                    error: err
                });
            }
            return res.status(201).json(suppliers);
        });
    },

    /**
     * suppliersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        suppliersModel.findOne({_id: id}, function (err, suppliers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting suppliers',
                    error: err
                });
            }
            if (!suppliers) {
                return res.status(404).json({
                    message: 'No such suppliers'
                });
            }

            suppliers.Address = req.body.Address ? req.body.Address : suppliers.Address;
			suppliers.City = req.body.City ? req.body.City : suppliers.City;
			suppliers.CompanyName = req.body.CompanyName ? req.body.CompanyName : suppliers.CompanyName;
			suppliers.ContactName = req.body.ContactName ? req.body.ContactName : suppliers.ContactName;
			suppliers.ContactTitle = req.body.ContactTitle ? req.body.ContactTitle : suppliers.ContactTitle;
			suppliers.Country = req.body.Country ? req.body.Country : suppliers.Country;
			suppliers.Fax = req.body.Fax ? req.body.Fax : suppliers.Fax;
			suppliers.HomePage = req.body.HomePage ? req.body.HomePage : suppliers.HomePage;
			suppliers.Phone = req.body.Phone ? req.body.Phone : suppliers.Phone;
			suppliers.PostalCode = req.body.PostalCode ? req.body.PostalCode : suppliers.PostalCode;
			suppliers.Region = req.body.Region ? req.body.Region : suppliers.Region;
			suppliers.SupplierID = req.body.SupplierID ? req.body.SupplierID : suppliers.SupplierID;
			suppliers._id = req.body._id ? req.body._id : suppliers._id;
			suppliers.field12 = req.body.field12 ? req.body.field12 : suppliers.field12;
			
            suppliers.save(function (err, suppliers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating suppliers.',
                        error: err
                    });
                }

                return res.json(suppliers);
            });
        });
    },

    /**
     * suppliersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        suppliersModel.findByIdAndRemove(id, function (err, suppliers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the suppliers.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
