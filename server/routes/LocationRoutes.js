
const express = require('express');
const {
		addLocation,
		importLocation,
		getAllLocations,
		getLocation,
		updateLocation,
		deleteLocation
	} = require('../controllers/LocationController');

const router = express.Router();

router.post('/:id', addLocation);
router.post('/', importLocation);
router.get('/', getAllLocations);
router.get('/:id', getLocation);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);


module.exports = {
	router: router
}
