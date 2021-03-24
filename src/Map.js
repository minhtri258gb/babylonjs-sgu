
import engine from './Engine.js'

export default class Map
{
	constructor()
	{
		// Init default
		this.mouse = {
			drag: false,
			x: 0,
			y: 0
		}

		this.mat = {
			x: 0,
			y: 0,
			scale: 1.0,
			xMax: 0,
			xMin: 0,
			yMax: 0,
			yMin: 0,
			scaleMax: 1.0,
			scaleMin: 1.0
		}
		
		// Caculator
		// let widthMap = engine.canvas.width * 90 / 100;
		// let heightMap = engine.canvas.height * 90 / 100;

		// if (widthMap > heightMap)
		// {
		// 	this.mat.scaleMin = widthMap / heightMap;
		// 	// mapImg.scaleX = scaleFactor;
		// 	// mapImg.scaleY = scaleFactor;
		// }
		// else
		// {
		// }

		// Map Image
		this.image = new BABYLON.GUI.Image("mapImg","./asset/map.png");
		this.image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

		// debug
		this.image.scaleX = this.mat.scaleMin;
		this.image.scaleY = this.mat.scaleMin;

		// Total map
		this.totalMap = new BABYLON.GUI.Rectangle();
		this.totalMap.width = 0.9;
		this.totalMap.height = 0.9;
		this.totalMap.cornerRadius = 20;
		this.totalMap.color = "black";
		this.totalMap.thickness = 1;
		this.totalMap.background = "green";
		this.totalMap.zIndex = 3;
        this.totalMap.isPointerBlocker = true;
		this.totalMap.onPointerDownObservable.add((evt) => { // Mouse click pre
			if (evt.buttonIndex == 0)
			{
				// flag
				this.mouse.drag = true;
	
				// save start drag
				this.mouse.x = evt.x;
				this.mouse.y = evt.y;
			}
			else if (evt.buttonIndex == 2)
			{
				console.log(evt);
			}
		});
		this.totalMap.onPointerUpObservable.add((evt) => { // Mouse click post
			if (evt.buttonIndex == 0)
			{
				// flag
				this.mouse.drag = false;
	
				// save before transform
				this.mat.x = this.image.leftInPixels / this.mat.scale;
				this.mat.y = this.image.topInPixels / this.mat.scale;
			}
		});
		this.totalMap.onPointerMoveObservable.add((evt) => { // mouse drag
			if (this.mouse.drag)
			{
				// transform when drag, position = old-transform * scale + delta mouse pos
				this.image.leftInPixels = this.mat.x * this.mat.scale + (evt.x - this.mouse.x);
				this.image.topInPixels = this.mat.y * this.mat.scale + (evt.y - this.mouse.y);
			}
		});
		this.totalMap.onWheelObservable.add((evt) => { // mouse wheel
			// zoom
			let scale = Math.max(this.mat.scale + (evt.y / -500), 1.0);
			this.image.scaleX = scale;
			this.image.scaleY = scale;
			this.mat.scale = scale;

			// fix to zoom
			this.image.leftInPixels = this.mat.x * scale;
			this.image.topInPixels = this.mat.y * scale;
		});
		this.totalMap.addControl(this.image); // inster image
        this.totalMap.isVisible = false;
		engine.advancedTexture.addControl(this.totalMap);

		//Total map close button
		this.btnCloseTotalMap = new BABYLON.GUI.Ellipse();
		this.btnCloseTotalMap.background = "white";
		this.btnCloseTotalMap.color = "black";
		this.btnCloseTotalMap.thickness = 2;
		this.btnCloseTotalMap.width = "35px";
		this.btnCloseTotalMap.height = "35px";
		this.btnCloseTotalMap.hoverCursor = "pointer";
		this.btnCloseTotalMap.verticalAlignment = 0;
		this.btnCloseTotalMap.horizontalAlignment = 1;
		this.btnCloseTotalMap.top = "10px";
		this.btnCloseTotalMap.left = "-10px";		
		this.imgTotalMapCloseBtn = new BABYLON.GUI.Image("imgTotalMapCloseBtn","./asset/icon/close1.png");
        this.btnCloseTotalMap.onPointerClickObservable.add(() => {

				//btn list
				engine.interfaces.btnUI.btn.isVisible = true;
        		engine.interfaces.btnFullScreen.btn.isVisible = true;
        		engine.interfaces.btnSetting.btn.isVisible = true;
        		engine.interfaces.btnMap.btn.isVisible = true;
        		engine.interfaces.btnSound.btn.isVisible = true;
        		engine.interfaces.btnRotation.btn.isVisible = true;				
				engine.animation.fadeAnimIn(engine.interfaces.btnUI.btn);
				engine.animation.fadeAnimIn(engine.interfaces.btnFullScreen.btn);
				engine.animation.fadeAnimIn(engine.interfaces.btnSetting.btn);
				engine.animation.fadeAnimIn(engine.interfaces.btnSound.btn);
				engine.animation.fadeAnimIn(engine.interfaces.btnMap.btn);
				engine.animation.fadeAnimIn(engine.interfaces.btnRotation.btn);
				
        		//----
				engine.animation.fadeAnimOut(this.totalMap);
				setTimeout(() => {	
					this.totalMap.isVisible = false;
				},400);

                this.miniMap.isVisible = true;
				engine.animation.fadeAnimIn(this.miniMap);

                for (let i=0; i< engine.loc.link.length; i++)
				{
                    engine.loc.link[i].button.isVisible = true;
					engine.animation.fadeAnimIn(engine.loc.link[i].button);
				}

		});

		this.btnCloseTotalMap.addControl(this.imgTotalMapCloseBtn);
		this.totalMap.addControl(this.btnCloseTotalMap);
		
		
		// let crossImg = new BABYLON.GUI.Image("mapImg","./asset/smallno.png");
		// crossImg.rotate = 0.2;//45 * Math.Pi / 180.0;
		// totalMapUI.addControl(mapImg);

		
		// Mini map
		this.miniMap = new BABYLON.GUI.Ellipse();
		this.miniMap.width = "200px";
		this.miniMap.height = "200px";
		this.miniMap.hoverCursor = "pointer";
		this.miniMap.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
		this.miniMap.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
		this.miniMap.left = "15px";
		this.miniMap.top = "15px";
		this.miniMap.thickness = 0;
		this.miniMap.background = "green";
		this.miniMap.zIndex = 2;
		this.miniMap.shadowColor = "black";
		this.miniMap.shadowBlur = 10;
		this.miniMap.addControl(this.image);
		this.miniMap.isPointerBlocker = true;
		this.miniMap.onPointerClickObservable.add(() => {
			//btn list
			engine.animation.fadeAnimOut(engine.interfaces.btnUI.btn);
			engine.animation.fadeAnimOut(engine.interfaces.btnFullScreen.btn);
			engine.animation.fadeAnimOut(engine.interfaces.btnSetting.btn);
			engine.animation.fadeAnimOut(engine.interfaces.btnSound.btn);
			engine.animation.fadeAnimOut(engine.interfaces.btnMap.btn);
			engine.animation.fadeAnimOut(engine.interfaces.btnRotation.btn);
			setTimeout(() => {
			engine.interfaces.btnUI.btn.isVisible = false;
			engine.interfaces.btnFullScreen.btn.isVisible = false;
			engine.interfaces.btnSetting.btn.isVisible = false;
			engine.interfaces.btnMap.btn.isVisible = false;
			engine.interfaces.btnSound.btn.isVisible = false;
			engine.interfaces.btnRotation.btn.isVisible = false;
			},400);

			//----
			this.totalMap.isVisible = true;
			engine.animation.fadeAnimIn(this.totalMap);

			engine.animation.fadeAnimOut(this.miniMap);
			setTimeout(() => {
			this.miniMap.isVisible = false;
			},400);

			for (let i=0; i< engine.loc.link.length; i++)
			{
				engine.animation.fadeAnimOut(engine.loc.link[i].button);
				setTimeout(() => {
				engine.loc.link[i].button.isVisible = false;
				}, 400);
			}
		});
		// miniMap.addControl(crossImg);
		engine.advancedTexture.addControl(this.miniMap);


		// Player position

		// Link point

	}
}
