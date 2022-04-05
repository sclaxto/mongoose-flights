//Flight Model//
const Flight = require('../models/flight');
const ticket = require('../models/ticket');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    show, 
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { 
            flights,
            title: "All Flights",
        });
    });
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {title: "Flight Details", flight, tickets});
        })
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
        flight.save(function(err){
            if(err) return res.render('flights/new')
            res.redirect('/flights/new')
            
        })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flights/new', {title: 'Add Flight'});
}