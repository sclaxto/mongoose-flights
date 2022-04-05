const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsController.create);
// router.delete('/destinations/:flight/:dest', destinationsController.delete);

module.exports = router;