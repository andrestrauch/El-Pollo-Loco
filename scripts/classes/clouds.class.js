import { Globals } from "./globals.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";
export class Cloud extends MoveableObjects {
	constructor(_x, variante) {
		super();

		if (variante >= 2) {
			this.setVersion2();
		} else {
			this.setVersion1();
		}

		this.x = _x;
		this.speedX = 0.5;

		IntervalHub.startInterval(this.animate, 1000 / 30);
	}

	setVersion1() {
		this.loadImage(`assets/img/5_background/layers/4_clouds/1.png`);
		this.y = -20;
		this.h = 700;
		this.w = 900;
	}

	setVersion2() {
		this.loadImage(`assets/img/5_background/layers/4_clouds/2.png`);
		this.y = -40;
		this.h = 500;
		this.w = 600;
	}

	animate = () => {
		if (this.x < -3000) this.x = 8100;

		if (Globals.pause == false) this.moveLeft();
	};
}
