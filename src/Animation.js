import engine from './Engine.js'

export default class Animation
{
    
    constructor()
    {
        BABYLON.GUI.Control.prototype.getScene = function() {
            return engine.scene;
        };
    }
    
    fadeAnimIn(control)
    {
        this.ease = new BABYLON.CubicEase();
        this.ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

        BABYLON.Animation.CreateAndStartAnimation(control+"fadeIn", control, "alpha", 5, 2, 0, 1, 0, this.ease);
        //BABYLON.Animation.CreateAndStartAnimation("VisAnim", controlTwo, "alpha", speed, 10, alphaOne, alphaTwo, 0, ease);
    }

    fadeAnimOut(control)
    {
        this.ease = new BABYLON.CubicEase();
        this.ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

        BABYLON.Animation.CreateAndStartAnimation(control+"fadeOut", control, "alpha", 5, 2, 1, 0, 0, this.ease);
        //BABYLON.Animation.CreateAndStartAnimation("VisAnim", controlTwo, "alpha", speed, 10, alphaOne, alphaTwo, 0, ease);
    }
}