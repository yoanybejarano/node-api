var bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors');

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(cors());
    // app.use(cors({
    //     origin: ["http://localhost:3001"],
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    //     allowedHeaders: ["Content-Type", "Authorization"]
    // }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static("public"));
};