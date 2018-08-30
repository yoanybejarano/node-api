var express = require('express');
var router = express.Router();
var regions = require('../models/regions.model');

module.exports = function (app) {
    app.route("/regions")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/regions": List regions
            regions.list(req, res);
        })
        .post((req, res) => {
            // "/regions": Save new region
            regions.create(req, res);
        });

    app.route("/regions/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/regions/1": Find a region

            regions.show(req, res);

        })
        .put((req, res) => {
            // "/regions/1": Update a region

            regions.update(req, res);

        })
        .delete((req, res) => {
            // "/regions/1": Delete a region

            regions.remove(req, res);

        });
};