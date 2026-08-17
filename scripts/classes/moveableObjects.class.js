class MoveableObjects {
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

    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
            // if (this.x < -800) this.x = cvsW + 300;
        }, 1000 / 60);
    }
}
