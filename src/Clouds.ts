import { Container, Sprite } from "pixi.js";

export class Clouds extends Container {

    constructor(){
        super();
        
	    const cloud1: Sprite = Sprite.from("cloud");

	    cloud1.scale.x =0.6 ;
	    cloud1.scale.y =0.6 ;

	    cloud1.position.set(0,-50);

	    const cloud2: Sprite = Sprite.from("cloud");

	    cloud2.scale.x =0.6 ;
	    cloud2.scale.y =0.6 ;

	    cloud2.position.set(800,-20);

        this.addChild(cloud1);
	    this.addChild(cloud2);
    }
}