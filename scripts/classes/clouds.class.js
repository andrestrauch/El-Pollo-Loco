import { MoveableObjects } from "./moveableObjects.class.js";
export class Cloud extends MoveableObjects {
    constructor() {
        super().loadImage(`assets/img/5_background/layers/4_clouds/1.png`);
        this.x = 50 + Math.random() * 850;
        this.y = 0;
        this.w = 900;
        this.h = 700;
        this.speedX = 0.5;

        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}
