var express = require('express');
var orders = require('../models/orders.model');


module.exports = function (app) {
    app.route("/orders")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/orders": List orders
            orders.list(req, res);
        })
        .post((req, res) => {
            // "/orders": Save new order
            orders.create(req, res);
        });

    app.route("/orders/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/orders/1": Find a order

            orders.show(req, res);

        })
        .put((req, res) => {
            // "/orders/1": Update a order

            orders.update(req, res);

        })
        .delete((req, res) => {
            // "/orders/1": Delete a order

            orders.remove(req, res);

        });
};