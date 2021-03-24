
import engine from './Engine.js'

export default class Interfaces
{
	// Forwards
	constructor()
	{
		this.panel = new BABYLON.GUI.StackPanel();
		this.panel.isVertical = false;
		//this.panel.width = "240px";
		this.panel.height = "160px";
		this.panel.horizontalAlignment = 1;
		this.panel.verticalAlignment = 1;
        this.panel.isPointerBlocker = true;			
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
                setTimeout(() => {
        		this.btnFullScreen.btn.isVisible = false;
        		this.btnSetting.btn.isVisible = false;
        		this.btnMap.btn.isVisible = false;
        		this.btnSound.btn.isVisible = false;
        		this.btnRotation.btn.isVisible = false;
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
                engine.animation.fadeAnimIn(this.btnFullScreen.btn);
                engine.animation.fadeAnimIn(this.btnSetting.btn);
                engine.animation.fadeAnimIn(this.btnMap.btn);
                engine.animation.fadeAnimIn(this.btnSound.btn);
                engine.animation.fadeAnimIn(this.btnRotation.btn);

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
        	//TODO
        });
        this.panel.addControl(this.btnSetting.btn);


        


		//Thanh sound
		this.btnSound = {};
        this.btnSound.slider = new BABYLON.GUI.Slider();
	    this.btnSound.slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
	    this.btnSound.slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
	    this.btnSound.slider.minimum = 0;
	    this.btnSound.slider.maximum = 100;
	    this.btnSound.slider.value = 100;
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
        this.btnSound.btn.addControl(this.btnSound.imgSoundOn);
        this.btnSound.imgSoundOff = new BABYLON.GUI.Image("imgSoundOff","./asset/icon/sound_off1.png");
        this.btnSound.imgSoundOff.isVisible = false;
        this.btnSound.btn.addControl(this.btnSound.imgSoundOff);
        this.btnSound.btn.onPointerClickObservable.add(() => {
        	//TODO
        	if (this.btnSound.imgSoundOn.isVisible === true)
        	{
        		this.btnSound.imgSoundOff.isVisible = true;
        		this.btnSound.imgSoundOn.isVisible = false;        		
        	}
        	else
        	{
        		this.btnSound.imgSoundOff.isVisible = false;
        		this.btnSound.imgSoundOn.isVisible = true;      		
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

            this.btnUI.btn.isVisible = false;
            this.btnFullScreen.btn.isVisible = false;
            this.btnSetting.btn.isVisible = false;
            this.btnMap.btn.isVisible = false;
            this.btnSound.btn.isVisible = false;
            this.btnRotation.btn.isVisible = false;
            //----add link
            engine.map.miniMap.isVisible = false; 
            for (let i=0; i<engine.loc.link.length; i++)
                engine.loc.link[i].button.isVisible = false;  
                  
        });
		this.panel.addControl(this.btnMap.btn);


		this.panel.children.reverse();  //Reverse panel ĐỂ CUỐI PANEL!!!

	}
	

}
