import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Endboss extends MoveableObjects {
    gap;
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

        console.log("test");
    };

    imageLoading() {
        this.loadImage(`assets/img/4_enemie_boss_chicken/2_alert/G5.png`);
        this.loadImages(ImageHub.BOSS.angry);
        this.loadImages(ImageHub.BOSS.run);
        this.loadImages(ImageHub.BOSS.attacking);
    }

    checkGap(gap) {
        setInterval(() => {
            gap = this.x - Globals.currentX;
            // console.log(this.x, Globals.currentX);
            // console.log(gap);
        }, 1000 / 60);
        return gap;
    }

    animate() {
        IntervalHub.startInterval(this.animateAngry, 500);
        IntervalHub.startInterval(this.animateAttacking, 1000 / 2.5);
        IntervalHub.startInterval(this.animateRun, 1000 / 2.5);
    }

    animateAngry = () => {
        if (this.checkGap(this.gap) > 700) this.animateObject(ImageHub.BOSS.angry);
    };

    animateAttacking = () => {
        let gap = this.x - Globals.currentX;
        if (gap <= 300) {
            this.animateObject(ImageHub.BOSS.attacking);
            // this.moveLeft();
        }
    };

    animateRun() {
        let gap = this.x - Globals.currentX;
        if (gap <= 700 && gap > 300) {
            this.animateObject(ImageHub.BOSS.run);
            // this.moveLeft();
        }
    }
}
