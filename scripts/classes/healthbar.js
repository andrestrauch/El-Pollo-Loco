import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class healthbar extends MoveableObjects {
    health;

    constructor() {
        super();

        this.x = 20;
        this.y = 0;
        this.w = 200;
        this.h = 100;
        this.health = 100;

        this.imageLoading(this.health);
    }

    imageLoading(health) {
        this.loadImages(ImageHub.STATUSBAR.healthbar);
        this.setCurrentImg(health);
    }

    setCurrentImg(percentage) {
        let index = this.setIndex(percentage);
        let newPath = ImageHub.STATUSBAR.healthbar[index];
        this.img = this.imgCache[newPath];
    }

    setIndex(percentage) {
        let newIndex;
        if (percentage == 100) newIndex = 5;
        else if (percentage > 80) newIndex = 4;
        else if (percentage > 60) newIndex = 3;
        else if (percentage > 40) newIndex = 2;
        else if (percentage > 20) newIndex = 1;
        else newIndex = 0;

        return newIndex;
    }
}
