var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var employeeTerritoriesSchema = new Schema({
	'EmployeeID' : Number,
	'TerritoryID' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
}, { collection: 'employeeTerritories' });

var employeeTerritoriesModel = mongoose.model('employeeTerritories', employeeTerritoriesSchema);

/**
 * employeeTerritoriesController.js
 *
 * @description :: Server-side logic for managing employeeTerritoriess.
 */
module.exports = {

    /**
     * employeeTerritoriesController.list()
     */
    list: function (req, res) {
        employeeTerritoriesModel.find(function (err, employeeTerritoriess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employeeTerritories.',
                    error: err
                });
            }
            return res.json(employeeTerritoriess);
        });
    },

    /**
     * employeeTerritoriesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        employeeTerritoriesModel.findOne({_id: id}, function (err, employeeTerritories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employeeTerritories.',
                    error: err
                });
            }
            if (!employeeTerritories) {
                return res.status(404).json({
                    message: 'No such employeeTerritories'
                });
            }
            return res.json(employeeTerritories);
        });
    },

    /**
     * employeeTerritoriesController.create()
     */
    create: function (req, res) {
        var employeeTerritories = new employeeTerritoriesModel({
			EmployeeID : req.body.EmployeeID,
			TerritoryID : req.body.TerritoryID,
			_id : req.body._id

        });

        employeeTerritories.save(function (err, employeeTerritories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating employeeTerritories',
                    error: err
                });
            }
            return res.status(201).json(employeeTerritories);
        });
    },

    /**
     * employeeTerritoriesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        employeeTerritoriesModel.findOne({_id: id}, function (err, employeeTerritories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employeeTerritories',
                    error: err
                });
            }
            if (!employeeTerritories) {
                return res.status(404).json({
                    message: 'No such employeeTerritories'
                });
            }

            employeeTerritories.EmployeeID = req.body.EmployeeID ? req.body.EmployeeID : employeeTerritories.EmployeeID;
			employeeTerritories.TerritoryID = req.body.TerritoryID ? req.body.TerritoryID : employeeTerritories.TerritoryID;
			employeeTerritories._id = req.body._id ? req.body._id : employeeTerritories._id;
			
            employeeTerritories.save(function (err, employeeTerritories) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating employeeTerritories.',
                        error: err
                    });
                }

                return res.json(employeeTerritories);
            });
        });
    },

    /**
     * employeeTerritoriesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        employeeTerritoriesModel.findByIdAndRemove(id, function (err, employeeTerritories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the employeeTerritories.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
