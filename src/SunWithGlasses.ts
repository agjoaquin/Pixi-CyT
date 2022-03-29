import { Container, Sprite } from "pixi.js";

export class SunWithGlasses extends Container {

    constructor(){
        super();
        const sun: Sprite = Sprite.from("sun");

	    sun.anchor.set(0.5);
        
        const sunglasses: Sprite = Sprite.from("sunglasses");

	    sunglasses.anchor.set(0.5);

	    sunglasses.scale.x =0.2 ;
	    sunglasses.scale.y =0.2 ;
	
	    this.addChild(sun);
	    this.addChild(sunglasses);
    }
}