var express = require('express');
var products = require('../models/products.model');


module.exports = function (app) {
    app.route("/products")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/products": List products
            products.list(req, res);
        })
        .post((req, res) => {
            // "/products": Save new product
            products.create(req, res);
        });

    app.route("/products/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/products/1": Find a product

            products.show(req, res);

        })
        .put((req, res) => {
            // "/products/1": Update a product

            products.update(req, res);

        })
        .delete((req, res) => {
            // "/products/1": Delete a product

            products.remove(req, res);

        });
};


