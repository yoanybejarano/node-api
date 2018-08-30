var express = require('express');
var categories = require('../models/categories.model');

module.exports = function (app) {
    app.route("/categories")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        /**
         * @api {get} /categories List the categories
         * @apiGroup Categories
         * @apiSuccess {Object[]} categories Category list
         * @apiSuccess {Number} categories.CategoryID Category id
         * @apiSuccess {String} categories.CategoryName Category name
         * @apiSuccess {String} categories.Description Category description
         * @apiSuccess {String} categories.Picture Category picture
         * @apiSuccess {String} categories.field4 Category field4
         * @apiSuccess {String} categories.field5 Category field5
         * @apiSuccess {String} categories.field6 Category field6
         * @apiSuccess {String} categories.field7 Category field7
         * @apiSuccessExample {json} Success
         * 
         * HTTP/1.1 200 OK
         *  [{           
         *    "_id" : ObjectId("5b804d0060012aa55de58eb3"),
         *    "CategoryID" : 1,
         *    "CategoryName" : "Beverages",
         *    "Description" : "Soft drinks",
         *    "Picture" : "coffees",
         *    "field4" : "teas",
         *    "field5" : "beers",
         *    "field6" : "and ales"
         *  }]
         * @apiErrorExample {json} List error
         *
           HTTP/1.1 412 Precondition Failed
         */
        .get((req, res) => {
            // "/categories": List categories
            categories.list(req, res);
        })
        /**
         * @api {post} /categories Register new category
         * @apiGroup Categories
         * @apiSuccess {String} id Category id
         * @apiSuccess {Number} CategoryID Category id
         * @apiSuccess {String} CategoryName Category name
         * @apiSuccess {String} Description Category description
         * @apiSuccess {String} Picture Category picture
         * @apiSuccess {String} field4 Category field4
         * @apiSuccess {String} field5 Category field5
         * @apiSuccess {String} field6 Category field6
         * @apiSuccess {String} field7 Category field7
         * @apiSuccessExample {json} Success
         *
         * HTTP/1.1 200 OK
         *  [{
         *    "_id" : ObjectId("5b804d0060012aa55de58eb3"),
         *    "CategoryID" : 1,
         *    "CategoryName" : "Beverages",
         *    "Description" : "Soft drinks",
         *    "Picture" : "coffees",
         *    "field4" : "teas",
         *    "field5" : "beers",
         *    "field6" : "and ales"
         *  }]
         * @apiErrorExample {json} List error
         *
         HTTP/1.1 412 Precondition Failed
         */
        .post((req, res) => {
            // "/categories": Save new category
            categories.create(req, res);
        });

    app.route("/categories/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        /**
         * @api {get} /categories/:id Get a category
         * @apiGroup Categories
         * @apiParam {id} id Category id
         * @apiParam {Number} categories.CategoryID Category id
         * @apiParam {String} categories.CategoryName Category name
         * @apiParam {String} categories.Description Category description
         * @apiParam {String} categories.Picture Category picture
         * @apiParam {String} categories.field4 Category field4
         * @apiParam {String} categories.field5 Category field5
         * @apiParam {String} categories.field6 Category field6
         * @apiParam {String} categories.field7 Category field7
         * @apiParamExample {json} Input
         *
         * HTTP/1.1 200 OK
         *  [{
         *    "_id" : ObjectId("5b804d0060012aa55de58eb3"),
         *    "CategoryID" : 1,
         *    "CategoryName" : "Beverages",
         *    "Description" : "Soft drinks",
         *    "Picture" : "coffees",
         *    "field4" : "teas",
         *    "field5" : "beers",
         *    "field6" : "and ales"
         *  }]
         *
         * @apiSuccessExample {json} Success
         *   HTTP/1.1 204 No Content
         * @apiErrorExample {json} Task not found error
         *   HTTP/1.1 404 Not Found
         * @apiErrorExample {json} Find error
         *   HTTP/1.1 412 Precondition Failed
         */
        .get((req, res) => {
            // "/categories/1": Find a category

            categories.show(req, res);

        })
        /**
         * @api {put} /categories/:id Update a category
         * @apiGroup Categories
         * @apiSuccess {Object[]} categories Category list
         * @apiSuccess {Number} categories.CategoryID Category id
         * @apiSuccess {String} categories.CategoryName Category name
         * @apiSuccess {String} categories.Description Category description
         * @apiSuccess {String} categories.Picture Category picture
         * @apiSuccess {String} categories.field4 Category field4
         * @apiSuccess {String} categories.field5 Category field5
         * @apiSuccess {String} categories.field6 Category field6
         * @apiSuccess {String} categories.field7 Category field7
         * @apiSuccessExample {json} Success
         *
         * HTTP/1.1 200 OK
         *  [{
         *    "_id" : ObjectId("5b804d0060012aa55de58eb3"),
         *    "CategoryID" : 1,
         *    "CategoryName" : "Beverages",
         *    "Description" : "Soft drinks",
         *    "Picture" : "coffees",
         *    "field4" : "teas",
         *    "field5" : "beers",
         *    "field6" : "and ales"
         *  }]
         * @apiErrorExample {json} Task not found error
         *   HTTP/1.1 404 Not Found
         * @apiErrorExample {json} Find error
         *   HTTP/1.1 412 Precondition Failed
         */
        .put((req, res) => {
            // "/categories/1": Update a category

            categories.update(req, res);

        })
        /**
         * @api {delete} /categories/:id Remove a category
         * @apiGroup Categories
         * @apiParam {id} id Category id
         * @apiErrorExample {json} Task not found error
         *   HTTP/1.1 404 Not Found
         * @apiSuccessExample {json} Success
         *   HTTP/1.1 204 No Content
         * @apiErrorExample {json} Delete error
         *   HTTP/1.1 412 Precondition Failed
         */
        .delete((req, res) => {
            // "/categories/1": Delete a category

            categories.remove(req, res);

        });
};


