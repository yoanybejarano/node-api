var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var territoriesSchema = new Schema({
	'RegionID' : Number,
	'TerritoryDescription' : String,
	'TerritoryID' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

var territoriesModel = mongoose.model('territories', territoriesSchema);

/**
 * territoriesController.js
 *
 * @description :: Server-side logic for managing territoriess.
 */
module.exports = {

    /**
     * territoriesController.list()
     */
    list: function (req, res) {
        territoriesModel.find(function (err, territoriess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting territories.',
                    error: err
                });
            }
            return res.json(territoriess);
        });
    },

    /**
     * territoriesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        territoriesModel.findOne({_id: id}, function (err, territories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting territories.',
                    error: err
                });
            }
            if (!territories) {
                return res.status(404).json({
                    message: 'No such territories'
                });
            }
            return res.json(territories);
        });
    },

    /**
     * territoriesController.create()
     */
    create: function (req, res) {
        var territories = new territoriesModel({
			RegionID : req.body.RegionID,
			TerritoryDescription : req.body.TerritoryDescription,
			TerritoryID : req.body.TerritoryID,
			_id : req.body._id

        });

        territories.save(function (err, territories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating territories',
                    error: err
                });
            }
            return res.status(201).json(territories);
        });
    },

    /**
     * territoriesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        territoriesModel.findOne({_id: id}, function (err, territories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting territories',
                    error: err
                });
            }
            if (!territories) {
                return res.status(404).json({
                    message: 'No such territories'
                });
            }

            territories.RegionID = req.body.RegionID ? req.body.RegionID : territories.RegionID;
			territories.TerritoryDescription = req.body.TerritoryDescription ? req.body.TerritoryDescription : territories.TerritoryDescription;
			territories.TerritoryID = req.body.TerritoryID ? req.body.TerritoryID : territories.TerritoryID;
			territories._id = req.body._id ? req.body._id : territories._id;
			
            territories.save(function (err, territories) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating territories.',
                        error: err
                    });
                }

                return res.json(territories);
            });
        });
    },

    /**
     * territoriesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        territoriesModel.findByIdAndRemove(id, function (err, territories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the territories.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
