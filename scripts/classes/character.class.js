import { AudioHub } from "./audioHub.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveableObjects.class.js";

export class Character extends MoveableObjects {
    bottles = 0;
    coins = 0;
    hurtZ;
    idleZ;

    offset = {
        top: 250,
        right: 50,
        bottom: 20,
        left: 40,
    };

    constructor() {
        super();
        this.x = 20;
        this.y = 260;
        this.w = 200;
        this.h = 500;

        this.hurtZ = 0;
        this.idleZ = 0;
        this.energy = 100;
        this.speedY = 0;
        Globals.currentX = this.x;

        this.imageLoading();
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.applyGravity, 1000 / 30);
        this.animate();
    }

    getRealFrame = () => {
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.w - this.offset.right - this.offset.right;
        this.rH = this.h - this.offset.top - this.offset.bottom;
    };

    animate() {
        IntervalHub.startInterval(this.animateMove, 1000 / 10);
        IntervalHub.startInterval(this.animateIdle, 1000 / 2.5);
        IntervalHub.startInterval(this.animateHurt, 1000 / 5);
        IntervalHub.startInterval(this.animateDead, 1000 / 8);
        IntervalHub.startInterval(this.changePosition, 1000 / 60);
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

    animateHurt = () => {
        if (Globals.isHurt) {
            this.animateObject(ImageHub.PEPE.hurt);
            this.hurtZ++;
            if (this.hurtZ > 30) {
                Globals.isHurt = false;
                this.hurtZ = 0;
            }
        }
    };

    animateDead = () => {
        if (this.energy == 0) {
            this.animateObject(ImageHub.PEPE.dead);
            this.otherDirection = false;
        }
    };

    animateMove = () => {
        if (Globals.aboveGround == true) this.animateObject(ImageHub.PEPE.jump);
        if (
            (Keyboard.RIGHT == true || Keyboard.LEFT == true) &&
            Globals.aboveGround == false &&
            this.energy > 0
        ) {
            this.animateObject(ImageHub.PEPE.run);
            // AudioHub.playOne(AudioHub.PepeRun);
        }

        // console.log(this.y);

        // if ((Keyboard.RIGHT == false && Keyboard.LEFT == false) || Globals.aboveGround == true)
        //     AudioHub.stopOne(AudioHub.PepeRun);
    };

    animateIdle = () => {
        if (
            (Keyboard.RIGHT == false || Keyboard.LEFT == false) &&
            Globals.aboveGround == false &&
            this.energy > 0
        ) {
            if (this.idleZ < 30) this.animateObject(ImageHub.PEPE.idle);
            if (this.idleZ >= 30) {
                this.animateObject(ImageHub.PEPE.longIdle);
                Globals.longIdle = true;
            }
        }
        this.idleZ++;
        if (Keyboard.RIGHT || Keyboard.LEFT || Globals.aboveGround) {
            this.idleZ = 0;
            Globals.longIdle = false;
        }
    };

    changePosition = () => {
        if (
            (Keyboard.SPACE == true || Keyboard.UP == true) &&
            Globals.aboveGround == false &&
            this.energy > 0
        )
            this.jump();
        if (Keyboard.RIGHT == true && this.energy > 0 && Globals.bossX > this.x) this.moveRight();
        if (Keyboard.LEFT == true && this.energy > 0) this.moveLeft();
        if (this.x < Globals.lvEnd - 1000) Globals.cameraX = -this.x;
    };

    //auslagern in mo klasse
    moveLeft() {
        if (this.x > -2200) {
            this.x -= (Globals.cvsW / 100) * 1;
            Globals.currentX = this.x;
        }
        this.otherDirection = true;
    }
}
