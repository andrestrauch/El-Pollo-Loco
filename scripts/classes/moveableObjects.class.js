import { Globals } from "./globals.class.js";

export class MoveableObjects {
    x;
    y;
    w;
    h;
    speedX;
    speedY;
    otherDirection = false;
    img;
    images = [];
    imgCache = {};
    currentImg = 0;

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
            this.x -= this.speedX;
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
