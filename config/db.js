var mongoose = require('mongoose'),
    dateFormat = require('dateformat'),
    logger = require('../libs/logger');

mongoose.connect('mongodb://localhost:27017/northwind', {useNewUrlParser: true})
    .then(() => console.log('*** database connection succesful ***'))
    .catch((err) => console.error(err));

// var connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {
//     console.log('**** database connection success ****');
// });

/*Logging database*/
mongoose.set('debug', function (collectionName, method, query, doc) {
    var date = dateFormat(new Date(), "ddd, mm-dd-yy h:MM:ss TT");
    var lineLog = date + ' collection:' + collectionName + ' method:' + method ;
    logger.info(lineLog);
});

exports.mongoose = mongoose;



