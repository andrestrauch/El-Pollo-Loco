import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { MiniChicken } from "./chicken-mini.class.js";
import { Endboss } from "./endboss.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./image-hub.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Statusbar } from "./statusbars.class.js";
import { ThrowableObject } from "./throwable-object.class.js";

export class World {
	canvas;
	ctx;
	throwBottles = [];
	healthStatusBar = new Statusbar(75, -40, 275, 150, 100, 100, ImageHub.STATUSBAR.healthbar);
	coinsStatusBar = new Statusbar(30, 30, 322, 150, 0, 100, ImageHub.STATUSBAR.coinsbar);
	bottleStatusBar = new Statusbar(0, 100, 350, 150, 0, 5, ImageHub.STATUSBAR.bottlebar);
	bossHealthStatusBar = new Statusbar(1000, -150, 150, 150, 5, 5, ImageHub.STATUSBAR.bossHealthbar);

	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext(`2d`);

		this.draw();
		IntervalHub.startInterval(this.run, 1000 / 5);
	}

	run = () => {
		this.collectItems();
		this.checkCollisions();
		this.bottleThrow();
		this.checkBossHealthbar();
		this.checkHealing();
	};

	checkHealing() {
		if (
			Globals.longIdle == true &&
			Globals.level1.character.coins >= 100 &&
			Globals.level1.character.energy < 100
		) {
			Globals.level1.character.energy += 0.5;
			this.healthStatusBar.setCurrentImg(Globals.level1.character.energy);
		}
	}

	checkCollisions() {
		this.checkFalling(Globals.level1.character.y);

		Globals.level1.enemies.forEach((enemy) => {
			this.checkEnemyCollision(enemy);
			this.checkBottleCollision(enemy);
		});

		this.checkOnGround(Globals.level1.character.y);
	}

	checkEnemyCollision(enemy) {
		// teile weiter auslagend in eigene methoden
		if (Globals.level1.character.isColliding(enemy)) {
			if (
				Globals.level1.character.energy > 0 &&
				enemy.energy > 0 &&
				(Globals.isFalling == false || enemy instanceof Endboss)
			) {
				Globals.isHurt = true;
				Globals.level1.character.energy -= 2;
			}
			this.healthStatusBar.setCurrentImg(Globals.level1.character.energy);
			if (Globals.level1.character.energy == 0) Globals.isDead = true;
			if (Globals.isFalling && (enemy instanceof Chicken || enemy instanceof MiniChicken)) {
				enemy.energy = 0;
			}
		}
	}

	checkBottleCollision(enemy) {
		if (this.throwBottles.length > 0) {
			Globals.bottleContact = false;
			if (this.throwBottles[this.throwBottles.length - 1].isColliding(enemy)) {
				Globals.bottleContact = true;
				if (enemy.energy > 0) enemy.energy -= 1;
			}
			if (enemy instanceof Endboss) {
				this.bossHealthStatusBar.setCurrentImg(enemy.energy);
				Globals.bossDead = false;
				if (enemy.energy == 0) Globals.bossDead = true;
			}
		}
	}

	collectItems() {
		this.collectCoins();
		this.collectBottles();
	}

	collectCoins() {
		for (let i = 0; i < Globals.level1.coins.length; i++) {
			if (Globals.level1.character.isColliding(Globals.level1.coins[i])) {
				Globals.level1.character.coins += 2;
				Globals.level1.coins.splice(i, 1);
				this.coinsStatusBar.setCurrentImg(Globals.level1.character.coins);
			}
		}
	}

	collectBottles() {
		for (let i = 0; i < Globals.level1.bottles.length; i++) {
			if (Globals.level1.character.isColliding(Globals.level1.bottles[i])) {
				Globals.level1.character.bottles += 1;
				Globals.level1.bottles.splice(i, 1);
				this.bottleStatusBar.setCurrentImg(Globals.level1.character.bottles);
			}
		}
	}

	bottleThrow() {
		if (
			Keyboard.D &&
			Globals.level1.character.bottles > 0 &&
			Globals.level1.character.otherDirection == false &&
			Globals.aboveGround == false
		) {
			let bottle = new ThrowableObject(Globals.level1.character.x + 100, Globals.level1.character.y + 200);
			this.throwBottles.push(bottle);
			Globals.level1.character.bottles -= 1;
			this.bottleStatusBar.setCurrentImg(Globals.level1.character.bottles);
		}
	}

	checkFalling(y) {
		if (Globals.level1.character.y < -170) Globals.isFalling = true;
	}

	checkOnGround(y) {
		if (y == 260) Globals.isFalling = false;
	}

	checkBossHealthbar() {
		if (Globals.bossX - Globals.level1.character.x < 1000) this.bossHealthStatusBar.y = -10;
		if (Globals.bossX - Globals.level1.character.x > 1200) this.bossHealthStatusBar.y = -150;
	}

	draw() {
		this.ctx.clearRect(9, 0, this.canvas.width, this.canvas.height);
		this.ctx.translate(Globals.cameraX, 0);
		this.addObjToMap(Globals.level1.backgrounds);
		this.addObjToMap(Globals.level1.clouds);
		this.addObjToMap(Globals.level1.coins);
		this.addObjToMap(Globals.level1.bottles);
		this.addObjToMap(Globals.level1.enemies);
		this.addObjToMap(this.throwBottles);
		this.addToMap(Globals.level1.character);
		this.ctx.translate(-Globals.cameraX, 0);
		this.addToMap(this.healthStatusBar);
		this.addToMap(this.coinsStatusBar);
		this.addToMap(this.bottleStatusBar);
		this.addToMap(this.bossHealthStatusBar);
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
