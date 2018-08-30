var express = require('express');
var router = express.Router();
var territories = require('../models/territories.model');

module.exports = function (app) {
    app.route("/territories")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/territories": List territories
            territories.list(req, res);
        })
        .post((req, res) => {
            // "/territories": Save new territory
            territories.create(req, res);
        });

    app.route("/territories/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/territories/1": Find a territory

            territories.show(req, res);

        })
        .put((req, res) => {
            // "/territories/1": Update a territory

            territories.update(req, res);

        })
        .delete((req, res) => {
            // "/territories/1": Delete a territory

            territories.remove(req, res);

        });
};