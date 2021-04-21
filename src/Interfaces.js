
import detectMobile from './DetectMobileAPI.js';
import engine from './Engine.js'


export default class Interfaces 
{
	// Forwards
	constructor()
	{	
		// Default
		let url = new URL(window.location.href);
		this.isDark = (url.searchParams.get("dark") === 'false') ? false : true;

		this.initLogoNav();
		this.initFOV();
		this.initMenuNav();
		this.initAreaNav();
		this.initSettings();
		this.initRectBlock();
		this.initInfoPanel();
	}
	
	initLogoNav()
	{
		//Rectangle danh cho logo va ngon ngu
		this.logoNav = {};
		this.logoNav.container = new BABYLON.GUI.Rectangle();
		this.logoNav.container.width = "200px";
		this.logoNav.container.height = "100px";
		this.logoNav.container.verticalAlignment = 0;
		this.logoNav.container.horizontalAlignment = 0;
		this.logoNav.container.left = "10px";
		this.logoNav.container.top = "10px";
		this.logoNav.container.color = "transparent";
		this.logoNav.container.zIndex = 6;
		engine.advancedTexture.addControl(this.logoNav.container);

		//Nut logo ve trang SGU
		this.logoNav.btnLogo = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/logo.png");
		if (detectMobile())
		{
			this.logoNav.btnLogo.width = "60px";
			this.logoNav.btnLogo.height = "60px";
			this.logoNav.btnLogo.top = "-20px";
		}
		else
		{
			this.logoNav.btnLogo.width = "100px";
			this.logoNav.btnLogo.height = "100px";
		}		
		this.logoNav.btnLogo.color = "transparent";
		this.logoNav.btnLogo.hoverCursor = "pointer";
		this.logoNav.btnLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;        
		this.logoNav.btnLogo.onPointerClickObservable.add(() => {
			if (confirm(engine.language.get('confirm_direct_sguhome'))) 
				window.open("https://sgu.edu.vn");		
		});
		this.logoNav.container.addControl(this.logoNav.btnLogo);


		//Nut ngon ngu Viet Nam
		this.logoNav.btnLangVi = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/vi-flag.png");
		this.logoNav.btnLangVi.width = "30px";
		this.logoNav.btnLangVi.height = "20px";
		this.logoNav.btnLangVi.color = "transparent";
		this.logoNav.btnLangVi.hoverCursor = "pointer";
		this.logoNav.btnLangVi.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;   
		this.logoNav.btnLangVi.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.logoNav.btnLangVi.left = "15px";        
		this.logoNav.btnLangVi.onPointerClickObservable.add(() => {
			engine.language.changeLanguage('vi')
		});
		this.logoNav.container.addControl(this.logoNav.btnLangVi);

		//Nut ngon ngu English
		this.logoNav.btnLangEn = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/uk-flag.png");
		this.logoNav.btnLangEn.width = "30px";
		this.logoNav.btnLangEn.height = "20px";
		this.logoNav.btnLangEn.color = "transparent";
		this.logoNav.btnLangEn.hoverCursor = "pointer";
		this.logoNav.btnLangEn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;   
		this.logoNav.btnLangEn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.logoNav.btnLangEn.left = "50px";          
		this.logoNav.btnLangEn.onPointerClickObservable.add(() => {
			engine.language.changeLanguage('en')
		});
		this.logoNav.container.addControl(this.logoNav.btnLangEn);
	}

	initFOV()
	{
		this.FOV = {};
		this.FOV.container = new BABYLON.GUI.Rectangle();
		this.FOV.container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.FOV.container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
		this.FOV.container.color = "transparent";
		this.FOV.container.width = "70px";
		this.FOV.container.height = "200px";
		this.FOV.container.zIndex = 2;
		engine.advancedTexture.addControl(this.FOV.container);
	   
		this.FOV.slider = new BABYLON.GUI.Slider();
		this.FOV.slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.FOV.slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.FOV.slider.minimum = 0;
		this.FOV.slider.maximum = 1;
		this.FOV.slider.value = 0.5;
		this.FOV.slider.color = "black";
		this.FOV.slider.isThumbClamped = true;
		this.FOV.slider.isThumbCircle = true;        
		this.FOV.slider.hoverCursor = "grab";
		this.FOV.slider.color = this.isDark?"#23272A":"#DEE4E7";
		this.FOV.slider.thumbColor = this.isDark?"#DEE4E7":"#23272A";
		this.FOV.slider.background = this.isDark?"#23272A":"#DEE4E7";	    
		this.FOV.slider.height = "25px";
		this.FOV.slider.width = "130px";
		//this.FOV.slider.thumbWidth = "20px"
		this.FOV.slider.rotation = -Math.PI/2;
		this.FOV.slider.onValueChangedObservable.add((value) => {
			engine.setCameraFOV((1 - value) * 80 + 20);
		});
		this.FOV.container.addControl(this.FOV.slider);


		this.FOV.btnPlus = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/icon/"+(this.isDark?"dark":"light")+"/fov_plus.png");
		this.FOV.btnPlus.width = "30px";
		this.FOV.btnPlus.height = "30px";
		this.FOV.btnPlus.color = "transparent";
		this.FOV.btnPlus.hoverCursor = "pointer";
		this.FOV.btnPlus.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;        
		this.FOV.btnPlus.onPointerClickObservable.add(() => {
			this.FOV.slider.value += 0.05;
		});
		this.FOV.container.addControl(this.FOV.btnPlus);
		
		this.FOV.btnMinus = new BABYLON.GUI.Button.CreateImageOnlyButton("btnMinus", "./asset/icon/"+(this.isDark?"dark":"light")+"/fov_minus.png");
		this.FOV.btnMinus.width = "30px";
		this.FOV.btnMinus.height = "30px";
		this.FOV.btnMinus.color = "transparent";
		this.FOV.btnMinus.hoverCursor = "pointer";
		this.FOV.btnMinus.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
		this.FOV.btnMinus.onPointerClickObservable.add(() => {
			this.FOV.slider.value -= 0.05;
		});	
		this.FOV.container.addControl(this.FOV.btnMinus);

		
	} 

	initMenuNav()
	{
		//StackPanel cho Menu (phai/duoi)
		this.panel = new BABYLON.GUI.StackPanel();
		this.panel.isVertical = false;
		//this.panel.width = "240px";
		this.panel.height = "160px";
		this.panel.horizontalAlignment = 1;//BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.panel.verticalAlignment = 1;
		this.panel.zIndex = 2;
		//this.panel.isPointerBlocker = true;			
		engine.advancedTexture.addControl(this.panel);


		//Nut an/hien UI
		this.btnUI = {};
		this.btnUI.btn = new BABYLON.GUI.Button();
		this.btnUI.btn.width = "55px";
		this.btnUI.btn.height = "35px";
		this.btnUI.btn.paddingRight = "10px";
		this.btnUI.btn.paddingLeft = "10px";
		this.btnUI.btn.top = "30%";
		this.btnUI.btn.color = "transparent";
		this.btnUI.btn.background = "transparent";
		this.btnUI.btn.hoverCursor = "pointer";
		this.btnUI.btn.zIndex = 2;    
		this.btnUI.imgUIOn = new BABYLON.GUI.Image("imgUIOn","./asset/icon/"+(this.isDark?"dark":"light")+"/eye_on.png");
		this.btnUI.btn.addControl(this.btnUI.imgUIOn);
		this.btnUI.imgUIOff = new BABYLON.GUI.Image("imgUIOff","./asset/icon/"+(this.isDark?"dark":"light")+"/eye_off.png");
		this.btnUI.imgUIOff.isVisible = false;
		this.btnUI.btn.addControl(this.btnUI.imgUIOff);
		this.btnUI.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.btnUI.imgUIOn.isVisible === true)
			{
				this.btnUI.imgUIOff.isVisible = true;
				this.btnUI.imgUIOn.isVisible = false; 
				//----               
				engine.animation.fadeAnimOut(this.btnFullScreen.btn);
				engine.animation.fadeAnimOut(this.btnSetting.btn);
				engine.animation.fadeAnimOut(this.btnMap.btn);
				engine.animation.fadeAnimOut(this.btnSound.btn);
				engine.animation.fadeAnimOut(this.btnRotation.btn);
				engine.animation.fadeAnimOut(this.FOV.container);
				engine.animation.fadeAnimOut(this.logoNav.container);
				engine.animation.fadeAnimOut(this.settings.container);			
				engine.animation.fadeAnimOut(this.areaNav.container);
				
				setTimeout(() => {
				this.btnFullScreen.btn.isVisible = false;
				this.btnSetting.btn.isVisible = false;
				this.btnMap.btn.isVisible = false;
				this.btnSound.btn.isVisible = false;
				this.btnRotation.btn.isVisible = false;
				this.FOV.container.isVisible = false;
				this.logoNav.container.isVisible = false;
				this.settings.container.isVisible = false;
				this.areaNav.container.isVisible = false;
				}, 400);
				//----add link

				engine.map.showMiniMap(false);

				for (let i=0; i<engine.loc.link.length; i++)
				{
					engine.animation.fadeAnimOut(engine.loc.link[i].button);
					setTimeout(() => {
					engine.loc.link[i].button.isVisible = false;
					}, 400);  
				}

				for (let i=0; i<engine.loc.info.length; i++)
				{
					engine.animation.fadeAnimOut(engine.loc.info[i].button);
					setTimeout(() => {
					engine.loc.info[i].button.isVisible = false;
					}, 400);  
				}   		
			}
			else
			{
				this.btnUI.imgUIOff.isVisible = false;
				this.btnUI.imgUIOn.isVisible = true;
				this.btnFullScreen.btn.isVisible = true;
				this.btnSetting.btn.isVisible = true;
				this.btnMap.btn.isVisible = true;
				this.btnSound.btn.isVisible = true;
				this.btnRotation.btn.isVisible = true;
				this.FOV.container.isVisible = true;
				this.logoNav.container.isVisible = true;
				this.settings.container.isVisible = true;
				this.areaNav.container.isVisible = true;

				engine.animation.fadeAnimIn(this.btnFullScreen.btn);
				engine.animation.fadeAnimIn(this.btnSetting.btn);
				engine.animation.fadeAnimIn(this.btnMap.btn);
				engine.animation.fadeAnimIn(this.btnSound.btn);
				engine.animation.fadeAnimIn(this.btnRotation.btn);
				engine.animation.fadeAnimIn(this.FOV.container);
				engine.animation.fadeAnimIn(this.logoNav.container);
				engine.animation.fadeAnimIn(this.settings.container);
				engine.animation.fadeAnimIn(this.areaNav.container);
				

				//----add link
				engine.map.showMiniMap(true);

				for (let i=0; i<engine.loc.link.length; i++)
				{                    
					engine.loc.link[i].button.isVisible = true; 
					engine.animation.fadeAnimIn(engine.loc.link[i].button);
				}

				for (let i=0; i<engine.loc.info.length; i++)
				{                    
					engine.loc.info[i].button.isVisible = true; 
					engine.animation.fadeAnimIn(engine.loc.info[i].button);
				}       		
			}
		});
		this.panel.addControl(this.btnUI.btn);
		

		//Nut fullscreen
		this.btnFullScreen = {};
		this.btnFullScreen.btn = new BABYLON.GUI.Button();
		this.btnFullScreen.btn.width = "55px";
		this.btnFullScreen.btn.height = "35px";
		this.btnFullScreen.btn.paddingRight = "10px";
		this.btnFullScreen.btn.paddingLeft = "10px";
		this.btnFullScreen.btn.top = "30%"
		this.btnFullScreen.btn.background = "transparent"
		this.btnFullScreen.btn.color = "transparent"
		this.btnFullScreen.btn.hoverCursor = "pointer";
		this.btnFullScreen.btn.zIndex = 2;       
		this.btnFullScreen.imgFullScreenOn = new BABYLON.GUI.Image("imgFullScreenOn","./asset/icon/"+(this.isDark?"dark":"light")+"/fullscreen_on.png");
		this.btnFullScreen.btn.addControl(this.btnFullScreen.imgFullScreenOn);
		this.btnFullScreen.imgFullScreenOff = new BABYLON.GUI.Image("imgFullScreenOff","./asset/icon/"+(this.isDark?"dark":"light")+"/fullscreen_off.png");
		this.btnFullScreen.imgFullScreenOff.isVisible = false;
		this.btnFullScreen.btn.addControl(this.btnFullScreen.imgFullScreenOff);
		this.btnFullScreen.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.btnFullScreen.imgFullScreenOn.isVisible === true)
			{
				this.btnFullScreen.imgFullScreenOff.isVisible = true;
				this.btnFullScreen.imgFullScreenOn.isVisible = false;  
				
				engine.engine.enterFullscreen();	
			}
			else
			{
				this.btnFullScreen.imgFullScreenOff.isVisible = false;
				this.btnFullScreen.imgFullScreenOn.isVisible = true;

				engine.engine.exitFullscreen();

			}
		});
		this.panel.addControl(this.btnFullScreen.btn);

		//Nut setting
		this.btnSetting = {};
		this.btnSetting.btn = new BABYLON.GUI.Button();
		this.btnSetting.btn.width = "55px";
		this.btnSetting.btn.height = "35px";
		this.btnSetting.btn.paddingRight = "10px";
		this.btnSetting.btn.paddingLeft = "10px";
		this.btnSetting.btn.top = "30%";
		this.btnSetting.btn.color = "transparent";
		this.btnSetting.btn.background = "transparent";
		this.btnSetting.btn.hoverCursor = "pointer";
		this.btnSetting.btn.zIndex = 2;        
		this.btnSetting.imgSetting = new BABYLON.GUI.Image("imgSetting","./asset/icon/"+(this.isDark?"dark":"light")+"/setting.png");
		this.btnSetting.btn.addControl(this.btnSetting.imgSetting);
		this.btnSetting.btn.onPointerClickObservable.add(() => {
			this.showSettingPanel(!this.settings.isShow);
		});
		this.panel.addControl(this.btnSetting.btn);
	   
		//Thanh sound
		this.btnSound = {};
		this.btnSound.slider = new BABYLON.GUI.Slider();
		this.btnSound.slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
		this.btnSound.slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
		this.btnSound.slider.minimum = 0;
		this.btnSound.slider.maximum = 1;
		this.btnSound.slider.value = 0;
		this.btnSound.slider.color = "black";
		this.btnSound.slider.isThumbClamped = true;
		this.btnSound.slider.isThumbCircle = true;
		this.btnSound.slider.hoverCursor = "grab";
		this.btnSound.slider.isPointerBlocker = true;
		this.btnSound.slider.thumbColor = this.isDark?"#DEE4E7":"#23272A";	
		this.btnSound.slider.background = this.isDark?"#777777":"#ccc1bf";	
		this.btnSound.slider.color = this.isDark?"#23272A":"#DEE4E7";
		this.btnSound.slider.height = "25px";
		this.btnSound.slider.width = "120px";
		this.btnSound.slider.top = "-100px"
		this.btnSound.slider.left = "-133px"
		this.btnSound.slider.rotation = -Math.PI/2;
		this.btnSound.slider.isVisible = false;
		this.btnSound.slider.zIndex = 2;
		this.btnSound.slider.onPointerMoveObservable.add(() => {
			this.btnSound.slider.isVisible = true;
		});
		this.btnSound.slider.onPointerOutObservable.add(() => {
			this.btnSound.slider.isVisible = false;
		});
		this.btnSound.slider.onValueChangedObservable.add((evt) => {
			engine.music.setVolume(evt);

			if (evt > 0.66)
			{
				if (!this.btnSound.imgSoundOn3.isVisible)
				{
					this.btnSound.imgSoundOn3.isVisible = true;
					this.btnSound.imgSoundOn2.isVisible = false;
					this.btnSound.imgSoundOn1.isVisible = false;
					this.btnSound.imgSoundOff.isVisible = false;
				}
			}
			else if (evt > 0.33)
			{
				if (!this.btnSound.imgSoundOn2.isVisible)
				{
					this.btnSound.imgSoundOn3.isVisiblep = false;
					this.btnSound.imgSoundOn2.isVisible = true;
					this.btnSound.imgSoundOn1.isVisible = false;
					this.btnSound.imgSoundOff.isVisible = false;
				}
			}
			else if (evt > 0)
			{
				if (!this.btnSound.imgSoundOn1.isVisible)
				{
					this.btnSound.imgSoundOn3.isVisible = false;
					this.btnSound.imgSoundOn2.isVisible = false;
					this.btnSound.imgSoundOn1.isVisible = true;
					this.btnSound.imgSoundOff.isVisible = false;
				}
			}
			else
			{
				if (!this.btnSound.imgSoundOff.isVisible)
				{
					this.btnSound.imgSoundOn3.isVisible = false;
					this.btnSound.imgSoundOn2.isVisible = false;
					this.btnSound.imgSoundOn1.isVisible = false;
					this.btnSound.imgSoundOff.isVisible = true;
				}
			}
		});
		engine.advancedTexture.addControl(this.btnSound.slider);


		//Nut sound   
		this.btnSound.btn = new BABYLON.GUI.Button();
		this.btnSound.btn.width = "55px";
		this.btnSound.btn.height = "35px";
		this.btnSound.btn.paddingRight = "10px";
		this.btnSound.btn.paddingLeft = "10px";
		this.btnSound.btn.top = "30%";
		this.btnSound.btn.color = "transparent";
		this.btnSound.btn.background = "transparent";
		this.btnSound.btn.hoverCursor = "pointer";
		this.btnSound.btn.zIndex = 2;       
		this.btnSound.imgSoundOn1 = new BABYLON.GUI.Image("imgSoundOn","./asset/icon/"+(this.isDark?"dark":"light")+"/sound_on1.png");
		this.btnSound.imgSoundOn1.isVisible = false;
		this.btnSound.btn.addControl(this.btnSound.imgSoundOn1);
		this.btnSound.imgSoundOn2 = new BABYLON.GUI.Image("imgSoundOn","./asset/icon/"+(this.isDark?"dark":"light")+"/sound_on2.png");
		this.btnSound.imgSoundOn2.isVisible = false;
		this.btnSound.btn.addControl(this.btnSound.imgSoundOn2);
		this.btnSound.imgSoundOn3 = new BABYLON.GUI.Image("imgSoundOn","./asset/icon/"+(this.isDark?"dark":"light")+"/sound_on3.png");
		this.btnSound.imgSoundOn3.isVisible = false;
		this.btnSound.btn.addControl(this.btnSound.imgSoundOn3);
		this.btnSound.imgSoundOff = new BABYLON.GUI.Image("imgSoundOff","./asset/icon/"+(this.isDark?"dark":"light")+"/sound_off.png");
		this.btnSound.btn.addControl(this.btnSound.imgSoundOff);
		this.btnSound.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.btnSound.imgSoundOff.isVisible === false) // turn off
			{
				
				this.btnSound.imgSoundOff.isVisible = true;
				this.btnSound.imgSoundOn3.isVisible = false;
				this.btnSound.imgSoundOn2.isVisible = false;
				this.btnSound.imgSoundOn1.isVisible = false;
				this.btnSound.slider.value = 0;
				engine.music.turn(false);
			}
			else  // turn on
			{
				this.btnSound.imgSoundOff.isVisible = false;
				this.btnSound.slider.value = engine.music.volume;

				if (this.btnSound.slider.value > 0.66)		
					this.btnSound.imgSoundOn3.isVisible = true;
				else if (this.btnSound.slider.value > 0.33)
					this.btnSound.imgSoundOn2.isVisible = true;
				else if (this.btnSound.slider.value > 0)
					this.btnSound.imgSoundOn1.isVisible = true;

				engine.music.turn(true);
			}
		});
		this.btnSound.btn.onPointerMoveObservable.add(() => {
			this.btnSound.slider.isVisible = true;       	
		});


		this.btnSound.btn.onPointerOutObservable.add(() => {
			setTimeout(() => {
				//if()
				this.btnSound.slider.isVisible = false;
			},3000);            
		});
		this.panel.addControl(this.btnSound.btn);



		//Nut bat/tat tu xoay
		this.btnRotation = {};
		this.btnRotation.btn = new BABYLON.GUI.Button();
		this.btnRotation.btn.width = "55px";
		this.btnRotation.btn.height = "35px";
		this.btnRotation.btn.paddingRight = "10px";
		this.btnRotation.btn.paddingLeft = "10px";
		this.btnRotation.btn.top = "30%";
		this.btnRotation.btn.color = "transparent";
		this.btnRotation.btn.background = "transparent";
		this.btnRotation.btn.hoverCursor = "pointer";
		this.btnRotation.btn.zIndex = 2; 
		this.btnRotation.imgRotationOn = new BABYLON.GUI.Image("imgRotationOn","./asset/icon/"+(this.isDark?"dark":"light")+"/rotation_on.png");
		this.btnRotation.btn.addControl(this.btnRotation.imgRotationOn);
		this.btnRotation.imgRotationOff = new BABYLON.GUI.Image("imgRotationOff","./asset/icon/"+(this.isDark?"dark":"light")+"/rotation_off.png");
		this.btnRotation.imgRotationOff.isVisible = false;
		this.btnRotation.btn.addControl(this.btnRotation.imgRotationOff);
		this.btnRotation.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.btnRotation.imgRotationOn.isVisible === true)
			{
				this.btnRotation.imgRotationOff.isVisible = true;
				this.btnRotation.imgRotationOn.isVisible = false;  
				engine.camera.useAutoRotationBehavior = false;  		
			}
			else
			{
				this.btnRotation.imgRotationOff.isVisible = false;
				this.btnRotation.imgRotationOn.isVisible = true;
				engine.camera.useAutoRotationBehavior = true;                 		
			}
		});
		this.panel.addControl(this.btnRotation.btn);


		//Nut mo map
		this.btnMap = {};
		this.btnMap.btn = new BABYLON.GUI.Button();
		this.btnMap.btn.width = "55px";
		this.btnMap.btn.height = "35px";
		this.btnMap.btn.paddingRight = "10px";
		this.btnMap.btn.paddingLeft = "10px";
		this.btnMap.btn.top = "30%";
		this.btnMap.btn.color = "transparent";
		this.btnMap.btn.background = "transparent";
		this.btnMap.btn.hoverCursor = "pointer";
		this.btnMap.btn.zIndex = 2;       
		this.btnMap.imgMap = new BABYLON.GUI.Image("imgMap","./asset/icon/"+(this.isDark?"dark":"light")+"/map.png");
		this.btnMap.btn.addControl(this.btnMap.imgMap);
		this.btnMap.btn.isPointerBlocker = true;
		this.btnMap.btn.onPointerClickObservable.add(() => {
			this.onShow = "map";
			// Show map
			engine.map.showTotalMap(true);
			// Hidden interface
			this.showInterfaces(false);
		});
		this.panel.addControl(this.btnMap.btn);



		this.panel.children.reverse();  //Reverse panel ĐỂ CUỐI PANEL!!!
	}

	initSettings()
	{
		//Nut cai dat
		this.settings = {};		
		this.settings.isShow = false;
		this.settings.container = new BABYLON.GUI.ScrollViewer();
		this.settings.container.isPointerBlocker = true;
		this.settings.container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.settings.container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
		this.settings.container.width = "300px";
		this.settings.container.height = "400px";
		this.settings.container.leftInPixels = 400;
		this.settings.container.background = this.isDark?"#23272A":"#DEE4E7";     
		this.settings.container.thickness = 0;
		this.settings.container.zIndex = 4;
		this.settings.container.cornerRadius = 5;
		engine.advancedTexture.addControl(this.settings.container);
		
		//Khung cai dat Grid (dieu chinh so dong Setting)
		this.settings.selPanel = new BABYLON.GUI.SelectionPanel("settings");
		this.settings.selPanel.headerColor = "white";
		this.settings.selPanel.color = "white";
		this.settings.selPanel.background = this.isDark?"#23272A":"#DEE4E7";
		this.settings.selPanel.headerColor = this.isDark?"#ffffff":"#000000";
		
		
		this.settings.selPanel.thickness = 0;   
		this.settings.selPanel.height = "470px";
		
		//this.settings.selPanel.barColor = "#4F7DF2";
		this.settings.container.addControl(this.settings.selPanel);

		this.settings.effectsGroup = new BABYLON.GUI.CheckboxGroup(engine.language.get('effect'));


		this.settings.effectsGroup.addCheckbox(engine.language.get('lenflare'), (isCheck) => {
			engine.effect.turnLensFlare(isCheck);
		});
		this.settings.effectsGroup.addCheckbox(engine.language.get('particle'), (isCheck) => {
			engine.effect.turnParticle(isCheck);
		});
		this.settings.effectsGroup.addCheckbox(engine.language.get('bloom'), (isCheck) => {
			engine.effect.turnBloom(isCheck);
		});
		this.settings.effectsGroup.addCheckbox(engine.language.get('motionblur'), (isCheck) => {
			engine.effect.turnMosionBlur(isCheck);
		});
		this.settings.effectsGroup.addCheckbox(engine.language.get('antialias'), (isCheck) => {
			engine.effect.turnAntiAlias(isCheck);
		});

		let numloop = this.settings.effectsGroup.selectors.length;
		for (let i=0; i<numloop; i++)
		{
			let spnl = this.settings.effectsGroup.selectors[i];
			spnl.color = this.isDark?"#ccc1bf":"#777777";
			spnl.onPointerMoveObservable.add(() => {
				spnl.color = this.isDark?"#ffffff":"#000000";
				spnl.hoverCursor = "pointer";
			});
			spnl.onPointerOutObservable.add(() => {
				spnl.color = this.isDark?"#ccc1bf":"#777777";
			});
		}

		this.settings.projectionsGroup = new BABYLON.GUI.RadioGroup(engine.language.get('cameratype'));
		this.settings.projectionsGroup.addRadio(engine.language.get('normal'),engine.setCameraType, true);
		//this.settings.projectionsGroup.addRadio(engine.language.get('ortho'), engine.setCameraType);
		this.settings.projectionsGroup.addRadio(engine.language.get('fisheye'), engine.setCameraType);
		this.settings.projectionsGroup.addRadio(engine.language.get('tinyplanet'), engine.setCameraType);
		this.settings.projectionsGroup.addRadio(engine.language.get('tubeview'), engine.setCameraType);

		numloop = this.settings.projectionsGroup.selectors.length;
		for (let i=0; i<numloop; i++)
		{
			let spnl = this.settings.projectionsGroup.selectors[i];
			spnl.color = this.isDark?"#ccc1bf":"#777777";
			spnl.onPointerMoveObservable.add(() => {
				spnl.color = this.isDark?"#ffffff":"#000000";
				spnl.hoverCursor = "pointer";
			});
			spnl.onPointerOutObservable.add(() => {
				spnl.color = this.isDark?"#ccc1bf":"#777777";
			});
		}

		this.settings.themesGroup = new BABYLON.GUI.RadioGroup(engine.language.get('themes'));
		this.settings.themesGroup.addRadio(engine.language.get('darkmode'), (evt)=>{ this.changeTheme(evt)}, this.isDark);
		this.settings.themesGroup.addRadio(engine.language.get('lightmode'), (evt)=>{ this.changeTheme(evt)}, !this.isDark);

		numloop = this.settings.themesGroup.selectors.length;
		for (let i=0; i<numloop; i++)
		{
			let spnl = this.settings.themesGroup.selectors[i];
			spnl.color = this.isDark?"#ccc1bf":"#777777";
			spnl.onPointerMoveObservable.add(() => {
				spnl.color = this.isDark?"#ffffff":"#000000";
				spnl.hoverCursor = "pointer";
			});
			spnl.onPointerOutObservable.add(() => {
				spnl.color = this.isDark?"#ccc1bf":"#777777";
			});
		}

		this.settings.selPanel.addGroup(this.settings.projectionsGroup);
		this.settings.selPanel.addGroup(this.settings.themesGroup);
		this.settings.selPanel.addGroup(this.settings.effectsGroup);
		
	}  

	initAreaNav()
	{
		//Khung suon khu vuc
		this.areaNav = {};
		this.areaNav.container = new BABYLON.GUI.Rectangle();
		this.areaNav.container.isPointerBlocker = true;
		this.areaNav.container.width = "300px";
		this.areaNav.container.height = "350px";
		this.areaNav.container.top = "320px";
		this.areaNav.container.cornerRadius = 5;
		this.areaNav.container.verticalAlignment = 1;
		this.areaNav.container.horizontalAlignment = 0;
		this.areaNav.container.thickness = 0;
		this.areaNav.container.zIndex = 4;	
		engine.advancedTexture.addControl(this.areaNav.container);

		//Nut bat/tat khu vuc
		this.areaNav.btn = new BABYLON.GUI.Button();
		//this.areaNav.btn.width = "40px"
		this.areaNav.btn.height = "30px";
		this.areaNav.btn.color = this.isDark?"#23272a":"#DEE4E7";
		this.areaNav.btn.verticalAlignment = -1;
		this.areaNav.btn.hoverCursor = "pointer";
		//this.areaNav.btn.cornerRadius = 2;
		this.areaNav.btn.thickness = 2;
		this.areaNav.imgArrowOpen = new BABYLON.GUI.Image("imgArrowOpen","./asset/icon/"+(this.isDark?"dark":"light")+"/double_arrow_up.png");
		this.areaNav.imgArrowOpen.width = "40px";
		this.areaNav.btn.addControl(this.areaNav.imgArrowOpen);
		this.areaNav.imgArrowClose = new BABYLON.GUI.Image("imgArrowClose","./asset/icon/"+(this.isDark?"dark":"light")+"/double_arrow_down.png");
		this.areaNav.imgArrowClose.width = "40px";
		this.areaNav.imgArrowClose.isVisible = false;
		this.areaNav.btn.addControl(this.areaNav.imgArrowClose);
		this.areaNav.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.areaNav.imgArrowOpen.isVisible === true)
			{
				this.areaNav.imgArrowClose.isVisible = true;
				this.areaNav.imgArrowOpen.isVisible = false;
				this.areaNav.container.zIndex = 6;  
				engine.animation.drawerAnimY(this.areaNav.container, 320, -1);	
			}
			else
			{
				this.areaNav.imgArrowClose.isVisible = false;
				this.areaNav.imgArrowOpen.isVisible = true;
				this.areaNav.container.zIndex = 4;  
				engine.animation.drawerAnimY(this.areaNav.container, -1, 320);	                		
			}
		});

		this.areaNav.container.addControl(this.areaNav.btn);
		
		//Scroll khu vuc
		this.areaNav.scroll = new BABYLON.GUI.ScrollViewer();
		this.areaNav.scroll.top = "30px";
		//this.areaNav.scroll.background = "";
		this.areaNav.scroll.background = this.isDark?"#23272A":"#DEE4E7";
		this.areaNav.scroll.thickness = 0;
		this.areaNav.container.addControl(this.areaNav.scroll);

		//Grid khu vuc
		this.areaNav.grid = new BABYLON.GUI.Grid();
		this.areaNav.grid.isPointerBlocker = true;
		//this.areaNav.grid.height = "415px"
		//this.areaNav.grid.background = "#2C2F33";
		this.areaNav.grid.color = "white";
		this.areaNav.grid.thickness = 0;
		this.areaNav.grid.addColumnDefinition(1);
		this.areaNav.grid.addRowDefinition(60, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.grid.addRowDefinition(32, true);
		this.areaNav.scroll.addControl(this.areaNav.grid);


		this.areaNav.localTitle = new BABYLON.GUI.TextBlock();
		this.areaNav.localTitle.text = engine.language.get("localtitle");
		this.areaNav.localTitle.fontStyle = "bold";			
		this.areaNav.localTitle.underline = true;
		this.areaNav.localTitle.textWrapping = true;					
		this.areaNav.localTitle.fontSize = "22px";	
		this.areaNav.localTitle.color = this.isDark?"#FFFFFF":"#000000";	
		this.areaNav.grid.addControl(this.areaNav.localTitle, 0, 0);


		this.areaNav.areaADV = new BABYLON.GUI.TextBlock();
		this.areaNav.areaADV.text = engine.language.get("localADV");
		this.areaNav.areaADV.hoverCursor = "pointer";
		this.areaNav.areaADV.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaADV.onPointerMoveObservable.add(() => {
			this.areaNav.areaADV.color =  this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaADV.onPointerOutObservable.add(() => {
			this.areaNav.areaADV.color =  this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaADV.onPointerClickObservable.add(() => {
			engine.loc.goto('CADV');
		});
		this.areaNav.grid.addControl(this.areaNav.areaADV, 1, 0);


		this.areaNav.areaNT = new BABYLON.GUI.TextBlock();
		this.areaNav.areaNT.text = engine.language.get("localNT");
		this.areaNav.areaNT.hoverCursor = "pointer";
		this.areaNav.areaNT.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaNT.onPointerMoveObservable.add(() => {
			this.areaNav.areaNT.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaNT.onPointerOutObservable.add(() => {
			this.areaNav.areaNT.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaNT.onPointerClickObservable.add(() => {
			engine.loc.goto('CNT');
		});
		this.areaNav.grid.addControl(this.areaNav.areaNT, 2, 0);		


		this.areaNav.areaA = new BABYLON.GUI.TextBlock();
		this.areaNav.areaA.text = engine.language.get("localA");
		this.areaNav.areaA.hoverCursor = "pointer";
		this.areaNav.areaA.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaA.onPointerMoveObservable.add(() => {
			this.areaNav.areaA.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaA.onPointerOutObservable.add(() => {
			this.areaNav.areaA.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaA.onPointerClickObservable.add(() => {
			engine.loc.goto('A01');
		});
		this.areaNav.grid.addControl(this.areaNav.areaA, 3, 0);


		this.areaNav.areaB = new BABYLON.GUI.TextBlock();
		this.areaNav.areaB.text = engine.language.get("localB");
		this.areaNav.areaB.hoverCursor = "pointer";
		this.areaNav.areaB.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaB.onPointerMoveObservable.add(() => {
			this.areaNav.areaB.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaB.onPointerOutObservable.add(() => {
			this.areaNav.areaB.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaB.onPointerClickObservable.add(() => {
			engine.loc.goto('B01');
		});
		this.areaNav.grid.addControl(this.areaNav.areaB, 4, 0);


		this.areaNav.areaC = new BABYLON.GUI.TextBlock();
		this.areaNav.areaC.text = engine.language.get("localC");
		this.areaNav.areaC.hoverCursor = "pointer";
		this.areaNav.areaC.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaC.onPointerMoveObservable.add(() => {
			this.areaNav.areaC.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaC.onPointerOutObservable.add(() => {
			this.areaNav.areaC.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaC.onPointerClickObservable.add(() => {
			engine.loc.goto('C01');
		});
		this.areaNav.grid.addControl(this.areaNav.areaC, 5, 0);


		this.areaNav.areaD = new BABYLON.GUI.TextBlock();
		this.areaNav.areaD.text = engine.language.get("localD");
		this.areaNav.areaD.hoverCursor = "pointer";
		this.areaNav.areaD.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaD.onPointerMoveObservable.add(() => {
			this.areaNav.areaD.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaD.onPointerOutObservable.add(() => {
			this.areaNav.areaD.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaD.onPointerClickObservable.add(() => {
			engine.loc.goto('D01');
		});
		this.areaNav.grid.addControl(this.areaNav.areaD, 6, 0);


		this.areaNav.areaE = new BABYLON.GUI.TextBlock();
		this.areaNav.areaE.text = engine.language.get("localE");
		this.areaNav.areaE.hoverCursor = "pointer";
		this.areaNav.areaE.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaE.onPointerMoveObservable.add(() => {
			this.areaNav.areaE.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaE.onPointerOutObservable.add(() => {
			this.areaNav.areaE.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaE.onPointerClickObservable.add(() => {
			engine.loc.goto('E01');
		});
		this.areaNav.grid.addControl(this.areaNav.areaE, 7, 0);


		this.areaNav.areaPL = new BABYLON.GUI.TextBlock();
		this.areaNav.areaPL.text = engine.language.get("localPL");
		this.areaNav.areaPL.hoverCursor = "pointer";
		this.areaNav.areaPL.color = this.isDark?"#ccc1bf":"#777777";
		this.areaNav.areaPL.onPointerMoveObservable.add(() => {
			this.areaNav.areaPL.color = this.isDark?"#ffffff":"#000000";
		});
		this.areaNav.areaPL.onPointerOutObservable.add(() => {
			this.areaNav.areaPL.color = this.isDark?"#ccc1bf":"#777777";
		});
		this.areaNav.areaPL.onPointerClickObservable.add(() => {
			engine.loc.goto('GX1');
		});
		this.areaNav.grid.addControl(this.areaNav.areaPL, 8, 0);
	}

	initInfoPanel()
	{
		
		//Scrollview info
		this.infoScroll = new BABYLON.GUI.ScrollViewer();
		this.infoScroll.width = "700px";
		this.infoScroll.height = "600px";
		this.infoScroll.background = "white";
		this.infoScroll.zIndex = 3;
		this.infoScroll.cornerRadius = 10;
		this.infoScroll.isVisible = false;
		this.infoScroll.isPointerBlocker = true;
		engine.advancedTexture.addControl(this.infoScroll);

		//Khung ben trong scroll
		this.infoContainer = new BABYLON.GUI.Rectangle();
		this.infoContainer.height = "800px";
		this.infoScroll.addControl(this.infoContainer);
		
		//Khung chua anh
		this.infoImgContainer = new BABYLON.GUI.Rectangle();
		this.infoImgContainer.width = "640px";
		this.infoImgContainer.height = "360px";
		this.infoImgContainer.top = "20px";
		this.infoImgContainer.verticalAlignment = 0;
		this.infoContainer.addControl(this.infoImgContainer);
		
		//Anh cua info
		this.infoImage = new BABYLON.GUI.Image("imgInfo","./asset/logo.png");
		this.infoImage.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
		//this.infoImage.top = "-100px";
		this.infoImgContainer.addControl(this.infoImage);

		//Khung chua text
		this.infoTextContainer = new BABYLON.GUI.Rectangle();
		this.infoTextContainer.width = "640px";
		this.infoTextContainer.height = "380px";
		this.infoTextContainer.top = "20px";
		this.infoTextContainer.verticalAlignment = 0;
		this.infoTextContainer.topInPixels = 400;
		this.infoContainer.addControl(this.infoTextContainer);

		//Text cua info
		this.infoText = new BABYLON.GUI.TextBlock();
		this.infoText.text = "";
		this.infoText.textWrapping = true;
		this.infoText.textHorizontalAlignment = 0;	
		this.infoText.textVerticalAlignment = 0;
		this.infoTextContainer.addControl(this.infoText);
	}

	initRectBlock()
	{

		//Rect block background
		this.rectBlock = new BABYLON.GUI.Rectangle();
		this.rectBlock.color = "transparent";
		this.rectBlock.background = "black";
		this.rectBlock.alpha = "0";
		this.rectBlock.zIndex = 2;
		this.rectBlock.isPointerBlocker = true;
		this.rectBlock.isVisible = false;
		this.rectBlock.onPointerClickObservable.add(() => {
			
			switch (this.onShow)
			{
				case "info":
				{	
					this.showInfoPanel(false);
					break;
				}
				case "map":
				{
				
					// Hidden map
					engine.animation.animBlock(false);
					engine.animation.fadeAnimOut(engine.map.totalMap);
					setTimeout(() => {	
						engine.map.totalMap.isVisible = false;
					},400);
					this.showInterfaces(true);
					break;
				}
				case "setting":
				{
					this.showSettingPanel(false);
					break;
				}
			}
			
		});
		engine.advancedTexture.addControl(this.rectBlock);

	}

	changeTheme(value)
	{
		if (engine.onInit) // ignore first time called
			return;

		if (value === 0)
			this.isDark = true;
		else // value = 1
			this.isDark = false;

		let url = new URL(window.location.href);
		let param = url.searchParams;
		param.set("dark", this.isDark);
		url.search = param.toString();
		window.location.href = url.toString();
	}
	
	showInterfaces(toggle)
	{
	
		if (toggle)
		{
			this.btnUI.btn.isVisible = true;
			this.btnFullScreen.btn.isVisible = true;
			this.btnSetting.btn.isVisible = true;
			this.btnMap.btn.isVisible = true;
			this.btnSound.btn.isVisible = true;
			this.btnRotation.btn.isVisible = true;
			this.FOV.container.isVisible = true;	
			this.logoNav.container.isVisible = true;	
			this.settings.container.isVisible = true;	
			this.areaNav.container.isVisible = true;	
			

			engine.animation.fadeAnimIn(this.btnUI.btn);
			engine.animation.fadeAnimIn(this.btnFullScreen.btn);
			engine.animation.fadeAnimIn(this.btnSetting.btn);
			engine.animation.fadeAnimIn(this.btnSound.btn);
			engine.animation.fadeAnimIn(this.btnMap.btn);
			engine.animation.fadeAnimIn(this.btnRotation.btn);
			engine.animation.fadeAnimIn(this.FOV.container);
			engine.animation.fadeAnimIn(this.logoNav.container);
			engine.animation.fadeAnimIn(this.settings.container);
			engine.animation.fadeAnimIn(this.areaNav.container);
			engine.map.showMiniMap(true);
			
			
			for (let i=0; i< engine.loc.link.length; i++)
			{
				engine.loc.link[i].button.isVisible = true;
				engine.animation.fadeAnimIn(engine.loc.link[i].button);
			}
			for (let i=0; i< engine.loc.info.length; i++)
			{
				engine.loc.info[i].button.isVisible = true;
				engine.animation.fadeAnimIn(engine.loc.info[i].button);
			}
		}
		else
		{
			engine.animation.fadeAnimOut(this.btnUI.btn);
			engine.animation.fadeAnimOut(this.btnFullScreen.btn);
			engine.animation.fadeAnimOut(this.btnSetting.btn);
			engine.animation.fadeAnimOut(this.btnMap.btn);
			engine.animation.fadeAnimOut(this.btnSound.btn);
			engine.animation.fadeAnimOut(this.btnRotation.btn);
			engine.animation.fadeAnimOut(this.FOV.container);
			engine.animation.fadeAnimOut(this.logoNav.container);
			engine.animation.fadeAnimOut(this.settings.container);
			engine.animation.fadeAnimOut(this.areaNav.container);
			
			setTimeout(() => {			
				this.btnUI.btn.isVisible = false;
				this.btnFullScreen.btn.isVisible = false;
				this.btnSetting.btn.isVisible = false;
				this.btnMap.btn.isVisible = false;
				this.btnSound.btn.isVisible = false;
				this.btnRotation.btn.isVisible = false;
				this.FOV.container.isVisible = false; 
				this.logoNav.container.isVisible = false; 
				this.settings.container.isVisible = false; 
				this.areaNav.container.isVisible = false; 
			},400);
			engine.map.showMiniMap(false);
			
			for (let i=0; i<engine.loc.link.length; i++)
			{
				engine.animation.fadeAnimOut(engine.loc.link[i].button);
				setTimeout(() => {	
					engine.loc.link[i].button.isVisible = false;  
				},400);
			}
			for (let i=0; i<engine.loc.info.length; i++)
			{
				engine.animation.fadeAnimOut(engine.loc.info[i].button);
				setTimeout(() => {	// ko toi uu
					engine.loc.info[i].button.isVisible = false;  
				},400);
			}
		}
	}

	showSettingPanel(toggle)
	{
		if (detectMobile())
		{
			if (toggle)
			{
				engine.interfaces.onShow = "setting";
				engine.animation.animBlock(true);
			}
			else
			{
				engine.animation.animBlock(false);
			}
		}

		if (toggle)
		{
			engine.animation.drawerAnimX(this.settings.container, 400, -1);
		}
		else
			engine.animation.drawerAnimX(this.settings.container, -1, 400);
		this.settings.isShow = toggle;
	}

	showInfoPanel(toggle, name = "")
	{
		if (toggle)
		{
			// Change content
			this.infoImage.source = "./asset/preview/"+name+".jpg";
			this.infoText.text = engine.language.get(name);

			// Show
			this.onShow = "info";
			this.showInterfaces(false);
			this.infoScroll.isVisible = true;
			engine.animation.fadeAnimIn(this.infoScroll);
			engine.animation.animBlock(true);
		}
		else
		{	
			engine.animation.fadeAnimOut(this.infoScroll);
			engine.animation.animBlock(false);
			setTimeout(() => {
				this.infoScroll.isVisible = false;
			}, 400);
			this.showInterfaces(true);
		}
	}
}
