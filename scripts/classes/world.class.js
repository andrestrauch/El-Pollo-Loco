import { bottlebar } from "./bottlebar.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { coinsbar } from "./coinsbar.class.js";
import { Coins } from "./collectableCoins.class.js";
import { Endboss } from "./endboss.class.js";
import { Globals } from "./globals.class.js";
import { healthbar } from "./healthbar.class..js";
import { ThrowableObject } from "./throwableObject.class.js";

export class World {
    canvas;
    ctx;

    character = Globals.level1.character;
    enemies = Globals.level1.enemies;
    clouds = Globals.level1.clouds;
    lvStart = Globals.level1.lvStart;
    lvEnd = Globals.level1.lvEnd;
    backgrounds = Globals.level1.backgrounds;
    healthStatusBar = new healthbar();
    coinsStatusBar = new coinsbar();
    bottleStatusBar = new bottlebar();
    bottles = [new ThrowableObject()];
    coins = Globals.level1.coins;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext(`2d`);

        this.draw();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            // this.enemies.forEach((enemy) => {
            //     if (this.character.isColliding(enemy)) {
            //         Globals.isHurt = true;
            //         if (this.character.energy > 0) {
            //             this.character.energy -= 5;
            //         }
            //         this.healthStatusBar.setCurrentImg(this.character.energy);
            //         if (this.character.energy == 0) Globals.isDead = true;
            //     }
            // });

            for (let i = 0; i < this.coins.length; i++) {
                if (this.character.isColliding(this.coins[i])) {
                    this.character.coins += 5;
                    this.coins.splice(i, 1);
                    this.coinsStatusBar.setCurrentImg(this.character.coins);
                }
            }
        }, 1000 / 5);
    }

    draw() {
        this.ctx.clearRect(9, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(Globals.cameraX, 0);
        this.addObjToMap(this.backgrounds);
        this.addToMap(this.clouds);
        // this.addObjToMap(this.enemies);
        this.addObjToMap(this.coins);
        this.addObjToMap(this.bottles);
        this.addToMap(this.character);
        this.ctx.translate(-Globals.cameraX, 0);

        this.addToMap(this.healthStatusBar);
        this.addToMap(this.coinsStatusBar);
        this.addToMap(this.bottleStatusBar);

        requestAnimationFrame(() => this.draw());
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.mapDraw(this.ctx);
        if (mo instanceof Character || mo instanceof Chicken || mo instanceof Endboss)
            if (mo.otherDirection) {
                this.flipImageBack(mo);
            }
        mo.drawFrame(this.ctx);
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
