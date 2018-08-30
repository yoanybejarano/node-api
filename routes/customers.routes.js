var express = require('express');
var customers = require('../models/customers.model');


module.exports = function (app) {
    app.route("/customers")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/customers": List customers
            customers.list(req, res);
        })
        .post((req, res) => {
            // "/customers": Save new customer
            customers.create(req, res);
        });

    app.route("/customers/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/customers/1": Find a customer

            customers.show(req, res);

        })
        .put((req, res) => {
            // "/customers/1": Update a customer

            customers.update(req, res);

        })
        .delete((req, res) => {
            // "/customers/1": Delete a customer

            customers.remove(req, res);

        });
};

