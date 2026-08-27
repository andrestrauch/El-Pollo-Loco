import { IntervalHub } from "./interval-hub.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";

export class Collectables extends MoveableObjects {
	x;
	y;
	w;
	h;
	path;
	xOff;
	yOff;
	wOff;
	hOff;

	constructor(_x, _y, item) {
		super();
		this.x = _x;
		this.y = _y;
		this.checkItem(item);
		this.loadImage(this.path);
		IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
	}

	getRealFrame = () => {
		this.rX = this.x + this.xOff;
		this.rY = this.y + this.yOff;
		this.rW = this.w - this.wOff;
		this.rH = this.h - this.hOff;
	};

	checkItem(item) {
		switch (item) {
			case "coin":
				this.setCoinData();
				break;

			case "bottle":
				this.setBottleData();
				break;
		}
	}

	setCoinData() {
		this.w = 200;
		this.h = 200;
		this.xOff = 75;
		this.yOff = 75;
		this.wOff = 150;
		this.hOff = 150;
		this.path = "assets/img/8_coin/coin_1.png";
	}

	setBottleData() {
		this.w = 100;
		this.h = 150;
		this.xOff = 40;
		this.yOff = 30;
		this.wOff = 80;
		this.hOff = 30;
		this.path = "assets/img/6_salsa_bottle/salsa_bottle.png";
	}
}
