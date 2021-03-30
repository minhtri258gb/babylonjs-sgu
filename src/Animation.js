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
        BABYLON.Animation.CreateAndStartAnimation(control+"drawerIn", control, "leftInPixels", 60, 30, from, to, 0, this.ease);   
    }

    drawerAnimY(control, from, to)
    {
        BABYLON.Animation.CreateAndStartAnimation(control+"drawerIn", control, "topInPixels", 60, 30, from, to, 0, this.ease);   
    }
}