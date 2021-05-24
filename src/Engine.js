
import config from "./Config.js";
import Map from "./Map.js";
import Interfaces from "./Interfaces.js";
import Animation from "./Animation.js";
import Location from './Location.js'
import Effect from "./Effect.js";
import Music from "./Music.js";
import MainMenu from "./MainMenu.js";
import detectMobile from "./DetectMobileAPI.js"

const engine =
{
	// Forwards
	main: function()
	{
		engine.initEngine();
	},

	initEngine: function()
	{
		// set default
		this.onInit = true;
		this.debug = false;

		// Scene setup
		this.canvas = document.getElementById('renderCanvas');
		this.setCanvasSizeMobile();

		this.engine = new BABYLON.Engine(this.canvas, true);
		this.engine.enableOfflineSupport = false;

		this.scene = new BABYLON.Scene(this.engine);
		this.scene.clearColor = new BABYLON.Color3.Black();

		// Task load DB
		this.data = {};
		this.assetsManager = new BABYLON.AssetsManager(this.scene);
		this.task = {};
		this.task.loadDB = this.assetsManager.addTextFileTask("LoadDBTask", "file/locationDB.json");
		this.task.loadDB.onSuccess = (task) => {
			this.data.loc = JSON.parse(task.text);
		}
		let lang = this.getParam('lang');
		if (lang === null) lang = config.default_lang;
		this.task.loadLang = this.assetsManager.addTextFileTask("LoadLangTask", "file/langDB_"+lang+".json");
		this.task.loadLang.onSuccess = (task) => {
			this.data.lang = JSON.parse(task.text);
		}
		this.task.loadOther = this.assetsManager.addTextFileTask("LoadOtherTask", "file/otherDB.json");
		this.task.loadOther.onSuccess = (task) => {
			this.data.other = JSON.parse(task.text);
		}

		// GUI
		this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
		
		this.canvas.addEventListener('wheel', event => { // Block ctrl + wheel
			if (event.ctrlKey)
				event.preventDefault();
		}, true);
		
		document.addEventListener("keydown", event => { // Block ctrl + cross and subtract
			if (event.ctrlKey && event.keyCode == 187 || event.keyCode == 189) // case ctrl + -
				event.preventDefault();
			// else if (event.keyCode == 122)
			// {	
			// 	event.preventDefault();
			// }
		  });

		document.addEventListener("fullscreenchange", () => {
			if (!this.engine.isFullscreen)
			{
				this.btnFullScreen.imgFullScreenOff.isVisible = true;
				this.btnFullScreen.imgFullScreenOn.isVisible = false;  
			}
			else
			{
				this.btnFullScreen.imgFullScreenOff.isVisible = false;
				this.btnFullScreen.imgFullScreenOn.isVisible = true;
			}
		  });

		// Camera setup
        this.camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 1, BABYLON.Vector3.Zero(), this.scene);
		this.camera.attachControl(this.canvas, true);
		this.camera.fov = BABYLON.Tools.ToRadians(60); // Tam nhin
        this.camera.useAutoRotationBehavior = this.debug?false:true;

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

		// load
		this.assetsManager.load();
		this.assetsManager.onFinish = (tasks) => {

			// Component
			Location.registerMousePicking();
			this.animation = new Animation();
			this.effect = new Effect();
			this.interfaces = new Interfaces();
			this.map = new Map();
			this.music = new Music();
			this.loc = new Location();
			this.menu = new MainMenu();
    
			// set flag
			this.onInit = false;

			this.run();
		};
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
			this.setCanvasSizeMobile();
			this.engine.resize();
		});
	},

	// Natives
	getLink: function(path)
	{
		let newpath = path.replace(/\//g, "%2F");
		newpath = newpath.replace(/\s/g, "%20");
		let res = "https://firebasestorage.googleapis.com/v0/b/"+config.firebase_storage+"/o/"+newpath+"?alt=media";
		return res;
	},

	getParam: function(key) {
		let url = new URL(window.location.href);
		return url.searchParams.get(key);
	},

	changeURLwithReload: function(key, value) {
		let url = new URL(window.location.href);
		let param = url.searchParams;
		param.set(key, value);
		url.search = param.toString();
		window.location.href = url.toString();
	},

	changeURLwithoutReload: function(key, value) {
		let url = new URL(window.location.href);
		let param = url.searchParams;
		param.set(key, value);
		url.search = param.toString();
		history.pushState({}, null, url.toString());
	},

	setCameraFOV: function(value)
	{
		this.camera.fov = BABYLON.Tools.ToRadians(value);
	},

	setCameraType: function(type)
	{
		if (engine.onInit)
			return;
		switch(type)
		{
			case 0: //cam thuong
				engine.camera.position = new BABYLON.Vector3(0,0,-1);
				engine.camera.fov = BABYLON.Tools.ToRadians(60);
				engine.interfaces.FOV.slider.value = 0.5;
				break;
			case 1: //mat ca
				engine.camera.position = new BABYLON.Vector3(0,0,-60);
				engine.camera.fov = BABYLON.Tools.ToRadians(60);
				engine.interfaces.FOV.slider.value = 0.5;
				break;
			case 2: //
				engine.camera.position = new BABYLON.Vector3(0,500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120);
				engine.interfaces.FOV.slider.value = 0;
				break;
			case 3:
				engine.camera.position = new BABYLON.Vector3(0,-500,0);
				engine.camera.fov = BABYLON.Tools.ToRadians(120);
				engine.interfaces.FOV.slider.value = 0;
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
	},
}

export default engine;
