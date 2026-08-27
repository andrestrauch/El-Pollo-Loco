import { Globals } from "./globals.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";

export class Background extends MoveableObjects {
	constructor(imgPath, x) {
		super().loadImage(imgPath);
		this.x = x;
		this.y = 0;
		this.w = Globals.cvsW;
		this.h = Globals.cvsH;
	}
}
