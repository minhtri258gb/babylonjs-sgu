'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();

const importOthers = async (req, res, next) => {
	try {
		const dataArr = req.body;
		await firestore.collection('other').doc('unique').set(dataArr);
		res.send('Record saved sucessfuly');
	} catch (error) {
		res.status(400).send(error.message);
	}
}

const writeOtherDB = async () => {
	const fs = require('fs');
	const languages = await firestore.collection('other');
	const data = await languages.get();
	const otherData = [];
	if (!data.empty) {
		data.forEach(doc => {
			fs.writeFileSync("./public/otherDB_export.json", JSON.stringify(doc.data()));
		});
	}
}

module.exports = {
	importOthers,
	writeOtherDB
}
