const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Compiling the schema
const destinationSchema = new Schema ({
    airport: String,  
    arrival: Date,  
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: {type:Number, default: null},
    departs: Date, 
    destinations: [destinationSchema]

});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema); 