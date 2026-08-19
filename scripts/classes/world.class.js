import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
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
            this.flipImage(mo);
        }

        mo.mapDraw(this.ctx);
        if (mo instanceof Character || mo instanceof Chicken) mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    addObjToMap(mo) {
        mo.forEach((obj) => {
            this.addToMap(obj);
        });
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.w, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
