const Flight = require("../models/flight")


function create(req, res ) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

// function deleteDestination(req, res ) {
//     Flight.findbyID(req.params.id, function(err, flight){
//         flight.destination.splice(req.body);
//         flight.save(function(err){
//             res.redirect(`/flights/${flight._id}`);
//         });
//     });
// }

module.exports = {
    create
    // delete: deleteDestination
};