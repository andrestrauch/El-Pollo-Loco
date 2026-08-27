import { IntervalHub } from "./interval-hub.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";

export class Coins extends MoveableObjects {
	x;
	y;
	constructor(_x, _y) {
		super();

		this.x = _x;
		this.y = _y;
		this.w = 200;
		this.h = 200;

		this.loadImage("assets/img/8_coin/coin_1.png");

		IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
	}

	getRealFrame = () => {
		this.rX = this.x + 75;
		this.rY = this.y + 75;
		this.rW = this.w - 150;
		this.rH = this.h - 150;
	};
}
