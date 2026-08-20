import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Endboss extends MoveableObjects {
    constructor() {
        super();
        this.x = 24650;
        this.y = 0;
        this.w = 500;
        this.h = 800;
        this.speedX = 1;

        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
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
        this.loadImage(`assets/img/4_enemie_boss_chicken/2_alert/G5.png`);
        this.loadImages(ImageHub.BOSS.angry);
        this.loadImages(ImageHub.BOSS.run);
        this.loadImages(ImageHub.BOSS.attacking);
    }

    checkGap(kleiner, größer, x, pepeX) {
        let isInGap = false;
        let newGap = x - pepeX;
        if (newGap > kleiner && newGap < größer) isInGap = true;

        // console.log(newGap, isInGap);
        return isInGap;
    }

    animate() {
        IntervalHub.startInterval(this.animateAngry, 400);
        IntervalHub.startInterval(this.animateAttacking, 1000 / 2.5);
        IntervalHub.startInterval(this.animateRun, 1000 / 3);
    }

    animateAngry = () => {
        if (this.checkGap(700, 1200, this.x, Globals.currentX))
            this.animateObject(ImageHub.BOSS.angry);
    };

    animateAttacking = () => {
        if (
            this.checkGap(0, 301, this.x, Globals.currentX) &&
            this.pausedGame != true &&
            Globals.isDead == false
        )
            this.animateObject(ImageHub.BOSS.attacking);
    };

    animateRun = () => {
        if (
            this.checkGap(300, 700, this.x, Globals.currentX) &&
            this.pausedGame != true &&
            Globals.isDead == false
        )
            this.animateObject(ImageHub.BOSS.run);

        if (this.checkGap(100, 700, this.x, Globals.currentX))
            IntervalHub.startInterval(this.animateMove, 1000 / 20);
    };

    animateMove = () => {
        if (this.checkGap(100, 700, this.x, Globals.currentX)) this.moveLeft();
    };
}
