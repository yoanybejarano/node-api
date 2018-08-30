var express = require('express');
var employee_territories = require('../models/employeeTerritories.model');

module.exports = function (app) {
    app.route("/employee_territories")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/employee_territories": List employee_territories
            employee_territories.list(req, res);
        })
        .post((req, res) => {
            // "/employee_territories": Save new employee_territory
            employee_territories.create(req, res);
        });

    app.route("/employee_territories/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/employee_territories/1": Find a employee_territory

            employee_territories.show(req, res);

        })
        .put((req, res) => {
            // "/employee_territories/1": Update a employee_territory

            employee_territories.update(req, res);

        })
        .delete((req, res) => {
            // "/employee_territories/1": Delete a employee_territory

            employee_territories.remove(req, res);

        });
};


