
import engine from './Engine.js'
import DataSource from "./DataSource.js";

export default class Location
{
	// Forwards
	constructor(_name)
	{
		// Set default
		this.name = _name;
		this.position = {x: 0, y: 0};
		this.link = [];
		
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

		let rectpre = new BABYLON.GUI.Rectangle();
        rectpre.width = "300px";
        rectpre.height = "200px";
        rectpre.cornerRadius = 40;
        rectpre.color = "Orange";
        rectpre.thickness = 2;
        rectpre.background = "green";
        engine.advancedTexture.addControl(rectpre);
        rectpre.linkWithMesh(box);
        rectpre.linkOffsetY = -150;
        rectpre.isVisible = false;

		// TODO un comment
		// let imgPreview = new BABYLON.GUI.Image(_name+"_imgPreview","./asset/skysphere/"+_name+"_pre"+".jpg");
		// rectpre.addControl(imgPreview);

		let line = new BABYLON.GUI.Line();
        line.lineWidth = 3;
        line.color = "Orange";
        line.y2 = 98;
        // line.dash = [5, 10];
        line.linkOffsetY = -15;
        engine.advancedTexture.addControl(line);
        line.linkWithMesh(box);
        line.connectedControl = rectpre;
        line.isVisible = false;

		// Icon walk
		let rect = new BABYLON.GUI.Ellipse();
		rect.width = "30px";
		rect.height = "30px";
		// rect.cornerRadius = 20;
		rect.color = "Orange";
		rect.thickness = 2;
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
			engine.loc.dispose();
			engine.loc = DataSource.getLocationInfo(_name);
		});

		rect.onPointerMoveObservable.add(() => {
            rectpre.isVisible = true;
            line.isVisible = true;
        });

        rect.onPointerOutObservable.add(() => {
            rectpre.isVisible = false;
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
			preview: rectpre
		});
	}

	mapset()
	{
		// let mapImg = engine.map.image;
		// mapImg.transformCenterX = this.position.x;
		// mapImg.transformCenterY = this.position.y;
	}
}
