import { bottlebar } from "./bottlebar.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { coinsbar } from "./coinsbar.class.js";
import { Endboss } from "./endboss.class.js";
import { Globals } from "./globals.class.js";
import { healthbar } from "./healthbar.class..js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
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
    coins = Globals.level1.coins;
    bottles = Globals.level1.bottles;
    throwBottles = [];

    healthStatusBar = new healthbar();
    coinsStatusBar = new coinsbar();
    bottleStatusBar = new bottlebar();

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext(`2d`);

        this.draw();
        IntervalHub.startInterval(this.run, 1000 / 5);
    }

    run = () => {
        this.collectItems();
        // this.checkCollisions();
        this.bottleThrow();
    };

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                Globals.isHurt = true;
                if (this.character.energy > 0) {
                    this.character.energy -= 5;
                }
                this.healthStatusBar.setCurrentImg(this.character.energy);
                if (this.character.energy == 0) Globals.isDead = true;
            }
        });
    }

    collectItems() {
        this.collectCoins();
        this.collectBottles();
    }

    collectCoins() {
        for (let i = 0; i < this.coins.length; i++) {
            if (this.character.isColliding(this.coins[i])) {
                this.character.coins += 2;
                this.coins.splice(i, 1);
                this.coinsStatusBar.setCurrentImg(this.character.coins);
            }
        }
    }

    collectBottles() {
        for (let i = 0; i < this.bottles.length; i++) {
            if (this.character.isColliding(this.bottles[i])) {
                this.character.bottles += 1;
                this.bottles.splice(i, 1);
                this.bottleStatusBar.setCurrentImg(this.character.bottles);
            }
        }
    }

    bottleThrow() {
        if (
            Keyboard.D &&
            this.character.bottles > 0 &&
            this.character.otherDirection == false &&
            Globals.aboveGround == false
        ) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 200);
            this.throwBottles.push(bottle);
            this.character.bottles -= 1;
            this.bottleStatusBar.setCurrentImg(this.character.bottles);
        }
    }

    draw() {
        this.ctx.clearRect(9, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(Globals.cameraX, 0);
        this.addObjToMap(this.backgrounds);
        this.addObjToMap(this.clouds);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.coins);
        this.addObjToMap(this.bottles);
        this.addObjToMap(this.throwBottles);
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
        // mo.drawFrame(this.ctx);
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
