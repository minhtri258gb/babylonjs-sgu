/// <reference path="../lib/babylon.js" />
/// <reference path="../lib/babylon.gui.js" />

import DataSource from "./DataSource.js";
import Manager from "./Manager.js";
import Map from "./Map.js";
import Interfaces from "./Interfaces.js";
import Animation from "./Animation.js";

const engine =
{
	main: function()
	{
		// INIT
		this.initEngine();
		this.loadmap();
		this.run();
		
		// setInterval(() => {
		// 	let a = this.manager.getMesh("wooden_watch_tower");
		// 	a.position = new BABYLON.Vector3(0, 70, 0);
		// }, 3000);
	},

	initEngine: function()
	{
		// Scene setup
		this.canvas = document.getElementById('renderCanvas');

		this.engine = new BABYLON.Engine(this.canvas, true);
		this.engine.enableOfflineSupport = false;

		this.scene = new BABYLON.Scene(this.engine);
		this.scene.clearColor = new BABYLON.Color3.Black();

		// HUD
		this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

		// Component
		this.manager = new Manager();
		this.map = new Map();
        this.interfaces = new Interfaces();
		this.animation = new Animation();

		// Camera setup
        this.camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 1,new BABYLON.Vector3(0,-1,-1), this.scene);
		//this.camera = new BABYLON.ArcRotateCamera('maincam', BABYLON.Vector3.Zero(), this.scene);
		this.camera.setTarget(new BABYLON.Vector3(0, 0, -1));
		this.camera.attachControl(this.canvas, true);
		// camera.keysUp.push(87);
		// camera.keysDown.push(83);
		// camera.keysLeft.push(65);
		// camera.keysRight.push(68);
		// camera.upperBetaLimit = Math.PI / 2.2;
		this.camera.fov = 60 * Math.PI / 180.0; // Tam nhin
		// camera.inertia = 0.0; // Quan tinh
		this.camera.angularSensibility = 1000; // toc do chuot
        this.camera.useAutoRotationBehavior = true; //tu dong xoay camera
		// camera.moveSensibility = 100; // toc do di chuyen ???
		// camera.speed = 5.0; // Toc do di chuyen
		// camera.applyGravity = true; // Physic - gravity
		// camera.checkCollisions = true;
		// arc camera
		// var camera = new BABYLON.ArcRotateCamera("arcCamera",
		// 		BABYLON.Tools.ToRadians(45),
		// 		BABYLON.Tools.ToRadians(45),
		// 		10.0, box.position, scene);
		// camera.attachControl(canvas,true);
	},

	
  
	loadmap: function()
	{
		this.loc = DataSource.getLocationInfo("SGU_A_01"); // cong truong
	},

	run: function()
	{
		// Update
		// this.scene.registerBeforeRender(() => {
		// 	// Check input
		// 	this.g_cmd.inputProcess();
		// });

		// Render
		let scene = this.scene;
		this.engine.runRenderLoop(function () {
			scene.render();
		});

		// Resize window event
		var engine = this.engine;
		window.addEventListener("resize", function () {
			engine.resize();
		});

	}
}

export default engine;
