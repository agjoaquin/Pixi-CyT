import { Container } from "pixi.js";
import { Clouds } from "./Clouds";
import { SunWithGlasses } from "./SunWithGlasses";

export class Scene extends Container{

    constructor(){
        super();
		
        const sunWhitSunglasses: SunWithGlasses = new SunWithGlasses();

	    sunWhitSunglasses.position.set(640,360);

	    sunWhitSunglasses.scale.set(0.7);

	    const clouds: Clouds = new Clouds();

	    clouds.position.set(0,260);

	    this.addChild(sunWhitSunglasses);
	    this.addChild(clouds);
    }
}