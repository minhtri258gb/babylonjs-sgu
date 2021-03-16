/// <reference path="../lib/babylon.js" />

import engine from './Engine.js'

export default class Manager
{
	// Forwards
	constructor()
	{
		this.manager = new BABYLON.AssetsManager(engine.scene);
		this.locations = [];
        this.sounds = [];
		this.GUIs = [];
	}

	// // Natives
	// skysphere(name)
	// {
	// 	let sphere = BABYLON.Mesh.CreateSphere("skyDome", 25, 5000);
	// 	sphere.infiniteDistance = true;

	// 	let skymat = new BABYLON.StandardMaterial("skyMat");
	// 	skymat.backFaceCulling = false;
	// 	// skymat.disableLighting = true;
	// 	skymat.diffuseTexture = new BABYLON.Texture("./asset/skysphere/"+name+".jpg", engine.scene); 
	// 	skymat.diffuseTexture.vScale = -1; 

	// 	sphere.material = skymat;

	// 	return sphere;
	// }

	importSound(name, filepath)
	{
		//return new BABYLON.Sound(name, filepath, scene, null, { loop: true, autoplay: true });
		return new BABYLON.Sound(name, filepath, engine.scene);
	}

}
