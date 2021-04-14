
import engine from './Engine.js'
import DataSource from "./DataSource.js";

export default class Location
{
	// Forwards
	constructor()
	{
		// Set default
		this.onLoad = false;

		// Get location
		let url = new URL(window.location.href);
		this.name = url.searchParams.get("location");
		if (this.name === null)
			this.name = 'CADV'

		this.data = engine.data.loc[this.name];
		this.position = this.data.position;
		
		// Create PhotoDome
		this.dome = new BABYLON.PhotoDome(
			"skyDome",
			"./asset/dome/"+this.name+".jpg",
			{
				faceForward: false,
				resolution: 32,
				size: 1000
			},
			engine.scene
		);
		this.dome.rotation.y = this.data.rotation;
		
		// Set link
		this.link = [];
		for (let i=0; i<this.data.link.length; i++)
		{
			let l = this.data.link[i];
			this.addLink(l.name, l.pos)
		}

		// Set info
		this.info = [];
		for (let i=0; i<this.data.info.length; i++)
		{
			let info = this.data.info[i];
			this.addInfo(info.name, info.pos)
		}

		
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

		// this.btnCloseInfo = new BABYLON.GUI.Ellipse();
		// this.btnCloseInfo.background = "white";
		// this.btnCloseInfo.color = "black";
		// this.btnCloseInfo.thickness = 2;
		// this.btnCloseInfo.width = "35px";
		// this.btnCloseInfo.height = "35px";
		// this.btnCloseInfo.hoverCursor = "pointer";
		// this.btnCloseInfo.verticalAlignment = 0;
		// this.btnCloseInfo.horizontalAlignment = 1;
		// this.btnCloseInfo.top = "10px";
		// this.btnCloseInfo.left = "-10px";
		// this.btnCloseInfo.zIndex = 3;
		
		// this.imgCloseInfo = new BABYLON.GUI.Image("imgCloseInfo","./asset/icon/close.png");
        // this.btnCloseInfo.onPointerClickObservable.add(() => {
		// 		
		// });
		// this.btnCloseInfo.addControl(this.imgCloseInfo);
		// this.infoScroll.addControl(this.btnCloseInfo);

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
		this.infoImage = new BABYLON.GUI.Image(_name+"_imgInfo","./asset/img.jpg");
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
		this.infoText.text = "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis enim finibus ligula dignissim congue. "+
		"Proin porttitor dui sed sapien sagittis, a lacinia lacus facilisis. Proin pharetra vitae est et facilisis. Nam eleifend, erat quis ma"+
		"ttis accumsan, magna nisl varius sem, ut porta nisi leo eu purus. Aenean et ligula pretium, cursus eros eu,"+
		" accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		" posuere nunc. Vivamus imperdiet varius sodales. accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		"Proin porttitor dui sed sapien sagittis, a lacinia lacus facilisis. Proin pharetra vitae est et facilisis. Nam eleifend, erat quis ma"+
		"ttis accumsan, magna nisl varius sem, ut porta nisi leo eu purus. Aenean et ligula pretium, cursus eros eu,"+
		" accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		" posuere nunc. Vivamus imperdiet varius sodales. accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		"Proin porttitor dui sed sapien sagittis, a lacinia lacus facilisis. Proin pharetra vitae est et facilisis. Nam eleifend, erat quis ma"+
		"ttis accumsan, magna nisl varius sem, ut porta nisi leo eu purus. Aenean et ligula pretium, cursus eros eu,"+
		" accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		" posuere nunc. Vivamus imperdiet varius sodales. accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		"Proin porttitor dui sed sapien sagittis, a lacinia lacus facilisis. Proin pharetra vitae est et facilisis. Nam eleifend, erat quis ma"+
		"ttis accumsan, magna nisl varius sem, ut porta nisi leo eu purus. Aenean et ligula pretium, cursus eros eu,"+
		" accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel"+
		" posuere nunc. Vivamus imperdiet varius sodales. accumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam velaccumsan purus. Morbi a enim venenatis, finibus justo id, tristique ipsum. Aenean et accumsan risus, fringilla posuere felis. Nullam vel";
		this.infoText.textWrapping = true;
		this.infoText.textHorizontalAlignment = 0;	
		this.infoText.textVerticalAlignment = 0;
		this.infoTextContainer.addControl(this.infoText);

		engine.map.goLocation(this.name, this.position); // hook map
	}

	// Natives

	addLink(_name, _position)
	{
		let box = BABYLON.MeshBuilder.CreateBox(_name+"_box", {});
		box.position = new BABYLON.Vector3(_position[0], _position[1], _position[2]);
		box.isVisible = false;

		let rectPre = new BABYLON.GUI.Rectangle();
        rectPre.width = "300px";
        rectPre.height = "200px";
        rectPre.cornerRadius = 40;
        rectPre.color = "white";
        rectPre.thickness = 3;
        rectPre.background = "green";
        engine.advancedTexture.addControl(rectPre);
        rectPre.linkWithMesh(box);
        rectPre.linkOffsetY = -150;
        rectPre.isVisible = false;
		
		let imgPreview = new BABYLON.GUI.Image(_name+"_imgPreview","./asset/dome/"+_name+"_pre"+".jpg");
        rectPre.addControl(imgPreview);

		let line = new BABYLON.GUI.Line();
        line.lineWidth = 3;
        line.color = "white";
        line.y2 = 98;
        // line.dash = [5, 10];
        line.linkOffsetY = -15;
        engine.advancedTexture.addControl(line);
        line.linkWithMesh(box);
        line.connectedControl = rectPre;
        line.isVisible = false;

        let textPre = new BABYLON.GUI.TextBlock(_name+"textPre",engine.language.get(_name));
        //textPre.linkWithMesh(box);
        textPre.color = "white";
        textPre.fontFamily = "Time News Roman"
        textPre.drawOutline = true;
        textPre.outlineColor = "Black";
        textPre.outlineWidth = 3;
        textPre.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        textPre.height = 0.15
        rectPre.addControl(textPre);

		// Icon walk
		let rect = new BABYLON.GUI.Ellipse();
		rect.width = "30px";
		rect.height = "30px";
		// rect.cornerRadius = 20;
		rect.color = "white";
		rect.thickness = 3;
		rect.background = "transparent"; // "white";//

		rect.zIndex = 1;
		rect.hoverCursor = "pointer";
		rect.isPointerBlocker = true;
		// rect.drawOutline = true;
		// rect.outlineColor = "Black";
		// rect.outlineWidth = 5;
		engine.advancedTexture.addControl(rect);
		rect.linkWithMesh(box);
		rect.onPointerDownObservable.add(() => {
			this.goto(_name);
		});

		rect.onPointerMoveObservable.add(() => {            
			rectPre.isVisible = true;
            line.isVisible = true;
			//engine.animation.fadeAnimIn(rectPre);
			//engine.animation.fadeAnimIn(line);
        });

        rect.onPointerOutObservable.add(() => {
			//engine.animation.fadeAnimOut(rectPre);
			//engine.animation.fadeAnimOut(line);           
			//setTimeout(() => {
				rectPre.isVisible = false;
            	line.isVisible = false;
			//},400);
        });

		// Walk icon
		let imgwalk = new BABYLON.GUI.Image(+"walkIcon","./asset/icon/walk.png");
        rect.addControl(imgwalk);

		
		this.link.push({
			name: _name,
			mesh: box,
			button: rect,
			pointer: line,
			preview: rectPre,
			//textblock: textPre
		});
	}

	addInfo(_name, _position)
	{
		let box = BABYLON.MeshBuilder.CreateBox(_name+"_boxInfo", {});
		box.position = new BABYLON.Vector3(_position[0], _position[1], _position[2]);
		box.isVisible = false;
		
		// Icon walk
		let rect = new BABYLON.GUI.Ellipse();
		rect.width = "30px";
		rect.height = "30px";
		// rect.cornerRadius = 20;
		rect.color = "white";
		rect.thickness = 3;
		rect.background = "transparent"; // "white";//

		rect.zIndex = 1;
		rect.hoverCursor = "pointer";
		rect.isPointerBlocker = true;
		// rect.drawOutline = true;
		// rect.outlineColor = "Black";
		// rect.outlineWidth = 5;
		engine.advancedTexture.addControl(rect);
		rect.linkWithMesh(box);
		rect.onPointerDownObservable.add(() => {
			engine.interfaces.onShow = "info";
			engine.interfaces.showInterfaces(false);
			this.infoScroll.isVisible = true;
			engine.animation.fadeAnimIn(this.infoScroll);
			engine.animation.animBlock(true);
		});



		// Walk icon
		let imginfo = new BABYLON.GUI.Image(+"walkIcon","./asset/icon/info.png");
        rect.addControl(imginfo);



		
		this.info.push({
			name: _name,
			mesh: box,
			button: rect,
			imgIcon: imginfo
		});
	}

	goto(_name)
	{
		if (this.name.localeCompare(_name) == 0) // skip same location
			return;
		
		if (this.onLoad) // Skip when spam
			return;
		
		// Set flag
		this.onLoad = true;

		// update url
		let url = new URL(window.location.href);
		let param = url.searchParams;
		param.set("location", _name);
		url.search = param.toString();
		history.pushState({}, null, url.toString());

		// Get data
		this.name_next = _name;
		this.data = engine.data.loc[this.name_next];

		// Remove link and infomation
		let nloop = this.link.length;
		for (let i=0; i<nloop; i++)
		{
			this.link[i].pointer.dispose();
			this.link[i].preview.dispose();
			this.link[i].button.dispose();
			this.link[i].mesh.dispose();
		}
		nloop = this.info.length;
		for (let i=0; i<nloop; i++)
		{
			this.info[i].imgIcon.dispose();
			this.info[i].button.dispose();
			this.info[i].mesh.dispose();
		}
		
		// Set flag go
		this.flag_timeout = false;
		this.flag_load_done = false;
		setTimeout(() => {
			this.flag_timeout = true;
		}, 250);

		// Load new dome
		this.dome_next = new BABYLON.PhotoDome("skyDome_next",
			"./asset/dome/"+this.name_next+".jpg",
			{faceForward: false, resolution: 32, size: 1000},
			engine.scene
		);
		this.dome_next.setEnabled(false);
		this.dome_next.rotation.y = this.data.rotation;
		this.dome_next.onReady = () => {
			this.flag_load_done = true;
		};

		// Wait flag
		this.waitFunc = setInterval(() => {
			if ( this.flag_timeout && this.flag_load_done)
				this.goto2();
		}, 250);
		
		// Anim go to
		engine.animation.zoom(false);
		
		// hook map
		engine.map.goLocation(this.name_next, this.data.position);
	}

	goto2()
	{
		// Stop waiting
		clearInterval(this.waitFunc);

		// Anim go to
		engine.animation.zoom(true);

		// Set default
		this.name = this.name_next;
		this.position = this.data.position;
		
		// Set dome
		this.dome.setEnabled(false);
		this.dome_next.setEnabled(true);

		// Add link and info
		this.link = [];
		for (let i=0; i<this.data.link.length; i++)
		{
			let l = this.data.link[i];
			this.addLink(l.name, l.pos)
		}
		this.info = [];
		for (let i=0; i<this.data.info.length; i++)
		{
			let info = this.data.info[i];
			this.addInfo(info.name, info.pos)
		}

		// Update lenflare
		engine.effect.lensFlare_update();

		// remove old
		this.dome.dispose();
		this.dome = this.dome_next; // Change to main dome
		this.dome_next = undefined;
		
		// Set flag
		this.onLoad = false;
	}

	static registerMousePicking()
	{
		engine.scene.onPointerDown = (event, pickResult) => { // event mouse click pre
			if(event.button == 0)
			{
				// move type
				this.isDrag = true;
				engine.canvas.style.cursor = "move";
			}
			else if(event.button == 1)
			{
			}
			else if(event.button == 2)
			{
				let vector = pickResult.pickedPoint;
				// console.log(vector.x.toFixed() + ',' + vector.y.toFixed() + ',' + vector.z.toFixed());
				console.log("{x: "+vector.x.toFixed()+", y: "+vector.y.toFixed()+", z: "+vector.z.toFixed()+"}");
			}
		}
		engine.scene.onPointerMove = () => { // event mouse move
			if (this.isDrag)
				engine.canvas.style.cursor = "move";
			else
				engine.canvas.style.cursor = "default";
		}
		engine.scene.onPointerUp = (event) => { // event mouse click post
			if(event.button == 0)
			{
				// move type
				this.isDrag = false;
				engine.canvas.style.cursor = "default";
			}
		}
		const POINTERWHEEL = 0x08;
		engine.scene.onPointerObservable.add((evt) => { // event mouse wheel
			engine.interfaces.FOV.slider.value += (evt.event.deltaY / -1000);
		}, POINTERWHEEL);

	}
}
