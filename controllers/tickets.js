const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function create(req, res){
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, tickets){
        res.redirect(`/flights/${req.params.id}`)
    });
}

function newTicket(req, res){
    Ticket.find({}, function (err, tickets){
        res.render('tickets/new', {
            title: 'Add Ticket', 
             tickets,
             flightId: req.params.id
        })
    })
}

function showTicket(req, res){
    tickets.flightID(req,)
}