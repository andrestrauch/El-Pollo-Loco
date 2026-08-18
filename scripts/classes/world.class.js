class World {
    canvas;
    ctx;

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = new Cloud();
    backgrounds = [];

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext(`2d`);

        this.addBackgrounds();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(9, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(cameraX, 0);
        this.addObjToMap(this.backgrounds);
        this.addToMap(this.clouds);
        this.addObjToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.w, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.w, mo.h);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    addObjToMap(mo) {
        mo.forEach((obj) => {
            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.w, obj.h);
        });
    }

    addBackgrounds() {
        for (let b = -2; b <= 20; b++) {
            let x = 2;
            if (b % 2) x = 1;
            this.backgrounds.push(new Background("assets/img/5_background/layers/air.png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/3_third_layer/" + x + ".png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/2_second_layer/" + x + ".png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/1_first_layer/" + x + ".png", cvsW * b));
        }
    }
}
