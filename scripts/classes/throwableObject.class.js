import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class ThrowableObject extends MoveableObjects {
    constructor() {
        super();

        this.x = 20;
        this.y = 800;
        this.w = 200;
        this.h = 200;

        this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
        IntervalHub.startInterval(this.applyGravity, 1000 / 60);
        IntervalHub.startInterval(this.applyBottle, 1000 / 10);
    }

    applyBottle = () => {
        if (Keyboard.D) this.throw(0, 300);
    };

    throw(x, y) {
        this.speedX = 10;
        this.speedY = 20;
        this.y = y;
        this.x = x;

        setInterval(() => {
            this.x += this.speedX;
        }, 10);
    }

    applyGravity = () => {
        this.y -= this.speedY;
        this.speedY -= 1;
    };
}
