import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class ThrowableObject extends MoveableObjects {
    x;
    y;

    constructor(_x, _y) {
        super();

        this.x = _x;
        this.y = _y;
        this.w = 100;
        this.h = 150;

        this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
    }

    getRealFrame = () => {
        this.rX = this.x + 40;
        this.rY = this.y + 30;
        this.rW = this.w - 80;
        this.rH = this.h - 30;
    };
}
