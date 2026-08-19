import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Character extends MoveableObjects {
    energy = 100;
    bottle = 0;

    constructor() {
        super().loadImage(`assets/img/2_character_pepe/1_idle/idle/I-1.png`);
        this.loadImages(ImageHub.PEPE.idle);
        this.loadImages(ImageHub.PEPE.run);
        this.loadImages(ImageHub.PEPE.jump);

        this.x = 23650;
        this.y = 260;
        this.w = 200;
        this.h = 500;
        this.speedY = 0;
        Globals.currentX = this.x;
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            if (Globals.aboveGround == true) this.animateObject(ImageHub.PEPE.jump);
        }, 1000 / 10);

        setInterval(() => {
            if (Keyboard.RIGHT == false || Keyboard.LEFT == false) {
                this.animateObject(ImageHub.PEPE.idle);
            }
        }, 400);

        setInterval(() => {
            if ((Keyboard.RIGHT == true || Keyboard.LEFT == true) && Globals.aboveGround == false) {
                this.animateObject(ImageHub.PEPE.run);
            }
        }, 1000 / 10);

        setInterval(() => {
            this.jump();
            // this.fall();
            this.moveRight();
            this.moveLeft();
            if (this.x < 24000) Globals.cameraX = -this.x;
        }, 1000 / 60);
    }

    moveRight() {
        if (Keyboard.RIGHT == true) {
            if (this.x < 25000) {
                this.x += (Globals.cvsW / 100) * 1;
                Globals.currentX = this.x;
            }

            if (Globals.aboveGround) {
                this.x += (Globals.cvsW / 100) * 0;
            }
        }
        this.otherDirection = false;
    }

    moveLeft() {
        if (Keyboard.LEFT == true) {
            if (this.x > -2200) {
                this.x -= (Globals.cvsW / 100) * 1;
                Globals.currentX = this.x;
            }
            if (Globals.aboveGround) {
                this.x -= (Globals.cvsW / 100) * 0;
            }
            this.otherDirection = true;
        } else this.otherDirection = false;
    }

    jump() {
        if ((Keyboard.SPACE == true || Keyboard.UP == true) && Globals.aboveGround == false) {
            // this.y -= (Globals.cvsH / 100) * 1;
            // if (this.y < -150) this.y = -150;
            this.speedY = 26;
        }
        // if (this.x <= -2200) Globals.aboveGround = true;
    }
    // fall() {
    //     if (Keyboard.DOWN == true) {
    //         this.y += (Globals.cvsH / 100) * 1;
    //         if (this.y > 260) this.y = 260;
    //     }
    //     if (this.y == 260) Globals.aboveGround = false;
    // }
}
