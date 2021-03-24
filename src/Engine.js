/// <reference path="../lib/babylon.js" />
/// <reference path="../lib/babylon.gui.js" />

import DataSource from "./DataSource.js";
import Manager from "./Manager.js";
import Map from "./Map.js";
import Location from './Location.js'

const engine =
{
	// Forwards
	main: function()
	{
		// INIT
		this.initEngine();
		this.initUI();
		this.run();
		
		// setInterval(() => { // loop function
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

		this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

		// Camera setup
		this.camera = new BABYLON.FreeCamera('maincam', BABYLON.Vector3.Zero(), this.scene);
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

		// Component
		DataSource.init();
		Location.registerMousePicking();
		this.manager = new Manager();
		this.map = new Map();
		

		this.changeLocation('SGU_A_01');
	},

	initUI: function()
	{
		let panel = new BABYLON.GUI.StackPanel();
		panel.isVertical = false;
		//panel.width = "240px";
		panel.height = "160px";
		panel.horizontalAlignment = 1;
		panel.verticalAlignment = 1;			
		this.advancedTexture.addControl(panel);


		//Nut an/hien UI
        let btnUI = new BABYLON.GUI.Button();
        btnUI.width = "55px";
        btnUI.height = "35px";
        btnUI.paddingRight = "10px";
        btnUI.paddingLeft = "10px";
        btnUI.top = "30%";
        btnUI.color = "transparent";
        btnUI.background = "transparent";
        btnUI.hoverCursor = "pointer";
        btnUI.zIndex = 2;
        panel.addControl(btnUI);
        let imgUIOn = new BABYLON.GUI.Image("imgUIOn","./asset/icon/eye_on1.png");
        btnUI.addControl(imgUIOn);
        let imgUIOff = new BABYLON.GUI.Image("imgUIOff","./asset/icon/eye_off1.png");
        imgUIOff.isVisible = false;
        btnUI.addControl(imgUIOff);

        btnUI.onPointerClickObservable.add(() => {
        	//TODO
        	if (imgUIOn.isVisible === true)
        	{
        		imgUIOff.isVisible = true;
        		imgUIOn.isVisible = false; 

        		btnFullScreen.isVisible = false;
        		btnSetting.isVisible = false;
        		btnMap.isVisible = false;
        		btnSound.isVisible = false;
        		btnRotation.isVisible = false;         		
        	}
        	else
        	{
        		imgUIOff.isVisible = false;
        		imgUIOn.isVisible = true;  

        		btnFullScreen.isVisible = true;
        		btnSetting.isVisible = true;
        		btnMap.isVisible = true;
        		btnSound.isVisible = true;
        		btnRotation.isVisible = true;    		
        	}
        });


		
        //Nut fullscreen
		let btnFullScreen = new BABYLON.GUI.Button();
		btnFullScreen.width = "55px";
        btnFullScreen.height = "35px";
        btnFullScreen.paddingRight = "10px";
        btnFullScreen.paddingLeft = "10px";
        btnFullScreen.top = "30%"
        btnFullScreen.background = "transparent"
        btnFullScreen.color = "transparent"
        btnFullScreen.hoverCursor = "pointer";
        btnFullScreen.zIndex = 2;
        panel.addControl(btnFullScreen);
        let imgFullScreenOn = new BABYLON.GUI.Image("imgFullScreenOn","./asset/icon/fullscreen_on.png");
        btnFullScreen.addControl(imgFullScreenOn);
        let imgFullScreenOff = new BABYLON.GUI.Image("imgFullScreenOff","./asset/icon/fullscreen_off.png");
        imgFullScreenOff.isVisible = false;
        btnFullScreen.addControl(imgFullScreenOff);
        btnFullScreen.onPointerClickObservable.add(() => {
        	//TODO
        	if (imgFullScreenOn.isVisible === true)
        	{
        		imgFullScreenOff.isVisible = true;
        		imgFullScreenOn.isVisible = false;        		
        	}
        	else
        	{
        		imgFullScreenOff.isVisible = false;
        		imgFullScreenOn.isVisible = true;      		
        	}
        });

        //Nut cai dat
        let btnSetting = new BABYLON.GUI.Button();
        btnSetting.width = "55px";
        btnSetting.height = "35px";
        btnSetting.paddingRight = "10px";
        btnSetting.paddingLeft = "10px";
        btnSetting.top = "30%";
        btnSetting.color = "transparent";
        btnSetting.background = "transparent";
        btnSetting.hoverCursor = "pointer";
        btnSetting.zIndex = 2;
        panel.addControl(btnSetting);
        let imgSetting = new BABYLON.GUI.Image("imgSetting","./asset/icon/setting.png");
        btnSetting.addControl(imgSetting);
        btnSetting.onPointerClickObservable.add(() => {
        	//TODO
        });

        //Nut sound
        let btnSound = new BABYLON.GUI.Button();
        btnSound.width = "55px";
        btnSound.height = "35px";
        btnSound.paddingRight = "10px";
        btnSound.paddingLeft = "10px";
        //btnSound.left = "38.5%";
        //btnSound.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        btnSound.top = "30%";
        btnSound.color = "transparent";
        btnSound.background = "transparent";
        btnSound.hoverCursor = "pointer";
        btnSound.zIndex = 2;
        panel.addControl(btnSound);
        let imgSoundOn = new BABYLON.GUI.Image("imgSoundOn","./asset/icon/sound_on1.png");
        btnSound.addControl(imgSoundOn);
        let imgSoundOff = new BABYLON.GUI.Image("imgSoundOff","./asset/icon/sound_off1.png");
        imgSoundOff.isVisible = false;
        btnSound.addControl(imgSoundOff);

        btnSound.onPointerClickObservable.add(() => {
        	//TODO
        	if (imgSoundOn.isVisible === true)
        	{
        		imgSoundOff.isVisible = true;
        		imgSoundOn.isVisible = false;        		
        	}
        	else
        	{
        		imgSoundOff.isVisible = false;
        		imgSoundOn.isVisible = true;      		
        	}
        });
        btnSound.onPointerMoveObservable.add(() => {
        	slider.isVisible = true;       	
        });
        /*btnSound.onPointerOutObservable.add(() => {
        	slider.isVisible = false;
        });*/
        

        //Nut bat/tat tu xoay
        let btnRotation = new BABYLON.GUI.Button();
        btnRotation.width = "55px";
        btnRotation.height = "35px";
        btnRotation.paddingRight = "10px";
        btnRotation.paddingLeft = "10px";
        //btnRotation.left = "38.5%";
        //btnRotation.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        btnRotation.top = "30%";
        btnRotation.color = "transparent";
        btnRotation.background = "transparent";
        btnRotation.hoverCursor = "pointer";
        btnRotation.zIndex = 2;
        panel.addControl(btnRotation);
        let imgRotationOn = new BABYLON.GUI.Image("imgRotationOn","./asset/icon/rotation_on.png");
        btnRotation.addControl(imgRotationOn);
        let imgRotationOff = new BABYLON.GUI.Image("imgRotationOff","./asset/icon/rotation_off.png");
        imgRotationOff.isVisible = false;
        btnRotation.addControl(imgRotationOff);

        btnRotation.onPointerClickObservable.add(() => {
        	//TODO
        	if (imgRotationOn.isVisible === true)
        	{
        		imgRotationOff.isVisible = true;
        		imgRotationOn.isVisible = false;        		
        	}
        	else
        	{
        		imgRotationOff.isVisible = false;
        		imgRotationOn.isVisible = true;      		
        	}
        });

        //Nut mo map
        let btnMap = new BABYLON.GUI.Button();
        btnMap.width = "55px";
        btnMap.height = "35px";
        btnMap.paddingRight = "10px";
        btnMap.paddingLeft = "10px";
        btnMap.top = "30%";
        btnMap.color = "transparent";
        btnMap.background = "transparent";
        btnMap.hoverCursor = "pointer";
        btnMap.zIndex = 2;
		btnMap.isPointerBlock = true;
		btnMap.onPointerClickObservable.add(() => {
			this.map.toogleMap();
        });
        panel.addControl(btnMap);
        let imgMap = new BABYLON.GUI.Image("imgMap","./asset/icon/map1.png");
        btnMap.addControl(imgMap);
        btnMap.onPointerClickObservable.add(() => {
        	//TODO
        });

        /*let btnMap2 = new BABYLON.GUI.Button();
        btnMap2.width = "55px";
        btnMap2.height = "35px";
        btnMap2.paddingRight = "10px";
        btnMap2.paddingLeft = "10px";
        btnMap2.top = "30%";
        btnMap2.color = "transparent";
        btnMap2.background = "transparent";
        btnMap2.hoverCursor = "pointer";
        btnMap2.zIndex = 2;
        panel.addControl(btnMap2);
        let imgMap2 = new BABYLON.GUI.Image("imgMap2","./asset/icon/map1.png");
        btnMap2.addControl(imgMap2);
        btnMap2.onPointerClickObservable.add(() => {
        	//TODO
        });*/

        let slider = new BABYLON.GUI.Slider();
	    slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
	    slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
	    slider.minimum = 0;
	    slider.maximum = 100;
	    slider.value = 100;
	    slider.color = "black";
	    slider.isThumbClamped = true;
	    slider.isThumbCircle = true;
	    slider.background = "#e2e2e2";	    
	    slider.height = "30px";
	    slider.width = "120px";
	    slider.top = "-95px"
	    slider.left = "-133px"
	    slider.rotation = -Math.PI/2;
	    slider.isVisible = false;
	    // slider.isVertical = true;
	    // slider.onValueChangedObservable.add(function(value) {
	    //     var zoomValue = 400-value;
	    // });
	    slider.onPointerOutObservable.add(() => {
        	slider.isVisible = false;
        });
	    this.advancedTexture.addControl(slider);

	    /*let slider2 = new BABYLON.GUI.Slider();
	    slider2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
	    slider2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
	    slider2.minimum = 0;
	    slider2.maximum = 100;
	    slider2.value = 100;
	    slider2.color = "black";
	    slider2.isThumbClamped = true;
	    slider2.isThumbCircle = true;
	    slider2.background = "#e2e2e2";	    
	    slider2.height = "30px";
	    slider2.width = "120px";
	    slider2.top = "-100px"
	    //slider2.rotation = -Math.PI/2;
	    // slider2.isVertical = true;
	    // slider2.onValueChangedObservable.add(function(value) {
	    //     var zoomValue = 400-value;
	    // });
	    panel.addControl(slider2);*/

	    //quay nguoc chieu stackpanel
   	    panel.children.reverse();

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
	}
}

export default engine;
