import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Chicken extends MoveableObjects {
    constructor() {
        super().loadImage(`assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
        this.loadImages(ImageHub.CHICKEN.run);

        this.x = 600 + Math.random() * 8000;
        this.y = 600;
        this.w = 100;
        this.h = 150;
        this.speedX = 0.5 + Math.random() * 0.5;
        this.pausedGame = false;

        this.checkIdle();
        this.animate();
    }

    checkIdle() {
        setInterval(() => {
            if (Globals.longIdle) this.pausedGame = Globals.longIdle;
            else this.pausedGame = false;
        }, 1000 / 60);
    }
    animate() {
        setInterval(() => {
            this.animateObject(ImageHub.CHICKEN.run);
        }, 1000 / 4);

        this.moveLeft();
    }
}
