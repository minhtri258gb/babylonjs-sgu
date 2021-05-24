'use strict';

const firebase = require('../db');
const Location = require('../models/Location');
const firestore = firebase.firestore();

const addLocation = async (req, res, next) => {
	try {
        const id = req.params.id;
		const data = req.body;
		await firestore.collection('location').doc(id).set(data);
		res.send('Record saved sucessfuly');
	} catch (error) {
		res.status(400).send(error.message);
	}
}

const getAllLocations = async (req, res, next) => {
	let json = require('../public/DB.json');
	res.send(json);
	// try {
	// 	const locations = await firestore.collection('location');
	// 	const data = await locations.get();
	// 	const locationList = {};
	// 	if (data.empty) {
	// 		res.status(400).send('No Location record found');
	// 	} else {
	// 		data.forEach(doc => {
	// 			let value = doc.data();
	// 			let loc = new Location(
	// 				value.link,
	// 				value.info,
	// 				value.position,
	// 				value.rotation,
	// 				value.sun
	// 			);
	// 			locationList[doc.id] = loc;
	// 		});
	// 		res.send(locationList);
	// 	}
	// } catch (error) {
	// 	res.status(400).send(error.message);
	// }
}

const getLocation = async (req, res, next) => {
	try {
        const id = req.params.id;
		const locations = await firestore.collection('location').doc(id);
		const data = await locations.get();
		if (!data.exists) {
			res.status(404).send('Location with the give ID now found');
		} else {
			res.send(data.data());
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
}

const updateLocation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const location =  await firestore.collection('location').doc(id);
        await location.update(data);
        res.send('Location record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteLocation = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('location').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const importLocation = async (req, res, next) => {
	try {
		const dataArr = req.body;
		for(let locName in dataArr) {
			await firestore.collection('location').doc(locName).set(dataArr[locName]);
		}
		res.send('Record saved sucessfuly');
	} catch (error) {
		res.status(400).send(error.message);
	}
}

const writeLocationDB = async () => {
	const locations = await firestore.collection('location');
	const data = await locations.get();
	const locationList = {};
	if (!data.empty) {
		data.forEach(doc => {
			let value = doc.data();
			let loc = new Location(
				value.link,
				value.info,
				value.position,
				value.rotation,
				value.sun
			);
			locationList[doc.id] = loc;
		});
		const fs = require('fs');
		fs.writeFileSync('./public/locationDB.json', JSON.stringify(locationList));
	}
}

module.exports = {
	addLocation,
	getAllLocations,
	getLocation,
	updateLocation,
	deleteLocation,
	importLocation,
	writeLocationDB
}
