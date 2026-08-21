import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class coinsbar extends MoveableObjects {
    coins;

    constructor() {
        super();

        this.x = 30;
        this.y = 40;
        this.w = 322;
        this.h = 200;
        this.coins = 0;

        this.imageLoading(this.coins);
    }

    imageLoading(coins) {
        this.loadImages(ImageHub.STATUSBAR.coinsbar);
        this.setCurrentImg(coins);
    }

    setCurrentImg(percentage) {
        let index = this.setIndex(percentage);
        let newPath = ImageHub.STATUSBAR.coinsbar[index];
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
