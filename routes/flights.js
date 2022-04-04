var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

//localhost:3000/flights
router.get('/', flightsContoller.index);
router.get('/new', flightsContoller.new);
router.get('/:id', flightsContoller.show);
router.post('/', flightsController.create);
//localhost3000/add

module.exports = router;