import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Chicken extends MoveableObjects {
    constructor() {
        super();

        this.x = 600 + Math.random() * 20000;
        this.y = 600;
        this.w = 100;
        this.h = 150;

        this.speedX = 0.5 + Math.random() * 0.5;
        this.pausedGame = false;

        this.imageLoading();
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.checkIdle, 1000 / 60);
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x;
        this.rY = this.y;
        this.rW = this.w;
        this.rH = this.h;
    };

    imageLoading() {
        this.loadImage(`assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
        this.loadImages(ImageHub.CHICKEN.run);
    }

    checkIdle = () => {
        if (Globals.longIdle) this.pausedGame = Globals.longIdle;
        else this.pausedGame = false;
    };

    animate() {
        IntervalHub.startInterval(this.animateChicken, 1000 / 4);
        IntervalHub.startInterval(this.animateMove, 1000 / 60);
    }

    animateChicken = () => {
        this.animateObject(ImageHub.CHICKEN.run);
    };

    animateMove = () => {
        this.moveLeft();
    };

    //     animateChicken() {
    //         setInterval(() => {
    //             this.animateObject(ImageHub.CHICKEN.run);
    //         }, 1000 / 4);
    //     }
}
