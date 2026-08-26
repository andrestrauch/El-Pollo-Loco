import { AudioHub } from "./audioHub.class.js";
import { Globals } from "./globals.class.js";

export class MoveableObjects {
    x;
    y;
    w;
    h;
    rX;
    rY;
    rW;
    rH;
    speedX;
    speedY;
    otherDirection = false;
    pausedGame = false;
    img;
    images = [];
    imgCache = {};
    currentImg = 0;
    energy;

    mapDraw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.rX, this.rY, this.rW, this.rH);
        ctx.stroke();
    }

    isColliding(mo) {
        return (
            this.rX + this.rW > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX + mo.rW &&
            this.rY < mo.rY + mo.rH
        );
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    animateObject(obj) {
        let i = this.currentImg % obj.length;
        let path = obj[i];
        this.img = this.imgCache[path];
        this.currentImg++;
    }

    moveLeft() {
        if (this.pausedGame != true && Globals.isDead == false) this.x -= this.speedX;
    }

    moveRight() {
        if (this.x < Globals.lvEnd) {
            this.x += (Globals.cvsW / 100) * 1;
            Globals.currentX = this.x;
            // AudioHub.playOne(AudioHub.PepeRun);
        }
        this.otherDirection = false;
    }

    applyGravity = () => {
        this.isAboveGround();
        if (Globals.aboveGround == true || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= 1;

            if (this.y > 260) this.y = 260;
        }
    };

    isAboveGround() {
        Globals.aboveGround = false;
        if (this.y < 260) Globals.aboveGround = true;
        if (this.y == 260) Globals.aboveGround = false;

        // if (this instanceof ThrowableObject) Globals.aboveGround = true;
    }

    jump() {
        this.speedY = 28;
    }

    checkIdle = () => {
        if (Globals.longIdle) this.pausedGame = Globals.longIdle;
        else this.pausedGame = false;
    };

    fallOutBottom = () => {
        if (this.energy == 0 && this.y < 800) this.y += 0.1;
    };
}
