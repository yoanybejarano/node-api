var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var regionsSchema = new Schema({
	'RegionDescription' : String,
	'RegionID' : Number,
	'_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

var regionsModel = mongoose.model('regions', regionsSchema);


/**
 * regionsController.js
 *
 * @description :: Server-side logic for managing regionss.
 */

module.exports = module.exports = {

    /**
     * regionsController.list()
     */
    list: function (req, res) {
        regionsModel.find(function (err, regionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting regions.',
                    error: err
                });
            }
            return res.json(regionss);
        });
    },

    /**
     * regionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        regionsModel.findOne({_id: id}, function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting regions.',
                    error: err
                });
            }
            if (!regions) {
                return res.status(404).json({
                    message: 'No such regions'
                });
            }
            return res.json(regions);
        });
    },

    /**
     * regionsController.create()
     */
    create: function (req, res) {
        var regions = new regionsModel({
			RegionDescription : req.body.RegionDescription,
			RegionID : req.body.RegionID,
			_id : req.body._id

        });

        regions.save(function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating regions',
                    error: err
                });
            }
            return res.status(201).json(regions);
        });
    },

    /**
     * regionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        regionsModel.findOne({_id: id}, function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting regions',
                    error: err
                });
            }
            if (!regions) {
                return res.status(404).json({
                    message: 'No such regions'
                });
            }

            regions.RegionDescription = req.body.RegionDescription ? req.body.RegionDescription : regions.RegionDescription;
			regions.RegionID = req.body.RegionID ? req.body.RegionID : regions.RegionID;
			regions._id = req.body._id ? req.body._id : regions._id;
			
            regions.save(function (err, regions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating regions.',
                        error: err
                    });
                }

                return res.json(regions);
            });
        });
    },

    /**
     * regionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        regionsModel.findByIdAndRemove(id, function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the regions.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
