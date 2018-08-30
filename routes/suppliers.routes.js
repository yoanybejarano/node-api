var express = require('express');
var router = express.Router();
var suppliers = require('../models/suppliers.model');

module.exports = function (app) {
    app.route("/suppliers")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/suppliers": List suppliers
            suppliers.list(req, res);
        })
        .post((req, res) => {
            // "/suppliers": Save new supply
            suppliers.create(req, res);
        });

    app.route("/suppliers/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/suppliers/1": Find a supply

            suppliers.show(req, res);

        })
        .put((req, res) => {
            // "/suppliers/1": Update a supply

            suppliers.update(req, res);

        })
        .delete((req, res) => {
            // "/suppliers/1": Delete a supply

            suppliers.remove(req, res);

        });
};