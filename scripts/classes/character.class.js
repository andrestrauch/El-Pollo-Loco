import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Character extends MoveableObjects {
    bottle = 0;

    offset = {
        top: 250,
        right: 50,
        bottom: 30,
        left: 40,
    };

    constructor() {
        super();
        this.x = 20;
        this.y = 260;
        this.w = 200;
        this.h = 500;

        this.energy = 100;
        this.speedY = 0;
        Globals.currentX = this.x;
        this.getRealFrame();
        this.imageLoading();
        this.applyGravity();
        this.animate();
    }

    getRealFrame() {
        setInterval(() => {
            this.rX = this.x + this.offset.left;
            this.rY = this.y + this.offset.top;
            this.rW = this.w - this.offset.right - this.offset.right;
            this.rH = this.h - this.offset.top - this.offset.bottom;
        }, 1000 / 60);
    }
    animate() {
        this.animateMove();
        this.animateIdle();
        this.animateHurt();
        this.animateDead();
        this.changePosition();
    }

    imageLoading() {
        this.loadImage(`assets/img/2_character_pepe/1_idle/idle/I-1.png`);
        this.loadImages(ImageHub.PEPE.idle);
        this.loadImages(ImageHub.PEPE.longIdle);
        this.loadImages(ImageHub.PEPE.run);
        this.loadImages(ImageHub.PEPE.jump);
        this.loadImages(ImageHub.PEPE.hurt);
        this.loadImages(ImageHub.PEPE.dead);
    }

    animateHurt() {
        let z = 0;
        setInterval(() => {
            if (Globals.isHurt) {
                this.animateObject(ImageHub.PEPE.hurt);
                z++;
                if (z > 30) {
                    Globals.isHurt = false;
                    z = 0;
                }
            }
        }, 1000 / 5);
    }

    animateDead() {
        setInterval(() => {
            if (this.energy == 0) {
                this.animateObject(ImageHub.PEPE.dead);
                this.otherDirection = false;
            }
        }, 1000 / 8);
    }

    animateMove() {
        setInterval(() => {
            if (Globals.aboveGround == true) this.animateObject(ImageHub.PEPE.jump);
            if (
                (Keyboard.RIGHT == true || Keyboard.LEFT == true) &&
                Globals.aboveGround == false &&
                this.energy > 0
            ) {
                this.animateObject(ImageHub.PEPE.run);
            }
        }, 1000 / 10);
    }

    animateIdle() {
        let z = 0;
        setInterval(() => {
            if (
                (Keyboard.RIGHT == false || Keyboard.LEFT == false) &&
                Globals.aboveGround == false &&
                this.energy > 0
            ) {
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
            if (
                (Keyboard.SPACE == true || Keyboard.UP == true) &&
                Globals.aboveGround == false &&
                this.energy > 0
            )
                this.jump();
            if (Keyboard.RIGHT == true && this.energy > 0) this.moveRight();
            if (Keyboard.LEFT == true && this.energy > 0) this.moveLeft();
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
