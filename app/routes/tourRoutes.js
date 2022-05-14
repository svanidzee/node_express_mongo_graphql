const express = require('express');
const tourController = require('./../controllers/toureController');
const router = express.Router();

// The parameters of router.param() are name and a function. Where name
// is the actual name of parameter and function is the callback function
// Basically router.param() function triggers the callback function
// whenever user routes to the parameter http://localhost:3000/api/v1/tours/:id'
router.param('id', tourController.checkID);

// Routing - where we map requests to specific handlers depending on their URL

// app.route Returns an instance of a single route, which
// you can chain http requests
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
