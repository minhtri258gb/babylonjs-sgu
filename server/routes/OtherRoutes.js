
const express = require('express');
const {importOthers} = require('../controllers/OtherController');

const router = express.Router();

router.post('/', importOthers);


module.exports = {
	router: router
}
