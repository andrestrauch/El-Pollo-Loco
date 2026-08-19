import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Character extends MoveableObjects {
    energy = 100;
    bottle = 0;

    constructor() {
        super();
        this.x = 20;
        this.y = 260;
        this.w = 200;
        this.h = 500;

        this.rX = 20;
        this.rY = 260;
        this.rW = 150;
        this.rH = 200;
        this.speedY = 0;
        Globals.currentX = this.x;
        this.imageLoading();
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.animateMove();
        this.animateIdle();
        this.changePosition();
    }

    imageLoading() {
        this.loadImage(`assets/img/2_character_pepe/1_idle/idle/I-1.png`);
        this.loadImages(ImageHub.PEPE.idle);
        this.loadImages(ImageHub.PEPE.longIdle);
        this.loadImages(ImageHub.PEPE.run);
        this.loadImages(ImageHub.PEPE.jump);
    }

    animateMove() {
        setInterval(() => {
            if (Globals.aboveGround == true) this.animateObject(ImageHub.PEPE.jump);
            if ((Keyboard.RIGHT == true || Keyboard.LEFT == true) && Globals.aboveGround == false) {
                this.animateObject(ImageHub.PEPE.run);
            }
        }, 1000 / 10);
    }

    animateIdle() {
        let z = 0;
        setInterval(() => {
            if ((Keyboard.RIGHT == false || Keyboard.LEFT == false) && Globals.aboveGround == false) {
                if (z < 30) this.animateObject(ImageHub.PEPE.idle);
                if (z >= 30) {
                    this.animateObject(ImageHub.PEPE.longIdle);
                    Globals.longIdle = true;
                }
            }
            z++;
            if (Keyboard.RIGHT || Keyboard.LEFT || Globals.aboveGround) {
                z = 0;
                Globals.longIdle = false;
            }
        }, 400);
    }

    changePosition() {
        setInterval(() => {
            if ((Keyboard.SPACE == true || Keyboard.UP == true) && Globals.aboveGround == false) this.jump();
            if (Keyboard.RIGHT == true) this.moveRight();
            if (Keyboard.LEFT == true) this.moveLeft();
            if (this.x < 24000) Globals.cameraX = -this.x;
        }, 1000 / 60);
    }

    moveLeft() {
        if (this.x > -2200) {
            this.x -= (Globals.cvsW / 100) * 1;
            Globals.currentX = this.x;
        }
        this.otherDirection = true;
    }
}
