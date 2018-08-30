var express = require('express');
var categories = require('../models/categories.model');

module.exports = function (app) {
    app.route("/categories")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/categories": List categories
            categories.list(req, res);
        })
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
        .get((req, res) => {
            // "/categories/1": Find a category

            categories.show(req, res);

        })
        .put((req, res) => {
            // "/categories/1": Update a category

            categories.update(req, res);

        })
        .delete((req, res) => {
            // "/categories/1": Delete a category

            categories.remove(req, res);

        });
};


