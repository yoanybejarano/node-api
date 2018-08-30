var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customersSchema = new Schema({
	'Address' : String,
	'City' : String,
	'CompanyName' : String,
	'ContactName' : String,
	'ContactTitle' : String,
	'Country' : String,
	'CustomerID' : String,
	'Fax' : String,
	'Phone' : String,
	'PostalCode' : Number,
	'Region' : String,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	},
	'field11' : String
});

var customerModel = mongoose.model('customers', customersSchema);

module.exports = {

    /**
     * customersController.list()
     */
    list: function (req, res) {
        customerModel.find(function (err, customerss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customers.',
                    error: err
                });
            }
            return res.json(customerss);
        });
    },

    /**
     * customersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customers.',
                    error: err
                });
            }
            if (!customers) {
                return res.status(404).json({
                    message: 'No such customers'
                });
            }
            return res.json(customers);
        });
    },

    /**
     * customersController.create()
     */
    create: function (req, res) {
        var customers = new customerModel({
            Address : req.body.Address,
            City : req.body.City,
            CompanyName : req.body.CompanyName,
            ContactName : req.body.ContactName,
            ContactTitle : req.body.ContactTitle,
            Country : req.body.Country,
            CustomerID : req.body.CustomerID,
            Fax : req.body.Fax,
            Phone : req.body.Phone,
            PostalCode : req.body.PostalCode,
            Region : req.body.Region,
            _id : req.body._id,
            field11 : req.body.field11

        });

        customers.save(function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating customers',
                    error: err
                });
            }
            return res.status(201).json(customers);
        });
    },

    /**
     * customersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customers',
                    error: err
                });
            }
            if (!customers) {
                return res.status(404).json({
                    message: 'No such customers'
                });
            }

            customers.Address = req.body.Address ? req.body.Address : customers.Address;
            customers.City = req.body.City ? req.body.City : customers.City;
            customers.CompanyName = req.body.CompanyName ? req.body.CompanyName : customers.CompanyName;
            customers.ContactName = req.body.ContactName ? req.body.ContactName : customers.ContactName;
            customers.ContactTitle = req.body.ContactTitle ? req.body.ContactTitle : customers.ContactTitle;
            customers.Country = req.body.Country ? req.body.Country : customers.Country;
            customers.CustomerID = req.body.CustomerID ? req.body.CustomerID : customers.CustomerID;
            customers.Fax = req.body.Fax ? req.body.Fax : customers.Fax;
            customers.Phone = req.body.Phone ? req.body.Phone : customers.Phone;
            customers.PostalCode = req.body.PostalCode ? req.body.PostalCode : customers.PostalCode;
            customers.Region = req.body.Region ? req.body.Region : customers.Region;
            customers._id = req.body._id ? req.body._id : customers._id;
            customers.field11 = req.body.field11 ? req.body.field11 : customers.field11;

            customers.save(function (err, customers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating customers.',
                        error: err
                    });
                }

                return res.json(customers);
            });
        });
    },

    /**
     * customersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        customerModel.findByIdAndRemove(id, function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the customers.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
