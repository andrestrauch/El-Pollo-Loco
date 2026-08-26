import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Chicken extends MoveableObjects {
    constructor() {
        super();

        this.x = 500 + Math.random() * 8000;
        this.y = 600;
        this.w = 100;
        this.h = 150;
        this.speedX = 0.3 + Math.random() * 1;

        this.imageLoading();
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x + 20;
        this.rY = this.y + 50;
        this.rW = this.w - 30;
        this.rH = this.h - 90;
    };

    imageLoading() {
        this.loadImage(`assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
        this.loadImages(ImageHub.CHICKEN.run);
    }

    animate() {
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.checkIdle, 1000 / 60);
        IntervalHub.startInterval(this.animateChicken, 1000 / 4);
        // IntervalHub.startInterval(this.animateMove, 1000 / 60);
    }

    animateChicken = () => {
        this.animateObject(ImageHub.CHICKEN.run);
    };

    animateMove = () => {
        this.moveLeft();
    };
}
