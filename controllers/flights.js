//Flight Model//
const Flight = require("../models/flight");

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flights: flights.getAll() 
        });
    });
};

function newFlight(req, res) {
        res.render('flights/index', { title: "New Flight"})

}

module.exports = {
    index
};