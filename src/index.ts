import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url:"./clampy.png",name: "Clampy"});
Loader.shared.add({url:"./MaySun.png",name: "sun"});

Loader.shared.onComplete.add(()=>{
	const sun: Sprite = Sprite.from("sun");

	console.log("Hola mundo!",sun.width,sun.height)

	sun.anchor.set(0.5);

	sun.x = app.screen.width / 2;
	sun.y = app.screen.height / 2;

	app.stage.addChild(sun);
})

Loader.shared.load();