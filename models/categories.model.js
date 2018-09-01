var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    'CategoryID': Number,
    'CategoryName': String,
    'Description': String,
    'Picture': String,
    '_id': {
        type: Schema.Types.ObjectId,
        ref: '{ref}'
    },
    'field4': String,
    'field5': String,
    'field6': String,
    'field7': String
});

var categoriesModel = mongoose.model('categories', categoriesSchema);

//module.exports = categoriesModel;

module.exports = {

    /**
     * categoriesController.list()
     */
    list: function (req, res) {
        categoriesModel.find(function (err, categoriess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories.',
                    error: err
                });
            }
            return res.json(categoriess);
        });
    },

    /**
     * categoriesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        categoriesModel.findOne({ _id: id }, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories.',
                    error: err
                });
            }
            if (!categories) {
                return res.status(404).json({
                    message: 'No such categories'
                });
            }
            return res.json(categories);
        });
    },

    /**
     * categoriesController.create()
     */
    create: function (req, res) {
        var categories = new categoriesModel({
            CategoryID: req.body.CategoryID,
            CategoryName: req.body.CategoryName,
            Description: req.body.Description,
            Picture: req.body.Picture,
            _id: req.body._id,
            field4: req.body.field4,
            field5: req.body.field5,
            field6: req.body.field6,
            field7: req.body.field7

        });

        categories.save(function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating categories',
                    error: err
                });
            }
            return res.status(201).json(categories);
        });
    },

    /**
     * categoriesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        categoriesModel.findOne({ _id: id }, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories',
                    error: err
                });
            }
            if (!categories) {
                return res.status(404).json({
                    message: 'No such categories'
                });
            }

            categories.CategoryID = req.body.CategoryID ? req.body.CategoryID : categories.CategoryID;
            categories.CategoryName = req.body.CategoryName ? req.body.CategoryName : categories.CategoryName;
            categories.Description = req.body.Description ? req.body.Description : categories.Description;
            categories.Picture = req.body.Picture ? req.body.Picture : categories.Picture;
            categories._id = req.body._id ? req.body._id : categories._id;
            categories.field4 = req.body.field4 ? req.body.field4 : categories.field4;
            categories.field5 = req.body.field5 ? req.body.field5 : categories.field5;
            categories.field6 = req.body.field6 ? req.body.field6 : categories.field6;
            categories.field7 = req.body.field7 ? req.body.field7 : categories.field7;

            categories.save(function (err, categories) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating categories.',
                        error: err
                    });
                }

                return res.json(categories);
            });
        });
    },

    /**
     * categoriesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        categoriesModel.findByIdAndRemove(id, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the categories.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
