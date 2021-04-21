
import detectMobile from './DetectMobileAPI.js';
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

		//Rect instruction
		this.rectInstruction = new BABYLON.GUI.Rectangle();
		this.rectInstruction.width = "800px";
		this.rectInstruction.height = "450px";
		this.rectInstruction.top = "-150px";
		this.rectInstruction.cornerRadius = 10;
		this.rectInstruction.color = "transparent";
		this.rectInstruction.alpha = 0.5;
		this.rectInstruction.background = "black";
		this.rectInstruction.isPointerBlocker = false;
		this.rectMain.addControl(this.rectInstruction);
		if(detectMobile())
		{
			this.rectInstruction.isVisible = false;
		}

		this.imgInstruction = new BABYLON.GUI.Image("imgInstruction","./asset/help.png");
		this.rectInstruction.addControl(this.imgInstruction);

		//Text instruction
		this.textInstruction = new BABYLON.GUI.TextBlock();
		this.textInstruction.text = engine.language.get("instruction");
		this.textInstruction.color = "white";
		this.textInstruction.top = "-180px";
		// this.textInstruction
		this.rectInstruction.addControl(this.textInstruction);

		// Button Start
		this.btnStart = new BABYLON.GUI.Rectangle();
		this.btnStart.width = "400px";
		this.btnStart.height = "100px";
		if (detectMobile())
			{}
		else
			this.btnStart.top = "200px";
		this.btnStart.hoverCursor = "pointer";
		this.btnStart.cornerRadius = 20;
		this.btnStart.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.btnStart.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		this.btnStart.background = "#23272a";
		this.btnStart.color = "white";
		this.btnStart.thickness = 1;
		this.btnStart.onPointerClickObservable.add(() => {	
			BABYLON.Animation.CreateAndStartAnimation("MenuHidden", this.rectMain, "alpha", 60, 60, 1, 0, 0);	
			setTimeout(() => {
				engine.animation.animTextStart(false);
				this.rectMain.dispose();
			}, 1000);
		});
		this.rectMain.addControl(this.btnStart);

		// Text start
		this.textStart = new BABYLON.GUI.TextBlock();
		this.textStart.text = engine.language.get("start");
		this.textStart.fontSizeInPixels = 24;
		engine.animation.animTextStart(true);
		this.btnStart.addControl(this.textStart);
		
		// //Rect credit
		// this.rectCredit = new BABYLON.GUI.Rectangle();
		// this.rectCredit.width = "400px";
		// this.rectCredit.height = "150px";
		// this.rectCredit.top = "-50px";
		// this.rectCredit.left = "-50px";
		// this.rectCredit.cornerRadius = 10;
		// this.rectCredit.color = "transparent";
		// this.rectCredit.background = "transparent";
		// this.rectCredit.zIndex = 6;
		// this.rectCredit.horizontalAlignment = 1;
		// this.rectCredit.verticalAlignment = 1;
		// this.rectCredit.isPointerBlocker = false;
		// this.rectMain.addControl(this.rectCredit);

		// // Text start
		// this.textCredit = new BABYLON.GUI.TextBlock();
		// this.textCredit.text =  "Sinh viên thực hiện:\n"+
		// 						"- Nguyễn Minh Trí\n"+
		// 						"- Hà Thiện Tuấn";
		// this.textCredit.color = "#23272a";
		// this.textCredit.fontSize = "24px";
		// this.textCredit.textHorizontalAlignment = 1;
		// this.rectCredit.addControl(this.textCredit);

		// //Rect credit
		// this.rectCredit1 = new BABYLON.GUI.Rectangle();
		// this.rectCredit1.width = "400px";
		// this.rectCredit1.height = "150px";
		// this.rectCredit1.top = "-50px";
		// this.rectCredit1.left = "50px";
		// this.rectCredit1.cornerRadius = 10;
		// this.rectCredit1.color = "transparent";
		// this.rectCredit1.alpha = 0.5;
		// this.rectCredit1.background = "black";
		// this.rectCredit1.zIndex = 6;
		// this.rectCredit1.horizontalAlignment = 0;
		// this.rectCredit1.verticalAlignment = 1;
		// this.rectCredit1.isPointerBlocker = false;
		// this.rectMain.addControl(this.rectCredit1);

		// // Text start
		// this.textCredit1 = new BABYLON.GUI.TextBlock();
		// this.textCredit1.text =  "Giảng viên hướng dẫn: \n"+
		// 						"- ThS. Phạm Thi Vương\n";
								
		// this.textCredit1.color = "white";
		// this.textCredit1.fontSize = "24px";
		// this.textCredit1.textHorizontalAlignment = 0;
		// this.rectCredit1.addControl(this.textCredit1);

		//Rect credit
		this.rectCredit2 = new BABYLON.GUI.Rectangle();
		this.rectCredit2.width = "550px";
		this.rectCredit2.height = "100px";
		this.rectCredit2.top = "0px";
		this.rectCredit2.cornerRadius = 10;
		this.rectCredit2.color = "transparent";
		this.rectCredit2.background = "transparent";
		this.rectCredit2.zIndex = 6;
		this.rectCredit2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		this.rectCredit2.verticalAlignment = 1;
		this.rectCredit2.isPointerBlocker = false;
		this.rectMain.addControl(this.rectCredit2);

		// Text credit
		this.textCredit2 = new BABYLON.GUI.TextBlock();
		this.textCredit2.text = engine.language.get("credit");				
		this.textCredit2.color = "#23272a";
		this.textCredit2.fontStyle = "italic";
		this.rectCredit2.addControl(this.textCredit2);

		// Set default

		// Get location
	}

	// Natives

}
