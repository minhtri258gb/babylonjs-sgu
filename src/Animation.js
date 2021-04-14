import engine from './Engine.js'

export default class Animation
{
	
	constructor()
	{
		BABYLON.GUI.Control.prototype.getScene = function() {
			return engine.scene;
		};
		
		this.ease = new BABYLON.CubicEase();
		this.ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
	}
	
	fadeAnimIn(control)
	{
		//BABYLON.Animation.CreateAndStartAnimation("Name", BABYLON.node, targetProperty, framePerSecond, totalFrame, from, to, loop: 0-1, this.ease);
		BABYLON.Animation.CreateAndStartAnimation(control+"fadeIn", control, "alpha", 50, 20, 0, 1, 0, this.ease);
	}

	fadeAnimOut(control)
	{
		BABYLON.Animation.CreateAndStartAnimation(control+"fadeOut", control, "alpha", 50, 20, 1, 0, 0, this.ease);
	}

	drawerAnimX(control, from, to)
	{
		BABYLON.Animation.CreateAndStartAnimation(control+"drawerX", control, "leftInPixels", 60, 30, from, to, 0, this.ease);   
	}

	drawerAnimY(control, from, to)
	{
		BABYLON.Animation.CreateAndStartAnimation(control+"drawerY", control, "topInPixels", 60, 30, from, to, 0, this.ease);   
	}

	zoom(come)
	{
		let camfov = (1.0 - engine.interfaces.FOV.slider.value) * 80 + 20;
		let curFov, nextFov;
		
		if (come)
		{
			nextFov = BABYLON.Tools.ToRadians(camfov);
			curFov = nextFov + BABYLON.Tools.ToRadians(20);
		}
		else
		{
			// look at pos go
			// let end = new BABYLON.Vector3(-_pos_target[0], -_pos_target[1], -_pos_target[2]).normalize();
			// let start = engine.camera.position;

			// BABYLON.Animation.CreateAndStartAnimation("lookAtX", engine.camera, "target", 60, 30, start.x, end.x, 0);
			// BABYLON.Animation.CreateAndStartAnimation("lookAtY", engine.camera, "target", 60, 30, start.y, end.y, 0);
			// BABYLON.Animation.CreateAndStartAnimation("lookAtZ", engine.camera, "target", 60, 30, start.z, end.z, 0);
			// console.log(start.y, end.y)

			// fov anim
			curFov = BABYLON.Tools.ToRadians(camfov);
			nextFov = curFov - BABYLON.Tools.ToRadians(20);
		}
		BABYLON.Animation.CreateAndStartAnimation("zoom"+come?"In":"Out", engine.camera, "fov", 60, 30, curFov, nextFov, 0);
	}

	animBlock(toggle)
	{

		if (toggle)
		{
			engine.interfaces.rectBlock.isVisible = true;
			BABYLON.Animation.CreateAndStartAnimation("animBlock"+toggle?"On":"Off", engine.interfaces.rectBlock, "alpha", 50, 20, 0, 0.7, 0);
		}
		else
		{
			BABYLON.Animation.CreateAndStartAnimation("animBlock"+toggle?"On":"Off", engine.interfaces.rectBlock, "alpha", 50, 20, 0.7, 0, 0);
			setTimeout(()=>{
				engine.interfaces.rectBlock.isVisible = false;
			},400);
		}
	}
}
