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

	importSound(name, filepath)
	{
		//return new BABYLON.Sound(name, filepath, scene, null, { loop: true, autoplay: true });
		return new BABYLON.Sound(name, filepath, engine.scene);
	}

}
