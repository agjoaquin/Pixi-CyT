import { Container, NineSlicePlane, Sprite, Texture, Text } from "pixi.js";
import { SunWithGlasses } from "./SunWithGlasses";

export class LevelBanner extends Container {

    constructor(){
        super();

        const panelback = new NineSlicePlane(
            Texture.from("ButtonBlackBlue"),
            35,35,35,35
        );

        //panelback.position.set(440,60); //Centrado : (  (1280-400)/2, (720-600)/2)  ) 
        panelback.width = 400;
        panelback.height = 600;

        //Lo dejo como sprite y no como un NSP debido a que me generaba una deformación
        const message: Sprite = Sprite.from("ButtonBlackOr");  
        message.scale._x=0.5;
        message.scale._y=0.3;
        message.anchor.set(0.5);
        message.position.set(200,90);

        const textmsg: Text = new Text("Nivel completo",{fontSize:45, fontFamily:"Arial Rounded MT Bold"}); // \n
        textmsg.position.set(60,65);

        const home: Sprite = Sprite.from("Home");
        home.scale.set(0.25);
        home.anchor.set(0.5);
        home.position.set(200,530);

        const quit: Sprite = Sprite.from("Quit");
        quit.scale.set(0.25);
        quit.anchor.set(0.5);
        quit.position.set(100,530);

        const retry: Sprite = Sprite.from("Retry");
        retry.scale.set(0.25);
        retry.anchor.set(0.5);
        retry.position.set(300,530);

        const sunws: SunWithGlasses = new SunWithGlasses();
        sunws.scale.set(0.3);
	    sunws.position.set(200,250);
	    

        const textpts: Text = new Text("Puntos:\n12345",{fontSize:60, align:"center", fontFamily:"Arial Rounded MT Bold"}); // \n
        textpts.anchor.set(0.5);
        textpts.position.set(200,400);

        
        this.addChild(panelback);
        this.addChild(home);
        this.addChild(quit);
        this.addChild(retry);
        this.addChild(message);
        this.addChild(textmsg);
        this.addChild(sunws);
        this.addChild(textpts);
    }   
}

