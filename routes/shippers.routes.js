var express = require('express');
var router = express.Router();
var shippers = require('../models/shippers.model');

module.exports = function (app) {
    app.route("/shippers")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/shippers": List shippers
            shippers.list(req, res);
        })
        .post((req, res) => {
            // "/shippers": Save new shipper
            shippers.create(req, res);
        });

    app.route("/shippers/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/shippers/1": Find a shipper

            shippers.show(req, res);

        })
        .put((req, res) => {
            // "/shippers/1": Update a shipper

            shippers.update(req, res);

        })
        .delete((req, res) => {
            // "/shippers/1": Delete a shipper

            shippers.remove(req, res);

        });
};

