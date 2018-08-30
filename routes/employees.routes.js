var express = require('express');
var employees = require('../models/employees.model');


module.exports = function (app) {
    app.route("/employees")
        .all((req, res, next) => {
            // Middleware for preexecution of routes\
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/employees": List employees
            employees.list(req, res);
        })
        .post((req, res) => {
            // "/employees": Save new employee
            employees.create(req, res);
        });

    app.route("/employees/:id")
        .all((req, res, next) => {
            // Middleware for preexecution of routes
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            // "/employees/1": Find a employee

            employees.show(req, res);

        })
        .put((req, res) => {
            // "/employees/1": Update a employee

            employees.update(req, res);

        })
        .delete((req, res) => {
            // "/employees/1": Delete a employee

            employees.remove(req, res);

        });
};

