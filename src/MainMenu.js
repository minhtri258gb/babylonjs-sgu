
import engine from './Engine.js'

export default class MainMenu
{
	// Forwards
	constructor()
	{
		// Default
		let url = new URL(window.location.href);
		this.language = url.searchParams.get("location");
		if (this.language !== null)
			return;

		this.menuImg = new BABYLON.GUI.Image("mapImg",
				"./asset/background/"+Math.floor(Math.random()*4)+".jpg");
		
		// this.menuImg.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
		this.menuImg.scaleX = 1.15;
		this.menuImg.scaleY = 1.15;
		// this.menuImg.alpha = 0.2;
		
		this.rectMain = new BABYLON.GUI.Rectangle();
		this.rectMain.width = 1;
		this.rectMain.height = 1;
		this.rectMain.thickness = 0;
		this.rectMain.background = "black";
		// this.rectMain.alpha = 0.1;
		this.rectMain.zIndex = 5;
        this.rectMain.isPointerBlocker = true;
        this.rectMain.onPointerMoveObservable.add((evt) => {

			// Value
			let width = engine.canvas.width;
			let height = engine.canvas.height;
			let factor = {
				x: (evt.x-width/2) * -0.1,
				y: (evt.y-height/2) * -0.1
			};

			// Parallax
			this.menuImg.leftInPixels = factor.x;
			this.menuImg.topInPixels = factor.y;
		});
		this.rectMain.addControl(this.menuImg);
		engine.advancedTexture.addControl(this.rectMain);

		// Button Start
		this.btnStart = new BABYLON.GUI.Ellipse();
		this.btnStart.width = "150px";
		this.btnStart.height = "150px";
		this.btnStart.hoverCursor = "pointer";
		this.btnStart.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.btnStart.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.btnStart.background = "black";
		this.btnStart.color = "white";
		this.btnStart.thickness = 5;
		this.btnStart.onPointerClickObservable.add(() => {
			// TODO hidden main menu
			BABYLON.Animation.CreateAndStartAnimation("MenuHidden", this.rectMain, "alpha", 60, 60, 1, 0, 0);
			setTimeout(() => {
				this.rectMain.dispose();
			}, 1000);
		});
		// this.btnStart.addControl(this.miniImg);
		// this.btnStart.addControl(this.crossImg);
		this.rectMain.addControl(this.btnStart);

		// Set default

		// Get location
		
	}

	// Natives

}
