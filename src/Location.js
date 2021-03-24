
import engine from './Engine.js'
import DataSource from "./DataSource.js";

export default class Location
{
	// Forwards
	constructor(_name)
	{
		// Set default
		let info = DataSource.loc[_name];

		this.name = _name;
		this.position = info.position;
		
		// Create PhotoDome
		this.dome = new BABYLON.PhotoDome(
			"skyDome",
			"./asset/skysphere/"+this.name+".jpg",
			{
				faceForward: false,
				resolution: 32,
				size: 1000
			},
			engine.scene
		);
		this.dome.rotation.y = info.rotation;

		// Set link
		this.link = [];
		for (let i=0; i<info.link.length; i++)
		{
			let l = info.link[i];
			this.addLink(l.name, l.pos)
		}

		// hook map
		// engine.map.hookMini(this.position);
	}

	// Natives
	dispose()
	{
		this.dome.dispose();

		// mtl.dispose()
		// Location.mesh.material.dispose();

		let nloop = this.link.length;
		for (let i=0; i<nloop; i++)
		{
			this.link[i].pointer.dispose();
			this.link[i].preview.dispose();
			this.link[i].button.dispose();
			this.link[i].mesh.dispose();
		}
	}

	addLink(_name, _position)
	{
		let box = BABYLON.MeshBuilder.CreateBox(_name + "_box", {});
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
		
		let imgPreview = new BABYLON.GUI.Image(_name+"_imgPreview","./asset/skysphere/"+_name+"_pre"+".jpg");
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

        let textPre = new BABYLON.GUI.TextBlock("textPre","Sân "+_name);
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
			engine.changeLocation(_name);
		});

		rect.onPointerMoveObservable.add(() => {
            rectPre.isVisible = true;
            line.isVisible = true;
        });

        rect.onPointerOutObservable.add(() => {
            rectPre.isVisible = false;
            line.isVisible = false;
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

	static registerMousePicking()
	{
		engine.scene.onPointerDown = function (event, pickResult)
		{
			if(event.button == 2)
			{
				let vector = pickResult.pickedPoint;
				console.log('3D point: ' + vector.x.toFixed() + ',' + vector.y.toFixed() + ',' + vector.z.toFixed() );
			}
		}
	}
}
