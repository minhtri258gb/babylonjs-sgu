'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const locationRouter = require('./routes/LocationRoutes');
const {writeLocationDB} = require('./controllers/LocationController');

const languageRouter = require('./routes/LanguageRoutes');
const {writeLanguageDB} = require('./controllers/LanguageController');

const otherRouter = require('./routes/OtherRoutes');
const {writeOtherDB} = require('./controllers/OtherController');


const app = express();

app.use('/file', express.static('public'))

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/location', locationRouter.router);
app.use('/api/language', languageRouter.router);
app.use('/api/other', otherRouter.router);

app.get('/', function (req, res) {
	// writeLocationDB(); // TODO Open when real run >> update DB json when request
	// writeLanguageDB();
	// writeOtherDB();

	const path = require('path');
	res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/admin', function (req, res) {
	const path = require('path');
	res.sendFile(path.join(__dirname, './views/admin.html'));
});

app.use('/favicon.ico', express.static('public/favicon.ico'));

app.listen(config.port, () => console.log('Server running ...'));
