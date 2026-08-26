import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class MiniChicken extends MoveableObjects {
    constructor() {
        super();

        this.x = 6500 + Math.random() * 2000;
        this.y = 650;
        this.w = 60;
        this.h = 90;
        this.energy = 1;
        this.speedX = 0.42 + Math.random() * 2;
        this.isDead = false;

        this.imageLoading();
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x + 10;
        this.rY = this.y + 20;
        this.rW = this.w - 20;
        this.rH = this.h - 40;
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

        IntervalHub.startInterval(this.fallOutBottom, 1000 / 60);
    }

    animateChicken = () => {
        if (this.energy > 0) this.animateObject(ImageHub.MINICHICKEN.run);
        else this.loadImage(`assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png`);

        if (this.energy == 0 && this.isDead == false) {
            this.isDead = true;
            this.w = 80;
            this.h = 100;
            this.y = 655;
        }
    };

    animateMove = () => {
        if (this.energy > 0) this.moveLeft();
    };
}
