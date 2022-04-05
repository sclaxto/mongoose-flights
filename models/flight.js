const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Compiling the schema
const destinationSchema = new Schema ({
    airport: {
          type: String,  
          enum: ['Delta', 'Southwest', 'American', 'United']
    },
    arrival: Date,  
})

const flightSchema = new Schema({
    airline: {
        type: String,  
        enum: ['Delta', 'Southwest', 'American', 'United']
  },
  
    airport: {
    type: String,
    enum: ['ATL', 'DFW', 'LAX', 'SAN'],
    default: 'DEN'
    },

    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max: 9999, 
    },
    
    departs: {
        type: Date, 
        default: function () {
            return oneYear.getFullYear(oneYear.getFullYear() +1);
        }
    },
    destinations: [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]

});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema); 