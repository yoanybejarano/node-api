var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/northwind',{ useNewUrlParser: true });

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log('<=== database connection success ===>');
});

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {

//     connection.db.collection("YourCollectionName", function(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });

// });

exports.mongoose = mongoose;



