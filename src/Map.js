
import detectMobile from './DetectMobileAPI.js';
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
			xbound: 0,
			ybound: 0,
			imgSize: 1,
			scaleMax: 1.0,
			scaleMin: 1.0
		}

		this.link = [];

		// Caculator
		this.mat.xbound = engine.canvas.width * 90 / 100;
		this.mat.ybound = engine.canvas.height * 90 / 100;

		if (this.mat.xbound > this.mat.ybound)
		{
			this.mat.imgSize = this.mat.ybound;
			this.mat.scaleMin = this.mat.xbound / this.mat.ybound + 0.1;
		}
		else
		{
			this.mat.imgSize = this.mat.xbound;
			this.mat.scaleMin = this.mat.ybound / this.mat.xbound + 0.1;
		}
		
		this.mat.scaleMax = 3.0; // ?
		this.mat.scale = 2.0; // custom from min to max

		// Init map
		this.initTotalMap();
		this.initMiniMap();

		// Register callback
		this.registerUpdateCamera();
	}

	initTotalMap()
	{
		this.totalImg = new BABYLON.GUI.Image("mapImg", engine.getLink("total_map.png"));
		this.totalImg.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
		this.totalImg.scaleX = 2.0;
		this.totalImg.scaleY = 2.0;

		this.totalMap = new BABYLON.GUI.Rectangle();
		this.totalMap.width = 0.9;
		this.totalMap.height = 0.9;
		this.totalMap.cornerRadius = 20;
		this.totalMap.thickness = 0;
		this.totalMap.background = "transparent";
		this.totalMap.zIndex = 3;
        this.totalMap.isPointerBlocker = true;
        this.totalMap.isVisible = false;
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
				if (!engine.debug)
					returnl;
				// Find point in image
				let x = ((evt.x - engine.canvas.width / 2) - (this.mat.x * this.mat.scale)) / (this.mat.imgSize * this.mat.scale) + 0.5;
				let y = ((evt.y - engine.canvas.height / 2) - (this.mat.y * this.mat.scale)) / (this.mat.imgSize * this.mat.scale) + 0.5;

				// this.addLink(posLink);
				console.log("{x: "+x+", y: "+y+"};");
			}
		});
		this.totalMap.onPointerUpObservable.add((evt) => { // Mouse click post
			if (evt.buttonIndex == 0)
			{
				// flag
				this.mouse.drag = false;
	
				// save before transform
				this.mat.x = this.totalImg.leftInPixels / this.mat.scale;
				this.mat.y = this.totalImg.topInPixels / this.mat.scale;
			}
		});
		this.totalMap.onPointerMoveObservable.add((evt) => { // mouse drag
			if (this.mouse.drag)
			{
				// transform when drag, position = old-transform * scale + delta mouse pos
				let newX = this.mat.x * this.mat.scale + (evt.x - this.mouse.x);
				let newY = this.mat.y * this.mat.scale + (evt.y - this.mouse.y);

				// Check bounding
				let bounding = {
					x: (this.mat.imgSize * this.mat.scale - this.mat.xbound) / 2 - 5,
					y: (this.mat.imgSize * this.mat.scale - this.mat.ybound) / 2 - 5
				}
				if (newX < -bounding.x) newX = -bounding.x;
				else if (newX > bounding.x) newX = bounding.x;
				if (newY < -bounding.y) newY = -bounding.y;
				else if (newY > bounding.y) newY = bounding.y;
		
				// set pos
				this.totalImg.leftInPixels = newX;
				this.totalImg.topInPixels = newY;

				for (let i=0; i<this.link.length; i++)
				{
					let l = this.link[i];
					l.rect.leftInPixels = (l.position.x - 0.5) * (this.mat.imgSize * this.mat.scale) + newX;
					l.rect.topInPixels = (l.position.y - 0.5) * (this.mat.imgSize * this.mat.scale) + newY;
				}
			}
		});
		this.totalMap.onWheelObservable.add((evt) => { // mouse wheel

			// Check bounding
			let scale = Math.max(this.mat.scale + (evt.y / -2000), this.mat.scaleMin);
			if (scale > this.mat.scaleMin && scale < this.mat.scaleMax)
			{
				// zoom
				this.totalImg.scaleX = scale;
				this.totalImg.scaleY = scale;
				this.mat.scale = scale;
	
				// move center on zoom
				let newX = this.mat.x * scale;
				let newY = this.mat.y * scale;

				// move with bounding
				let bounding = {
					x: (this.mat.imgSize * this.mat.scale - this.mat.xbound) / 2 - 5,
					y: (this.mat.imgSize * this.mat.scale - this.mat.ybound) / 2 - 5
				}

				if (newX < -bounding.x) newX = -bounding.x;
				else if (newX > bounding.x) newX = bounding.x;
				if (newY < -bounding.y) newY = -bounding.y;
				else if (newY > bounding.y) newY = bounding.y;

				// Move
				this.mat.x = newX / this.mat.scale;
				this.mat.y = newY / this.mat.scale;

				this.totalImg.leftInPixels = newX;
				this.totalImg.topInPixels = newY;

				for (let i=0; i<this.link.length; i++)
				{
					let l = this.link[i];
					l.rect.leftInPixels = (l.position.x - 0.5) * (this.mat.imgSize * scale) + newX;
					l.rect.topInPixels = (l.position.y - 0.5) * (this.mat.imgSize * scale) + newY;
				}
			}
		});
		this.totalMap.addControl(this.totalImg); // inster image
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
		this.imgTotalMapCloseBtn = new BABYLON.GUI.Image("imgTotalMapCloseBtn",engine.getLink("icon/close.png"));
        this.btnCloseTotalMap.onPointerClickObservable.add(() => {
			engine.interfaces.showInterfaces(true); // Show interfaces
			this.showTotalMap(false); // Hidden map
		});

		this.btnCloseTotalMap.addControl(this.imgTotalMapCloseBtn);
		this.totalMap.addControl(this.btnCloseTotalMap);
		
		// Add link to totalmap
		Object.keys(engine.data.loc).forEach((key) => {
			let pos = engine.data.loc[key].position;
			this.addLink(key, pos);
		});
	}

	initMiniMap()
	{
		this.miniImg = new BABYLON.GUI.Image("mapImg", engine.getLink("map.png"));
		this.miniImg.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
		this.miniImg.scaleX = 5.0;
		this.miniImg.scaleY = 5.0;
		this.miniImg.zIndex = 1;
		
		this.crossImg = new BABYLON.GUI.Image("mapImg", engine.getLink("eye.png"));
		this.crossImg.zIndex = 2;
		
		// Mini map
		this.miniMap = new BABYLON.GUI.Ellipse();
		if (detectMobile())
		{
			this.miniMap.width = "100px";
			this.miniMap.height = "100px";
		}
		else
		{
			this.miniMap.width = "200px";
			this.miniMap.height = "200px";
		}
		this.miniMap.hoverCursor = "pointer";
		this.miniMap.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
		this.miniMap.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
		this.miniMap.left = "-15px";
		this.miniMap.top = "15px";
		this.miniMap.thickness = 0;
		this.miniMap.background = "green";
		this.miniMap.zIndex = 3;
		this.miniMap.shadowColor = "black";
		this.miniMap.shadowBlur = 10;
		this.miniMap.addControl(this.miniImg);
		this.miniMap.addControl(this.crossImg);
		this.miniMap.isPointerBlocker = true;
		this.miniMap.onPointerClickObservable.add(() => {
			engine.interfaces.onShow = "map";
			// Hidden interfaces
			engine.interfaces.showInterfaces(false);
			engine.animation.animBlock(true);
			// show map
			this.totalMap.isVisible = true;
			engine.animation.fadeAnimIn(this.totalMap);
		});
		//this.miniMap.isVisible = !detectMobile(); // chi hien khi su dung pc
		engine.advancedTexture.addControl(this.miniMap);
	}

	addLink(_name, _position)
	{
		let rect = new BABYLON.GUI.Ellipse();
		rect.width = "12px";
		rect.height = "12px";
		rect.color = "Black";
		rect.thickness = 1;
		rect.background = "white";
		rect.zIndex = 3;
		rect.hoverCursor = "pointer";
		rect.isPointerBlocker = true;
		rect.leftInPixels = (_position.x - 0.5) * (this.mat.imgSize * this.mat.scale) + this.totalImg.leftInPixels;
		rect.topInPixels = (_position.y - 0.5) * (this.mat.imgSize * this.mat.scale) + this.totalImg.topInPixels;
		rect.onPointerClickObservable.add((evt) => { // Mouse click
			// Show interfaces
			engine.interfaces.showInterfaces(true);
			// Hidden map
			this.showTotalMap(false);
			engine.loc.goto(_name);
		});
		
		this.totalMap.addControl(rect);

		this.link.push({
			name: _name,
			position: _position,
			rect: rect
		});
	}

	goLocation(name, position)
	{
		// hook mini map
		BABYLON.Animation.CreateAndStartAnimation("miniHookX", this.miniImg, "transformCenterX", 60, 60, this.miniImg.transformCenterX, position.x*1.25 - 0.125, 0);
		BABYLON.Animation.CreateAndStartAnimation("miniHookY", this.miniImg, "transformCenterY", 60, 60, this.miniImg.transformCenterY, position.y*1.25 - 0.125, 0);

		// link total map
		for (let i=0; i<this.link.length; i++)
		{
			if (this.link[i].name.localeCompare(name) == 0)
				this.link[i].rect.background = "Orange";
			else if (this.link[i].rect.background.localeCompare("White") != 0)
				this.link[i].rect.background = "White";
		}
	}

	registerUpdateCamera()
	{
		engine.camera.onViewMatrixChangedObservable.add(() =>
		{
			let target = engine.camera.position;
			let tmptarget = new BABYLON.Vector2(-target.x, -target.z).normalize();
			var angle = Math.acos(BABYLON.Vector2.Dot(tmptarget, new BABYLON.Vector3(0,-1)));

			if (tmptarget.x > 0) // fix 360 rotate
				angle = Math.PI * 2 - angle;
				
			let offsetAngle = BABYLON.Tools.ToRadians(27); // offset to North
			this.crossImg.rotation = angle - offsetAngle;
		});
	}

	resize()
	{
		this.mat.xbound = engine.canvas.width * 90 / 100;
		this.mat.ybound = engine.canvas.height * 90 / 100;

		if (this.mat.xbound > this.mat.ybound)
		{
			this.mat.imgSize = this.mat.ybound;
			this.mat.scaleMin = this.mat.xbound / this.mat.ybound + 0.1;
		}
		else
		{
			this.mat.imgSize = this.mat.xbound;
			this.mat.scaleMin = this.mat.ybound / this.mat.xbound + 0.1;
		}
		this.mat.x = 0;
		this.mat.y = 0;
		this.totalImg.leftInPixels = 0;
		this.totalImg.topInPixels = 0;

		this.mat.scale = this.mat.scaleMin;
		this.totalImg.scaleX = this.mat.scaleMin;
		this.totalImg.scaleY = this.mat.scaleMin;

		for (let i=0; i<this.link.length; i++)
		{
			let l = this.link[i];
			l.rect.leftInPixels = (l.position.x - 0.5) * (this.mat.imgSize * this.mat.scale);
			l.rect.topInPixels = (l.position.y - 0.5) * (this.mat.imgSize * this.mat.scale);
		}
	}

	showTotalMap(toggle)
	{
		if (toggle)
		{
			engine.map.totalMap.isVisible = true;
			engine.animation.fadeAnimIn(engine.map.totalMap);
			engine.animation.animBlock(true);
		}
		else
		{
			engine.animation.animBlock(false);
			engine.animation.fadeAnimOut(this.totalMap);
			setTimeout(() => {	
				this.totalMap.isVisible = false;
			},400);
		}
	}

	showMiniMap(toggle)
	{
		if (toggle)
		{
			engine.map.miniMap.isVisible = true;
			engine.animation.fadeAnimIn(engine.map.miniMap);
		}
		else
		{
			engine.animation.fadeAnimOut(engine.map.miniMap);
			setTimeout(() => {	
				engine.map.miniMap.isVisible = false;
			},400);
		}
	}
}
