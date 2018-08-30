var mongoose = require('mongoose');  

mongoose.connect('mongodb://localhost:27017/northwind', { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log('<=== database connection success ===>');
});

exports.mongoose = mongoose;



