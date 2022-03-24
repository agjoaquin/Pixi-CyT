import { Application, Container, Loader, Sprite } from 'pixi.js'

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

Loader.shared.add({url:"./sunglasses.png" ,name: "sunglasses"});
Loader.shared.add({url:"./MaySun.png",name: "sun"});
Loader.shared.add({url:"./Cloud.png",name: "cloud"});

Loader.shared.onComplete.add(()=>{

	const cloud: Sprite = Sprite.from("cloud");

	cloud.scale.x =0.6 ;
	cloud.scale.y =0.6 ;

	cloud.position.set(0,-50);

	const cloud2: Sprite = Sprite.from("cloud");

	cloud2.scale.x =0.6 ;
	cloud2.scale.y =0.6 ;

	cloud2.position.set(800,-20);

	const sun: Sprite = Sprite.from("sun");

	sun.anchor.set(0.5);

	const sunglasses: Sprite = Sprite.from("sunglasses");

	sunglasses.anchor.set(0.5);

	sunglasses.scale.x =0.2 ;
	sunglasses.scale.y =0.2 ;

	const sunWhitSunglasses: Container = new Container();
	
	sunWhitSunglasses.addChild(sun);
	sunWhitSunglasses.addChild(sunglasses);

	sunWhitSunglasses.position.set(640,360);

	sunWhitSunglasses.scale.set(0.7);

	const clouds: Container = new Container();

	clouds.position.set(0,260);

	clouds.addChild(cloud);
	clouds.addChild(cloud2);

	app.stage.addChild(sunWhitSunglasses);
	app.stage.addChild(clouds);

})

Loader.shared.load();