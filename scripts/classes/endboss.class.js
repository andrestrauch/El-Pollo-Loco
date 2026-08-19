import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Endboss extends MoveableObjects {
    constructor() {
        super().loadImage(`assets/img/4_enemie_boss_chicken/2_alert/G5.png`);
        this.loadImages(ImageHub.BOSS.angry);
        this.loadImages(ImageHub.BOSS.run);
        this.loadImages(ImageHub.BOSS.attacking);

        this.x = 24650;
        this.y = 0;
        this.w = 500;
        this.h = 800;
        this.speedX = 1;

        this.getRealFrame();
        this.animate();
    }

    getRealFrame() {
        setInterval(() => {
            this.rX = this.x;
            this.rY = this.y;
            this.rW = this.w;
            this.rH = this.h;
        }, 300);
    }

    animate() {
        setInterval(() => {
            let gap = this.x - Globals.currentX;
            if (gap > 700) this.animateObject(ImageHub.BOSS.angry);
        }, 1000 / 1.5);

        setInterval(() => {
            let gap = this.x - Globals.currentX;
            if (gap <= 700 && gap > 300) {
                this.animateObject(ImageHub.BOSS.run);
                // this.moveLeft();
            }
        }, 1000 / 2.5);

        setInterval(() => {
            let gap = this.x - Globals.currentX;
            if (gap <= 300) {
                this.animateObject(ImageHub.BOSS.attacking);
                // this.moveLeft();
            }
        }, 1000 / 2.5);
    }
}
