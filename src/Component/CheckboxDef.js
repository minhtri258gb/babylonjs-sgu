
import engine from '../Engine.js'

export default class CheckboxDef
{
	constructor(name, toggle, parent, row, column)
    {
        this.panel = new BABYLON.GUI.Grid();
        this.panel.isPointerBlocker = true;
        this.panel.addColumnDefinition(0.85);
        this.panel.addColumnDefinition(0.15);

        this.rect = new BABYLON.GUI.Rectangle();
        this.panel.addControl(this.rect, 0, 0);

        this.text = new BABYLON.GUI.TextBlock();
        this.text.text = name;
        this.text.horizontalAlignment = 0;
        this.rect.addControl(this.text);
        
        this.rect1 = new BABYLON.GUI.Rectangle();
        this.panel.addControl(this.rect1, 0, 1);
        this.checkbox = new BABYLON.GUI.Checkbox();
        this.checkbox.width = "20px";
        this.checkbox.height = "20px";
        this.checkbox.isChecked = toggle;
        this.checkbox.color = "white";
        this.rect1.addControl(this.checkbox);
       
        parent.addControl(this.panel, row, column); 
    }

    callbackChangedValue(callbackFunc)
    {
        this.checkbox.onIsCheckedChangedObservable.add(callbackFunc);
    }
}
