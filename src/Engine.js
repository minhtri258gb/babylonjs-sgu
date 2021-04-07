/// <reference path="../lib/babylon.js" />
/// <reference path="../lib/babylon.gui.js" />

import DataSource from "./DataSource.js";
import Map from "./Map.js";
import Interfaces from "./Interfaces.js";
import Animation from "./Animation.js";
import Location from './Location.js'
import Effect from "./Effect.js";
import Music from "./Music.js";
import Language from "./Language.js";
import detectMobile from './DetectMobileAPI.js'

const engine =
{
	// Forwards
	main: function()
	{
		// INIT
		this.initEngine();
		this.run();
		
		// setInterval(() => { // loop function
			
		// 	// console.log(engine.camera.position);

		// }, 1000);
	},

	initEngine: function()
	{
		// Scene setup
		this.canvas = document.getElementById('renderCanvas');

		this.engine = new BABYLON.Engine(this.canvas, true);
		this.engine.enableOfflineSupport = false;

		this.scene = new BABYLON.Scene(this.engine);
		this.scene.clearColor = new BABYLON.Color3.Black();

		this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

		// Camera setup
        this.camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 1, BABYLON.Vector3.Zero(), this.scene);
		this.camera.attachControl(this.canvas, true);
		this.camera.fov = BABYLON.Tools.ToRadians(60); // Tam nhin
        this.camera.useAutoRotationBehavior = false; //tu dong xoay camera

		this.camera.angularSensibilityX = -500;
		this.camera.angularSensibilityY = -500;
		this.camera.inertia = 0;
		this.camera.inputs.remove(this.camera.inputs.attached.mousewheel);
		this.camera.inputs.remove(this.camera.inputs.attached.keyboard);

		// Component
		Location.registerMousePicking();
		this.data = new DataSource();
		this.language = new Language();
		this.animation = new Animation();
		this.effect = new Effect();
        this.interfaces = new Interfaces();
		this.map = new Map();
		this.music = new Music();
		
		this.changeLocation('A02');
	},
  
	run: function()
	{
		// Update
		// this.scene.registerBeforeRender(() => {
		// 	// Check input
		// 	this.g_cmd.inputProcess();
		// });

		// Render
		this.engine.runRenderLoop(() => {
			this.scene.render();
		});

		// Resize window event
		window.addEventListener("resize", () => {
			this.map.resize();
			this.engine.resize();
		});

	},

	// Natives
	changeLocation: function(_name)
	{
		
		if (this.loc !== undefined) // first case when init
		{
			if (this.loc.name.localeCompare(_name) == 0) // skip same location
				return;
			this.loc.dispose();
		}
		this.loc = new Location(_name);
		this.map.updateLocation();
	},

	setCameraFOV(value)
	{
		this.camera.fov = BABYLON.Tools.ToRadians(value);
	
	},

	setCameraType(type)
	{
		switch(type)
		{
			case 0: // cam thuong
				engine.camera.position = new BABYLON.Vector3(0,0,-1);
				engine.camera.fov = BABYLON.Tools.ToRadians(60)
				break;
			case 1:
				break;
			case 2:
				let pos = engine.camera.position.normalize();
				engine.camera.position = new BABYLON.Vector3(0,0,-60);
				engine.camera.fov = BABYLON.Tools.ToRadians(60)

				break;
			case 3:
				engine.camera.position = new BABYLON.Vector3(0,500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120)
				break;
			case 4:
				engine.camera.position = new BABYLON.Vector3(0,-500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120)
				break;
		}
	}

}

export default engine;
