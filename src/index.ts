import { Application, Loader } from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';
import {LevelBanner} from './LevelBanner';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);
	
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginvertical = Math.floor((window.innerHeight - gameHeight) / 2);
	
	app.view.style.width = gameWidth +"px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal +"px";
	app.view.style.marginRight = marginvertical + "px";

	app.view.style.marginTop = marginvertical +"px";
	app.view.style.marginBottom = marginvertical + "px";

});
window.dispatchEvent(new Event("resize"));

Loader.shared.add(assets)
Loader.shared.onComplete.add(()=>{

	const myScene = new Scene();
	const myBanner = new LevelBanner();
	
	myBanner.position.set(440,60);
	app.stage.addChild(myScene);
	
	app.stage.addChild(myBanner);
	
})

Loader.shared.load();