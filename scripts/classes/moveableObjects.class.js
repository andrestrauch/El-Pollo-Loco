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
        ctx.lineWidth = "10";
        ctx.strokeStyle = "yellow";
        ctx.rect(this.rX, this.rY, this.rW, this.rH);
        ctx.stroke();

        // console.log(this.rX);
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
        setInterval(() => {
            if (this.pausedGame != true && Globals.isDead == false) this.x -= this.speedX;
        }, 1000 / 60);
    }

    moveRight() {
        if (this.x < 25000) {
            this.x += (Globals.cvsW / 100) * 1;
            Globals.currentX = this.x;
        }
        this.otherDirection = false;
    }

    applyGravity() {
        setInterval(() => {
            this.isAboveGround();
            if (Globals.aboveGround == true || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= 1;
            }
        }, 1000 / 30);
    }

    isAboveGround() {
        Globals.aboveGround = false;
        if (this.y < 260) Globals.aboveGround = true;
        if (this.y == 260) Globals.aboveGround = false;
    }

    jump() {
        this.speedY = 28;
    }
}
