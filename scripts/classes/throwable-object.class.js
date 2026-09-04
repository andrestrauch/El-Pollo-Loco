import { AudioHub } from "./audio-hub.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./image-hub.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";

export class ThrowableObject extends MoveableObjects {
	x;
	y;
	break = false;

	constructor(_x, _y) {
		super();

		this.x = _x;
		this.y = _y;
		this.w = 120;
		this.h = 160;
		this.speedX = 30;
		this.speedY = 22;

		this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
		this.loadImages(ImageHub.BOTTLE.throw);
		this.loadImages(ImageHub.BOTTLE.splash);
		IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
		IntervalHub.startInterval(this.throw, 1000 / 30);
		IntervalHub.startInterval(this.animateBottle, 1000 / 5);
	}

	getRealFrame = () => {
		this.rX = this.x + 50;
		this.rY = this.y + 30;
		this.rW = this.w - 90;
		this.rH = this.h - 60;
	};

	throw = () => {
		if (Globals.pause == false && Globals.bossDead == false && Globals.isDead == false) {
			this.y -= this.speedY;
			this.speedY -= 2;
			this.x += this.speedX;
		}
	};

	animateBottle = () => {
		if (Globals.pause == false) {
			if (Globals.bottleContact == false) this.animateObject(ImageHub.BOTTLE.throw);

			if (this.y >= 610 || Globals.bottleContact == true) {
				this.animateObject(ImageHub.BOTTLE.splash);
				this.playBottleBreak();
				this.break = true;
			}
		}
	};

	playBottleBreak() {
		if (this.break == false) {
			AudioHub.playOne(AudioHub.bottleBreak);
			setTimeout(() => {
				AudioHub.stopOne(AudioHub.bottleBreak);
				AudioHub.bottleBreak.isPlayed = false;
			}, 200);
		}
	}
}
