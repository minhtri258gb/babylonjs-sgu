
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
		
		
		// let crossImg = new BABYLON.GUI.Image("mapImg","./asset/smallno.png");
		// crossImg.rotate = 0.2;//45 * Math.Pi / 180.0;
		// totalMapUI.addControl(mapImg);


		// Mini map
		let miniMap = new BABYLON.GUI.Ellipse();
		miniMap.width = "150px";
		miniMap.height = "150px";
		miniMap.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
		miniMap.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
		miniMap.thickness = 0;
		miniMap.background = "green";
		miniMap.zIndex = 2;
		miniMap.shadowColor = "black";
		miniMap.shadowBlur = 10;
		miniMap.addControl(this.image);
		// miniMap.addControl(crossImg);
		engine.advancedTexture.addControl(miniMap);


		// Player position

		// Link point

	}
}
