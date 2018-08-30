var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeesSchema = new Schema({
    'EmployeeID': Number,
    'FirstName': String,
    'LastName': String,
    'Title': String,
    'TitleOfCourtesy': String,
    'BirthDate': Date,
    'HireDate': Date,
    'Address': {
        'Street': String,
        'City': String,
        'Region': String,
        'PostalCode': String,
        'Country': String,
        'Phone': String
    },
    'Notes': String,
    'ReportsTo': Number,
    'TerritoryIDs' : [Number],
    '_id': {
        type: Schema.Types.ObjectId,
        ref: '{ref}'
    }
});

var employeesModel = mongoose.model('employees', employeesSchema);

module.exports = {

    /**
     * employeeController.list()
     */
    list: function (req, res) {
        employeesModel.find(function (err, employees) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee.',
                    error: err
                });
            }
            return res.json(employees);
        });
    },

    /**
     * employeeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        employeesModel.findOne({_id: id}, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee.',
                    error: err
                });
            }
            if (!employee) {
                return res.status(404).json({
                    message: 'No such employee'
                });
            }
            return res.json(employee);
        });
    },

    /**
     * employeeController.create()
     */
    create: function (req, res) {
        var employee = new employeesModel({
            EmployeeID : req.body.EmployeeID,
            LastName : req.body.LastName,
            FirstName : req.body.CompanyName,
            Title : req.body.ContactName,
            TitleOfCourtesy : req.body.ContactTitle,
            BirthDate : req.body.Country,
            HireDate : req.body.CustomerID,
            Address : req.body.Address,
            Notes : req.body.Notes,
            ReportsTo : req.body.ReportsTo,
            TerritoryIDs : req.body.TerritoryIDs,
            _id : req.body._id
        });

        employee.save(function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating employee',
                    error: err
                });
            }
            return res.status(201).json(employee);
        });
    },

    /**
     * employeeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        employeesModel.findOne({_id: id}, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee',
                    error: err
                });
            }
            if (!employee) {
                return res.status(404).json({
                    message: 'No such employee'
                });
            }

            employee.Address = req.body.Address ? req.body.Address : employee.Address;
            employee.City = req.body.City ? req.body.City : employee.City;
            employee.CompanyName = req.body.CompanyName ? req.body.CompanyName : employee.CompanyName;
            employee.ContactName = req.body.ContactName ? req.body.ContactName : employee.ContactName;
            employee.ContactTitle = req.body.ContactTitle ? req.body.ContactTitle : employee.ContactTitle;
            employee.Country = req.body.Country ? req.body.Country : employee.Country;
            employee.CustomerID = req.body.CustomerID ? req.body.CustomerID : employee.CustomerID;
            employee.Fax = req.body.Fax ? req.body.Fax : employee.Fax;
            employee.Phone = req.body.Phone ? req.body.Phone : employee.Phone;
            employee.PostalCode = req.body.PostalCode ? req.body.PostalCode : employee.PostalCode;
            employee.Region = req.body.Region ? req.body.Region : employee.Region;
            employee._id = req.body._id ? req.body._id : employee._id;
            employee.field11 = req.body.field11 ? req.body.field11 : employee.field11;

            employee.save(function (err, employee) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating employee.',
                        error: err
                    });
                }

                return res.json(employee);
            });
        });
    },

    /**
     * employeeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        employeesModel.findByIdAndRemove(id, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the employee.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
