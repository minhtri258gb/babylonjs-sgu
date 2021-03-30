
import CheckboxDef from './Component/CheckboxDef.js';
import engine from './Engine.js'

export default class Interfaces
{
	// Forwards
	constructor()
	{
		//FPS
		// this.text = new BABYLON.GUI.TextBlock();
		// this.text.text = engine.getFps() + " fps";
		// engine.advancedTexture.addControl(this.text);

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
		engine.advancedTexture.addControl(this.logoNav.container);

		//Nut logo ve trang SGU
		this.logoNav.btnLogo = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/logo.png");
		this.logoNav.btnLogo.width = "100px";
		this.logoNav.btnLogo.height = "100px";
		this.logoNav.btnLogo.color = "transparent";
		this.logoNav.btnLogo.hoverCursor = "pointer";
		this.logoNav.btnLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;        
		this.logoNav.btnLogo.onPointerClickObservable.add(() => {
			if (confirm('Bạn có muốn chuyển hướng đến trang chủ trường Đại học Sài Gòn?')) 
				window.open("https://sgu.edu.vn");		
		});
		this.logoNav.container.addControl(this.logoNav.btnLogo);


		//Nut ngon ngu VietNam
		this.logoNav.btnLangVn = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/vn-flag.png");
		this.logoNav.btnLangVn.width = "30px";
		this.logoNav.btnLangVn.height = "20px";
		this.logoNav.btnLangVn.color = "transparent";
		this.logoNav.btnLangVn.hoverCursor = "pointer";
		this.logoNav.btnLangVn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;   
		this.logoNav.btnLangVn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.logoNav.btnLangVn.left = "15px";        
		this.logoNav.btnLangVn.onPointerClickObservable.add(() => {
			//TODO
		});
		this.logoNav.container.addControl(this.logoNav.btnLangVn);

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
			//TODO
		});
		this.logoNav.container.addControl(this.logoNav.btnLangEn);

		//StackPanel cho GUI (phai/duoi)
		this.panel = new BABYLON.GUI.StackPanel();
		this.panel.isVertical = false;
		//this.panel.width = "240px";
		this.panel.height = "160px";
		this.panel.horizontalAlignment = 1;
		this.panel.verticalAlignment = 1;
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
		this.btnUI.imgUIOn = new BABYLON.GUI.Image("imgUIOn","./asset/icon/eye_on1.png");
		this.btnUI.btn.addControl(this.btnUI.imgUIOn);
		this.btnUI.imgUIOff = new BABYLON.GUI.Image("imgUIOff","./asset/icon/eye_off1.png");
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
				
				setTimeout(() => {
				this.btnFullScreen.btn.isVisible = false;
				this.btnSetting.btn.isVisible = false;
				this.btnMap.btn.isVisible = false;
				this.btnSound.btn.isVisible = false;
				this.btnRotation.btn.isVisible = false;
				this.FOV.container.isVisible = false;
				this.logoNav.container.isVisible = false;
				}, 400);
				//----add link

				engine.animation.fadeAnimOut(engine.map.miniMap);
				setTimeout(() => {
				engine.map.miniMap.isVisible = false;
				}, 400);

				for (let i=0; i<engine.loc.link.length; i++)
				{
					engine.animation.fadeAnimOut(engine.loc.link[i].button);
					setTimeout(() => {
					engine.loc.link[i].button.isVisible = false;
					}, 400);  
				}   		
			}
			else
			{
				this.btnUI.imgUIOff.isVisible = false;
				this.btnUI.imgUIOn.isVisible = true;
				//----
				this.btnFullScreen.btn.isVisible = true;
				this.btnSetting.btn.isVisible = true;
				this.btnMap.btn.isVisible = true;
				this.btnSound.btn.isVisible = true;
				this.btnRotation.btn.isVisible = true;
				this.FOV.container.isVisible = true;
				this.logoNav.container.isVisible = true;
				engine.animation.fadeAnimIn(this.btnFullScreen.btn);
				engine.animation.fadeAnimIn(this.btnSetting.btn);
				engine.animation.fadeAnimIn(this.btnMap.btn);
				engine.animation.fadeAnimIn(this.btnSound.btn);
				engine.animation.fadeAnimIn(this.btnRotation.btn);
				engine.animation.fadeAnimIn(this.FOV.container);
				engine.animation.fadeAnimIn(this.logoNav.container);
				

				//----add link
				engine.map.miniMap.isVisible = true;
				engine.animation.fadeAnimIn(engine.map.miniMap);

				for (let i=0; i<engine.loc.link.length; i++)
				{                    
					engine.loc.link[i].button.isVisible = true; 
					engine.animation.fadeAnimIn(engine.loc.link[i].button);
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
		this.btnFullScreen.imgFullScreenOn = new BABYLON.GUI.Image("imgFullScreenOn","./asset/icon/fullscreen_on.png");
		this.btnFullScreen.btn.addControl(this.btnFullScreen.imgFullScreenOn);
		this.btnFullScreen.imgFullScreenOff = new BABYLON.GUI.Image("imgFullScreenOff","./asset/icon/fullscreen_off.png");
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
        this.settings.container.background = "#c0c0c0";
        this.settings.container.thickness = 2;
        this.settings.container.zIndex = 3;
        this.settings.container.cornerRadius = 10;
        engine.advancedTexture.addControl(this.settings.container);
        
        // //Khung cai dat Grid (dieu chinh so dong Setting)
        this.settings.selPanel = new BABYLON.GUI.SelectionPanel("settings");
        //this.settings.selPanel.background = "white";
        this.settings.selPanel.height = "399px";
        this.settings.container.addControl(this.settings.selPanel);

        this.settings.effectsGroup = new BABYLON.GUI.CheckboxGroup("Hiệu Ứng");
        this.settings.effectsGroup.addCheckbox("Lóa Sáng Mặt Trời", (isChecked) => {
            if (isChecked) {
                //TODO
                console.log()
            }
            else 
            {
               //TODO
            }
        });
        this.settings.effectsGroup.addCheckbox("Hạt Bụi Bay", (isChecked) => {
            if (isChecked) {
                //TODO
            }
            else 
            {
               //TODO
            }
        });

        this.settings.effectsGroup.addCheckbox("Sáng Viền", (isChecked) => {
            if (isChecked) {
                //TODO
            }
            else 
            {
               //TODO
            }
        });

        this.settings.effectsGroup.addCheckbox("Chuyển Động Mờ", (isChecked) => {
            if (isChecked) {
                //TODO
            }
            else 
            {
               //TODO
            }
        });

        this.settings.effectsGroup.addCheckbox("Khử Răng Cưa", (isChecked) => {
            if (isChecked) {
                //TODO
            }
            else 
            {
               //TODO
            }
        });

        this.settings.projectionsGroup = new BABYLON.GUI.RadioGroup("Góc Nhìn");
        this.settings.projectionsGroup.addRadio("Bình Thường", (chosen) => {   
            //TODO
        }, true);
        this.settings.projectionsGroup.addRadio("Trực Giao", (chosen) => {   
            //TODO
        });
        this.settings.projectionsGroup.addRadio("Cách Tâm", (chosen) => {   
            //TODO
        });
        this.settings.projectionsGroup.addRadio("Hành Tinh Tí Hon", (chosen) => {   
            //TODO
        });
        this.settings.projectionsGroup.addRadio("Dạng Ống", (chosen) => {   
            //TODO
        });

        this.settings.selPanel.addGroup(this.settings.projectionsGroup);
        this.settings.selPanel.addGroup(this.settings.effectsGroup);
        
        
        //Nut sound
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
        this.btnSetting.imgSetting = new BABYLON.GUI.Image("imgSetting","./asset/icon/setting.png");
        this.btnSetting.btn.addControl(this.btnSetting.imgSetting);
        this.btnSetting.btn.onPointerClickObservable.add(() => {
            if (this.settings.isShow === false)
            {
        	    engine.animation.drawerAnimX(this.settings.container, 400, -1);
                this.settings.isShow = true;
            }
            else
            {
                engine.animation.drawerAnimX(this.settings.container, -1, 400);
                this.settings.isShow = false;
            }
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
		this.btnSound.slider.background = "#e2e2e2";	    
		this.btnSound.slider.height = "30px";
		this.btnSound.slider.width = "120px";
		this.btnSound.slider.top = "-95px"
		this.btnSound.slider.left = "-133px"
		this.btnSound.slider.rotation = -Math.PI/2;
		this.btnSound.slider.isVisible = false;
		this.btnSound.slider.onPointerMoveObservable.add(() => {
			this.btnSound.slider.isVisible = true;
		});
		this.btnSound.slider.onPointerOutObservable.add(() => {
			this.btnSound.slider.isVisible = false;
		});
		this.btnSound.slider.onValueChangedObservable.add((evt) => {
			engine.music.setVolume(evt);

			if (evt > 0)
			{
				if (this.btnSound.imgSoundOn.isVisible === false)
				{
					this.btnSound.imgSoundOff.isVisible = false;
					this.btnSound.imgSoundOn.isVisible = true;
				}
			}
			else
			{
				if (this.btnSound.imgSoundOn.isVisible === true)
				{
					this.btnSound.imgSoundOff.isVisible = true;
					this.btnSound.imgSoundOn.isVisible = false;
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
		this.btnSound.imgSoundOn = new BABYLON.GUI.Image("imgSoundOn","./asset/icon/sound_on1.png");
		this.btnSound.imgSoundOn.isVisible = false;
		this.btnSound.btn.addControl(this.btnSound.imgSoundOn);
		this.btnSound.imgSoundOff = new BABYLON.GUI.Image("imgSoundOff","./asset/icon/sound_off1.png");
		this.btnSound.btn.addControl(this.btnSound.imgSoundOff);
		this.btnSound.btn.onPointerClickObservable.add(() => {
			//TODO
			if (this.btnSound.imgSoundOn.isVisible === true) // turn off
			{
				this.btnSound.imgSoundOff.isVisible = true;
				this.btnSound.imgSoundOn.isVisible = false;
				this.btnSound.slider.value = 0;
				engine.music.turn(false);
			}
			else  // turn on
			{
				this.btnSound.imgSoundOff.isVisible = false;
				this.btnSound.imgSoundOn.isVisible = true;
				this.btnSound.slider.value = engine.music.volume;
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
		//this.manger.GUIs["btnSound"] = btnSound;


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
		this.btnRotation.imgRotationOn = new BABYLON.GUI.Image("imgRotationOn","./asset/icon/rotation_on.png");
		this.btnRotation.btn.addControl(this.btnRotation.imgRotationOn);
		this.btnRotation.imgRotationOff = new BABYLON.GUI.Image("imgRotationOff","./asset/icon/rotation_off.png");
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
		this.btnMap.imgMap = new BABYLON.GUI.Image("imgMap","./asset/icon/map1.png");
		this.btnMap.btn.addControl(this.btnMap.imgMap);
		this.btnMap.btn.isPointerBlocker = true;
		this.btnMap.btn.onPointerClickObservable.add(() => {
			//TODO
			engine.map.totalMap.isVisible = true;
			engine.animation.fadeAnimIn(engine.map.totalMap);
			
			engine.animation.fadeAnimOut(this.btnUI.btn);
			engine.animation.fadeAnimOut(this.btnFullScreen.btn);
			engine.animation.fadeAnimOut(this.btnSetting.btn);
			engine.animation.fadeAnimOut(this.btnMap.btn);
			engine.animation.fadeAnimOut(this.btnSound.btn);
			engine.animation.fadeAnimOut(this.btnRotation.btn);
			engine.animation.fadeAnimOut(engine.map.miniMap);
			engine.animation.fadeAnimOut(this.FOV.container);
			engine.animation.fadeAnimOut(this.logoNav.container);
			
			setTimeout(() => {			
			this.btnUI.btn.isVisible = false;
			this.btnFullScreen.btn.isVisible = false;
			this.btnSetting.btn.isVisible = false;
			this.btnMap.btn.isVisible = false;
			this.btnSound.btn.isVisible = false;
			this.btnRotation.btn.isVisible = false;
			engine.map.miniMap.isVisible = false;
			this.FOV.container.isVisible = false; 
			this.logoNav.container.isVisible = false; 
			},400);
			//----add link
			
			for (let i=0; i<engine.loc.link.length; i++)
				engine.loc.link[i].button.isVisible = false;  
				  
		});
		this.panel.addControl(this.btnMap.btn);
		this.panel.children.reverse();  //Reverse panel ĐỂ CUỐI PANEL!!!

		//---FOV
		this.FOV = {};
		this.FOV.container = new BABYLON.GUI.Rectangle();
		this.FOV.container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.FOV.container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
		this.FOV.container.color = "transparent";
		this.FOV.container.width = "70px";
		this.FOV.container.height = "220px";
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
		this.FOV.slider.color = "black";
		this.FOV.slider.thumbColor = "white";
		this.FOV.slider.background = "black";	    
		this.FOV.slider.height = "30px";
		this.FOV.slider.width = "150px";
		//this.FOV.slider.thumbWidth = "20px"
		this.FOV.slider.rotation = -Math.PI/2;
		this.FOV.slider.onValueChangedObservable.add((value) => {
			engine.setCameraFOV((1 - value) * 80 + 20);
		});
		this.FOV.container.addControl(this.FOV.slider);


		this.FOV.btnPlus = new BABYLON.GUI.Button.CreateImageOnlyButton("btnPlus", "./asset/icon/fov_plus.png");
		this.FOV.btnPlus.width = "30px";
		this.FOV.btnPlus.height = "30px";
		this.FOV.btnPlus.color = "transparent";
		this.FOV.btnPlus.hoverCursor = "pointer";
		this.FOV.btnPlus.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;        
		this.FOV.btnPlus.onPointerClickObservable.add(() => {
			this.FOV.slider.value += 0.05;
		});
		this.FOV.container.addControl(this.FOV.btnPlus);
		
		this.FOV.btnMinus = new BABYLON.GUI.Button.CreateImageOnlyButton("btnMinus", "./asset/icon/fov_minus.png");
		this.FOV.btnMinus.width = "30px";
		this.FOV.btnMinus.height = "30px";
		this.FOV.btnMinus.color = "transparent";
		this.FOV.btnMinus.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
		this.FOV.btnMinus.onPointerClickObservable.add(() => {
			this.FOV.slider.value -= 0.05;
		});	
		this.FOV.container.addControl(this.FOV.btnMinus);
	}   
	hideInterfaces()
	{
		//TODO
	} 
}
