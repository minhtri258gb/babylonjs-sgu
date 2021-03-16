
import engine from './Engine.js'
import DataSource from "./DataSource.js";

export default class Location
{
	// Forwards
	constructor(_name)
	{
		// Set default
		this.name = _name;
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
			this.link[i].btn.dispose();
			this.link[i].mesh.dispose();
		}
	}

	addLink(_name, _position)
	{
		let box = BABYLON.MeshBuilder.CreateBox(_name + "_box", {});
		box.position = new BABYLON.Vector3(_position[0], _position[1], _position[2]);
		box.isVisible = false;

		let rect = new BABYLON.GUI.Rectangle();
		rect.width = "40px";
		rect.height = "40px";
		rect.cornerRadius = 20;
		rect.color = "Orange";
		rect.thickness = 4;
		rect.background = "green";
		engine.advancedTexture.addControl(rect);

		rect.linkWithMesh(box);

		rect.onPointerDownObservable.add(() => {
			engine.loc.dispose();
			engine.loc = DataSource.getLocationInfo(_name);
		});

		this.link.push({
			name: _name,
			mesh: box,
			btn: rect
		});
		
		// let imgLogo1 = new BABYLON.GUI.Image("logo", "./asset/menu/giphy.gif");
		// imgLogo1.top=0;
		// imgLogo1.isVisible = true;

		// var rect1 = new BABYLON.GUI.Rectangle();
	    // rect1.width = 0.2;
	    // rect1.height = 0.2;
	    // rect1.cornerRadius = 20;
	    // rect1.color = "green";
	    // rect1.thickness = 4;
	 
	    // rect1.addControl(imgLogo1);
	    // rect1.onPointerMoveObservable.add(() =>{
		// 	console.log('imgLogo1');
	    // });
	    // engine.advancedTexture.addControl(rect1);
	}
}
