import { MoveableObjects } from "./moveable-objects.class.js";

export class Statusbar extends MoveableObjects {
	status;
	path;
	max;

	constructor(_x, _y, _w, _h, status, _max, _path) {
		super();
		this.x = _x;
		this.y = _y;
		this.w = _w;
		this.h = _h;
		this.max = _max;
		this.status = status;
		this.path = _path;
		this.imageLoading(this.status);
	}

	imageLoading(status) {
		this.loadImages(this.path);
		this.setCurrentImg(status);
	}

	setCurrentImg(percentage) {
		let index = this.setIndex(percentage);
		let newPath = this.path[index];
		this.img = this.imgCache[newPath];
	}

	setIndex(percentage) {
		let newIndex;

		if (this.max == 100) {
			newIndex = this.set100er(percentage);
		}

		if (this.max == 5) {
			newIndex = this.set5er(percentage);
		}

		return newIndex;
	}

	set100er(percentage) {
		let newIndex;
		if (percentage >= 100) newIndex = 5;
		else if (percentage >= 80) newIndex = 4;
		else if (percentage >= 60) newIndex = 3;
		else if (percentage >= 40) newIndex = 2;
		else if (percentage >= 20) newIndex = 1;
		else newIndex = 0;
		return newIndex;
	}

	set5er(percentage) {
		let newIndex;
		if (percentage >= 5) newIndex = 5;
		else if (percentage > 4) newIndex = 4;
		else if (percentage > 3) newIndex = 3;
		else if (percentage > 2) newIndex = 2;
		else if (percentage >= 1) newIndex = 1;
		else newIndex = 0;
		return newIndex;
	}
}
