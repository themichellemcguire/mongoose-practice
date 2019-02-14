const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/fruits'

mongoose.connect(connectionString)

mongoose.connection.on('connected', function() {
    console.log(`Mongoose is connected at: ${connectionString}`);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose is disconnected')
});
mongoose.connection.on('error', function(error){
console.log('Something went wrong with Mongoose', error)
});