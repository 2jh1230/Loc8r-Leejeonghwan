// var express = require('express');
// var router = express.Router();
// const ctrlLocations = require('../controllers/locations');
// const ctrlOthers = require('../controllers/others');

// /* Locations pages */
// router.get('/', ctrlLocations.homelist);
// router.get('/location', ctrlLocations.locationInfo);
// router.get('/location/review/new', ctrlLocations.addReview);

// /* Other pages */
// router.get('/about', ctrlOthers.about);

// module.exports = router;

const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// locations
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);
  
router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// reviews
router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);
  
router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;
