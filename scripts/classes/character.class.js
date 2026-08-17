class Character extends MoveableObjects {
    energy = 100;
    bottle = 0;
    images = [
        "assets/img/2_character_pepe/1_idle/idle/I-1.png",
        "assets/img/2_character_pepe/1_idle/idle/I-2.png",
        "assets/img/2_character_pepe/1_idle/idle/I-3.png",
        "assets/img/2_character_pepe/1_idle/idle/I-4.png",
        "assets/img/2_character_pepe/1_idle/idle/I-5.png",
        "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    ];
    imagesWalking = [
        "assets/img/2_character_pepe/2_walk/W-21.png",
        "assets/img/2_character_pepe/2_walk/W-22.png",
        "assets/img/2_character_pepe/2_walk/W-23.png",
        "assets/img/2_character_pepe/2_walk/W-24.png",
        "assets/img/2_character_pepe/2_walk/W-25.png",
        "assets/img/2_character_pepe/2_walk/W-26.png",
    ];

    constructor() {
        super().loadImage(`assets/img/2_character_pepe/1_idle/idle/I-1.png`);
        this.loadImages(this.images);
        this.loadImages(this.imagesWalking);
        this.x = 20;
        this.y = 260;
        this.w = 200;
        this.h = 500;

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (Keyboard.RIGHT == false || Keyboard.LEFT == false) {
                let i = this.currentImg % this.images.length;
                let path = this.images[i];
                this.img = this.imgCache[path];
                this.currentImg++;
            }
        }, 400);

        setInterval(() => {
            if (Keyboard.RIGHT == true || Keyboard.LEFT == true) {
                let i = this.currentImg % this.imagesWalking.length;
                let path = this.imagesWalking[i];
                this.img = this.imgCache[path];
                this.currentImg++;
            }
        }, 1000 / 10);

        setInterval(() => {
            this.jump();
            this.fall();
            this.moveRight();
            this.moveLeft();
            if (this.x < 24000) cameraX = -this.x;
        }, 1000 / 60);

        document.addEventListener("keydown", function (event) {
            if (event.code == "Space") {
                Keyboard.SPACE = true;
            }
            if (event.code == "ArrowUp") {
                Keyboard.UP = true;
            }
            if (event.code == "ArrowDown") {
                Keyboard.DOWN = true;
            }
            if (event.code == "ArrowLeft") {
                Keyboard.LEFT = true;
            }
            if (event.code == "ArrowRight") {
                Keyboard.RIGHT = true;
            }
        });

        document.addEventListener("keyup", function (event) {
            if (event.code == "Space") {
                Keyboard.SPACE = false;
            }
            if (event.code == "ArrowUp") {
                Keyboard.UP = false;
            }
            if (event.code == "ArrowDown") {
                Keyboard.DOWN = false;
            }
            if (event.code == "ArrowLeft") {
                Keyboard.LEFT = false;
            }
            if (event.code == "ArrowRight") {
                Keyboard.RIGHT = false;
            }
        });
    }

    moveRight() {
        if (Keyboard.RIGHT == true) {
            if (this.x < 25000) this.x += (cvsW / 100) * 1;
            // console.log(this.x);

            if (aboveGround) {
                if (this.x < 25000) this.x += (cvsW / 100) * 2;
            }
        }
        this.otherDirection = false;
    }

    moveLeft() {
        if (Keyboard.LEFT == true) {
            if (this.x > -2200) this.x -= (cvsW / 100) * 1;
            if (aboveGround) {
                if (this.x > -2200) this.x -= (cvsW / 100) * 2;
            }
            this.otherDirection = true;
        } else this.otherDirection = false;
    }

    jump() {
        if (Keyboard.SPACE == true || Keyboard.UP == true) {
            this.y -= (cvsH / 100) * 1;
            if (this.y < -150) this.y = -150;
        }
        if (this.x <= 2200) aboveGround = true;
    }
    fall() {
        if (Keyboard.DOWN == true) {
            this.y += (cvsH / 100) * 1;
            if (this.y > 260) this.y = 260;
        }
        if (this.y == 260) aboveGround = false;
    }
}
