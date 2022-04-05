const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

//localhost:3000/flights
router.get('/', flightsController.index);
//localhost:3000/flights
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.post('/', flightsController.create);
//localhost3000/add

module.exports = router;