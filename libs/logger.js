var fs = require("fs"),
    winston = require("winston");

if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

module.exports = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/app.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: true
        }),
        new (winston.transports.Console)({
            uncaughtException: true,
            level: 'debug',
            json: false,
            colorize: 'true'
        })
    ]
});