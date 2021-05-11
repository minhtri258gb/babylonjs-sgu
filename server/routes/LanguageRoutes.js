
const express = require('express');
const {importLanguages} = require('../controllers/LanguageController');

const router = express.Router();

router.post('/', importLanguages);


module.exports = {
	router: router
}
