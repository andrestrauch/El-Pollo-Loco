import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class MiniChicken extends MoveableObjects {
    constructor() {
        super();

        this.x = 10000 + Math.random() * 10000;
        this.y = 658;
        this.w = 60;
        this.h = 90;
        this.speedX = 0.42 + Math.random() * 2;

        this.imageLoading();
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x;
        this.rY = this.y;
        this.rW = this.w;
        this.rH = this.h;
    };

    imageLoading() {
        this.loadImage(`assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png`);
        this.loadImages(ImageHub.MINICHICKEN.run);
    }

    animate() {
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.checkIdle, 1000 / 60);
        IntervalHub.startInterval(this.animateChicken, 1000 / 3.5);
        IntervalHub.startInterval(this.animateMove, 1000 / 30);
    }

    animateChicken = () => {
        this.animateObject(ImageHub.MINICHICKEN.run);
    };

    animateMove = () => {
        this.moveLeft();
    };
}
