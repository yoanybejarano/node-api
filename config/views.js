var exphbs = require('express-handlebars'),
    path = require('path'),
    moment = require('moment'),
    express = require('express'),
    routes = require('../routes'),
    /*
    Parse incoming request bodies in a middleware before your handlers,
    available under the req.body property.
    */
    bodyParser = require('body-parser'),

    //This allows cookies to be sent and received.
    cookieParser = require('cookie-parser'),

    //Module responsible for logging.
    morgan = require('morgan'),

    /**
     For older browsers that don't properly support REST
     HTTP verbs, such as UPDATE and PUT , the methodOverride middleware
     allows this to be faked using a special hidden input field.
     */
    methodOverride = require('method-override'),

    //This handles any errors that occur throughout the entire middleware process.
    errorHandler = require('errorhandler');

module.exports = function (app) {

    routes(app);

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app);
    
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    //Register Handlebars as default view rendering engine
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function (timestamp) {
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars');

    var viewsPath = path.join(__dirname, '../views/');
    console.log('views : ' + viewsPath);
    app.set('views', viewsPath);

    var staticFilesPath = path.join(__dirname, '../views/assets');
    console.log('static files : ' + staticFilesPath);
    app.use(express.static(staticFilesPath));

    return app;
};