var express = require('express');
var order_details = require('../models/orderDetails.model');


module.exports = function (app) {
    app.route("/order_details")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/order_details": List order_details
            order_details.list(req, res);
        })
        .post((req, res) => {
            // "/order_details": Save new order_detail
            order_details.create(req, res);
        });

    app.route("/order_details/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/order_details/1": Find a order_detail

            order_details.show(req, res);

        })
        .put((req, res) => {
            // "/order_details/1": Update a order_detail

            order_details.update(req, res);

        })
        .delete((req, res) => {
            // "/order_details/1": Delete a order_detail

            order_details.remove(req, res);

        });
};


