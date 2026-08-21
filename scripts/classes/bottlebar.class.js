import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class bottlebar extends MoveableObjects {
    bottle;

    constructor() {
        super();

        this.x = 0;
        this.y = 130;
        this.w = 350;
        this.h = 200;
        this.bottle = 0;

        this.imageLoading(this.bottle);
    }

    imageLoading(bottle) {
        this.loadImages(ImageHub.STATUSBAR.bottlebar);
        this.setCurrentImg(bottle);
    }

    setCurrentImg(percentage) {
        let index = this.setIndex(percentage);
        let newPath = ImageHub.STATUSBAR.bottlebar[index];
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
