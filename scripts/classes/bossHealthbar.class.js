import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class BossHealthbar extends MoveableObjects {
    health;

    constructor() {
        super();

        this.x = 1000;
        this.y = -150; //150
        this.w = 150;
        this.h = 150;
        this.health = 5;

        this.imageLoading(this.health);
    }

    imageLoading(health) {
        this.loadImages(ImageHub.STATUSBAR.bossHealthbar);
        this.setCurrentImg(health);
    }

    setCurrentImg(percentage) {
        let index = this.setIndex(percentage);
        let newPath = ImageHub.STATUSBAR.bossHealthbar[index];
        this.img = this.imgCache[newPath];
    }

    setIndex(percentage) {
        let newIndex;
        if (percentage >= 5) newIndex = 5;
        else if (percentage == 4) newIndex = 4;
        else if (percentage == 3) newIndex = 3;
        else if (percentage == 2) newIndex = 2;
        else if (percentage == 1) newIndex = 1;
        else newIndex = 0;

        return newIndex;
    }
}
