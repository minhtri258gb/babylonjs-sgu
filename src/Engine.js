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
import MainMenu from "./MainMenu.js";
import detectMobile from "./DetectMobileAPI.js"

const engine =
{
	// Forwards
	main: function()
	{
		this.initEngine();
		this.run();
	},

	initEngine: function()
	{
		// set default
		this.onInit = true;

		// Scene setup
		this.canvas = document.getElementById('renderCanvas');
		this.setCanvasSizeMobile();

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
		this.camera.pinchPercentage = 0;
		this.camera.panningSensibility = 0;
		this.camera.useNaturalPinchZoom = false;
		this.camera.inputs.remove(this.camera.inputs.attached.mousewheel);
		this.camera.inputs.remove(this.camera.inputs.attached.keyboard);

		// this.camera.panningSensibility = 0;
		// this.camera.inputs.attached.pointers.multiTouchPanAndZoom = false;
    	// this.camera.inputs.attached.pointers.multiTouchPanning = false;
		// this.camera.inputs.attached.pointers.panningSensibility = 0;
		// this.camera.inputs.attached.pointers.pinchInwards = false;
		// this.camera.inputs.attached.pointers.pinchPrecision = 0; // 
		// this.camera.pinchToPanMaxDistance = 0;

		// Component
		Location.registerMousePicking();
		this.data = new DataSource();
		this.language = new Language();
		this.animation = new Animation();
		this.effect = new Effect();
        this.interfaces = new Interfaces();
		this.map = new Map();
		this.music = new Music();
		this.loc = new Location();
		this.menu = new MainMenu();
    
		// set flag
		this.onInit = false;
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
			// alert("ASAS")
			this.map.resize();
			this.setCanvasSizeMobile();
			this.engine.resize();
		});
	},

	// Natives
	// reload: function(_url)
	// {
	// 	window.location.href = _url.toString();
	// },

	setCameraFOV(value)
	{
		this.camera.fov = BABYLON.Tools.ToRadians(value);
	},

	setCameraType(type)
	{
		switch(type)
		{
			case 0: //cam thuong
				engine.camera.position = new BABYLON.Vector3(0,0,-1);
				engine.camera.fov = BABYLON.Tools.ToRadians(60)
				break;
			case 1: //kien truc
				break;
			case 2: //mat ca
				let pos = engine.camera.position.normalize();
				engine.camera.position = new BABYLON.Vector3(0,0,-60);
				engine.camera.fov = BABYLON.Tools.ToRadians(60)

				break;
			case 3: //
				engine.camera.position = new BABYLON.Vector3(0,500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120)
				break;
			case 4:
				engine.camera.position = new BABYLON.Vector3(0,-500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120)
				break;
		}
	},

	setCanvasSizeMobile: function()
	{
		if (!detectMobile())
			return;

		if (window.innerHeight > window.innerWidth)
		{
			let size = ((window.innerWidth / 16 * 9) / window.innerHeight * 100).toFixed(2);
			this.canvas.style.height = size+'%';
		}
		else
		{
			this.canvas.style.height = '100%';
		}
	}
}

export default engine;
