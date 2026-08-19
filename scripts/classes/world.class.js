import { Globals } from "./globals.class.js";

export class World {
    canvas;
    ctx;

    character = Globals.level1.character;
    enemies = Globals.level1.enemies;
    clouds = Globals.level1.clouds;
    lvStart = Globals.level1.lvStart;
    lvEnd = Globals.level1.lvEnd;
    backgrounds = Globals.level1.backgrounds;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext(`2d`);
        this.draw();
    }

    draw() {
        this.ctx.clearRect(9, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(Globals.cameraX, 0);
        this.addObjToMap(this.backgrounds);
        this.addToMap(this.clouds);
        this.addObjToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-Globals.cameraX, 0);

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
}
