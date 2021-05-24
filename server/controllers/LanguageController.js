'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();

const importLanguages = async (req, res, next) => {
	try {
		const dataArr = req.body;
		for(let langName in dataArr) {
			await firestore.collection('language').doc(langName).set(dataArr[langName]);
		}
		res.send('Record saved sucessfuly');
	} catch (error) {
		res.status(400).send(error.message);
	}
}

const writeLanguageDB = async () => {
	const fs = require('fs');
	const languages = await firestore.collection('language');
	const data = await languages.get();
	const langData = {};
	if (!data.empty) {
		data.forEach(doc => {
			let value = doc.data();
			langData[doc.id] = value;
			fs.writeFileSync("./public/langDB_"+doc.id+".json", JSON.stringify(langData[doc.id]));
		});
	}
}

module.exports = {
	importLanguages,
	writeLanguageDB
}
