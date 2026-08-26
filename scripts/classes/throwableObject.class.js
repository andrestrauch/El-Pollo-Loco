import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
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
        this.speedX = 25;
        this.speedY = 30;

        this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
        this.loadImages(ImageHub.BOTTLE.throw);
        this.loadImages(ImageHub.BOTTLE.splash);
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.throw, 1000 / 30);
        IntervalHub.startInterval(this.animateBottle, 1000 / 5);
    }

    getRealFrame = () => {
        this.rX = this.x + 40;
        this.rY = this.y + 30;
        this.rW = this.w - 80;
        this.rH = this.h - 30;
    };

    throw = () => {
        this.y -= this.speedY;
        this.speedY -= 2;
        this.x += this.speedX;
    };

    animateBottle = () => {
        if (Globals.bottleContact == false) this.animateObject(ImageHub.BOTTLE.throw);

        if (this.y >= 610 || Globals.bottleContac == true)
            this.animateObject(ImageHub.BOTTLE.splash);
    };
}
