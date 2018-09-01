var bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compression = require("compression"),
    helmet = require("helmet"),
    logger = require('./logger');

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(morgan("common", {
        stream: {
            write: (message) => {
                logger.info(message);
            }
        }
    }));
    app.use(helmet());
    app.use(cors());
    // app.use(cors({
    //     origin: ["http://localhost:3001"],
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    //     allowedHeaders: ["Content-Type", "Authorization"]
    // }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static("public"));
};