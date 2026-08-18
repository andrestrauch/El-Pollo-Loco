class Chicken extends MoveableObjects {
    constructor() {
        super().loadImage(`assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
        this.loadImages(ImageHub.Chicken.run);

        this.x = 600 + Math.random() * 8000;
        this.y = 600;
        this.w = 100;
        this.h = 150;
        this.speedX = 0.5 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImg % ImageHub.Chicken.run.length;
            let path = ImageHub.Chicken.run[i];
            this.img = this.imgCache[path];
            this.currentImg++;
        }, 1000 / 4);

        this.moveLeft();
    }
}
