import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Endboss extends MoveableObjects {
    constructor() {
        super();
        this.x = 8200;
        Globals.bossX = this.x;
        this.y = 10;
        this.w = 500;
        this.h = 800;
        this.energy = 100;
        this.speedX = 0.7;

        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        this.imageLoading();
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x + 90;
        this.rY = this.y + 310;
        this.rW = this.w - 160;
        this.rH = this.h - 460;
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
        return isInGap;
    }

    animate() {
        IntervalHub.startInterval(this.checkIdle, 1000 / 60);
        IntervalHub.startInterval(this.animateAngry, 400);
        IntervalHub.startInterval(this.animateRun, 300);
        IntervalHub.startInterval(this.animateAttacking, 250);
    }

    animateAngry = () => {
        if (this.checkGap(800, 1200, this.x, Globals.currentX) || this.pausedGame)
            this.animateObject(ImageHub.BOSS.angry);
    };

    animateAttacking = () => {
        if (
            this.checkGap(-100, 100, this.x, Globals.currentX) &&
            this.pausedGame != true &&
            Globals.isDead == false
        )
            this.animateObject(ImageHub.BOSS.attacking);
    };

    animateRun = () => {
        Globals.bossX = this.x;
        if (
            this.checkGap(0, 900, this.x, Globals.currentX) &&
            this.pausedGame != true &&
            Globals.isDead == false
        )
            this.animateObject(ImageHub.BOSS.run);

        if (this.checkGap(0, 900, this.x, Globals.currentX))
            IntervalHub.startInterval(this.animateMove, 1000 / 30);
    };

    animateMove = () => {
        if (this.checkGap(0, 900, this.x, Globals.currentX)) this.moveLeft();
    };
}
