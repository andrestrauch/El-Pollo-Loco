import { Chicken } from "../classes/chicken.class.js";
import { Cloud } from "../classes/clouds.class.js";
import { Endboss } from "../classes/endboss.class.js";
import { MiniChicken } from "../classes/chicken-mini.class.js";
import { Collectables } from "../classes/collectables.class.js";

export class Level1 {
	static enemies;
	static clouds;
	static coins;
	static bottles;

	static addContent() {
		Level1.clearArrays();
		Level1.addEnemy();
		Level1.addClouds();
		Level1.addCoins();
		Level1.addBottle();
	}

	static clearArrays() {
		Level1.enemies = [];
		Level1.clouds = [];
		Level1.coins = [];
		Level1.bottles = [];
	}

	static addEnemy() {
		for (let i = 0; i <= 12; i++) {
			Level1.enemies.push(new Chicken());
		}

		for (let i = 0; i <= 5; i++) {
			Level1.enemies.push(new MiniChicken());
		}
		Level1.enemies.push(new Endboss());
	}

	static addClouds() {
		Level1.clouds.push(new Cloud(-2000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(-1000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(0, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(1000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(2000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(3000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(4000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(5000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(6000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(7000, 1 + Math.random() * 2));
		Level1.clouds.push(new Cloud(8000, 1 + Math.random() * 2));
	}

	static addCoins() {
		Level1.coins.push(new Collectables(300, 610, "coin"));
		Level1.coins.push(new Collectables(400, 610, "coin"));
		Level1.coins.push(new Collectables(500, 610, "coin"));
		Level1.coins.push(new Collectables(700, 610, "coin"));
		Level1.coins.push(new Collectables(900, 610, "coin"));
		Level1.coins.push(new Collectables(1100, 610, "coin"));
		Level1.coins.push(new Collectables(1500, 610, "coin"));
		Level1.coins.push(new Collectables(1800, 610, "coin"));
		Level1.coins.push(new Collectables(2000, 610, "coin"));
		Level1.coins.push(new Collectables(2400, 610, "coin"));

		Level1.coins.push(new Collectables(300, 500, "coin"));
		Level1.coins.push(new Collectables(400, 500, "coin"));
		Level1.coins.push(new Collectables(500, 500, "coin"));
		Level1.coins.push(new Collectables(700, 500, "coin"));
		Level1.coins.push(new Collectables(900, 500, "coin"));
		Level1.coins.push(new Collectables(1100, 500, "coin"));
		Level1.coins.push(new Collectables(1500, 500, "coin"));
		Level1.coins.push(new Collectables(1800, 500, "coin"));
		Level1.coins.push(new Collectables(2000, 500, "coin"));
		Level1.coins.push(new Collectables(2400, 500, "coin"));

		Level1.coins.push(new Collectables(300, 390, "coin"));
		Level1.coins.push(new Collectables(400, 390, "coin"));
		Level1.coins.push(new Collectables(500, 390, "coin"));
		Level1.coins.push(new Collectables(700, 390, "coin"));
		Level1.coins.push(new Collectables(900, 390, "coin"));
		Level1.coins.push(new Collectables(1100, 390, "coin"));
		Level1.coins.push(new Collectables(1500, 390, "coin"));
		Level1.coins.push(new Collectables(1800, 390, "coin"));
		Level1.coins.push(new Collectables(2000, 390, "coin"));
		Level1.coins.push(new Collectables(2400, 390, "coin"));

		Level1.coins.push(new Collectables(300, 280, "coin"));
		Level1.coins.push(new Collectables(400, 280, "coin"));
		Level1.coins.push(new Collectables(500, 280, "coin"));
		Level1.coins.push(new Collectables(700, 280, "coin"));
		Level1.coins.push(new Collectables(900, 280, "coin"));
		Level1.coins.push(new Collectables(1100, 280, "coin"));
		Level1.coins.push(new Collectables(1500, 280, "coin"));
		Level1.coins.push(new Collectables(1800, 280, "coin"));
		Level1.coins.push(new Collectables(2000, 280, "coin"));
		Level1.coins.push(new Collectables(2400, 280, "coin"));

		Level1.coins.push(new Collectables(2800, 610, "coin"));
		Level1.coins.push(new Collectables(2800, 500, "coin"));
		Level1.coins.push(new Collectables(2800, 390, "coin"));
		Level1.coins.push(new Collectables(2800, 280, "coin"));

		Level1.coins.push(new Collectables(3200, 610, "coin"));
		Level1.coins.push(new Collectables(3200, 500, "coin"));
		Level1.coins.push(new Collectables(3200, 390, "coin"));
		Level1.coins.push(new Collectables(3200, 280, "coin"));

		Level1.coins.push(new Collectables(3500, 610, "coin"));
		Level1.coins.push(new Collectables(3500, 500, "coin"));
		Level1.coins.push(new Collectables(3500, 390, "coin"));
		Level1.coins.push(new Collectables(3500, 280, "coin"));

		Level1.coins.push(new Collectables(3800, 610, "coin"));
		Level1.coins.push(new Collectables(3800, 500, "coin"));
		Level1.coins.push(new Collectables(3800, 390, "coin"));
		Level1.coins.push(new Collectables(3800, 280, "coin"));

		Level1.coins.push(new Collectables(-500, 610, "coin"));
		Level1.coins.push(new Collectables(-500, 500, "coin"));
		Level1.coins.push(new Collectables(-500, 390, "coin"));
		Level1.coins.push(new Collectables(-500, 280, "coin"));

		Level1.coins.push(new Collectables(-1000, 610, "coin"));
		Level1.coins.push(new Collectables(-1000, 500, "coin"));
		Level1.coins.push(new Collectables(-1000, 390, "coin"));
		Level1.coins.push(new Collectables(-1000, 280, "coin"));

		Level1.coins.push(new Collectables(-2000, 610, "coin"));
		Level1.coins.push(new Collectables(-2000, 500, "coin"));
		Level1.coins.push(new Collectables(-2000, 390, "coin"));
		Level1.coins.push(new Collectables(-2000, 280, "coin"));
	}

	static addBottle() {
		Level1.bottles.push(new Collectables(-200, 600, "bottle"));
		Level1.bottles.push(new Collectables(-1050, 600, "bottle"));
		Level1.bottles.push(new Collectables(-2050, 600, "bottle"));
		Level1.bottles.push(new Collectables(200, 600, "bottle"));
		Level1.bottles.push(new Collectables(1050, 600, "bottle"));
		Level1.bottles.push(new Collectables(1950, 600, "bottle"));
		Level1.bottles.push(new Collectables(2350, 600, "bottle"));
		Level1.bottles.push(new Collectables(3050, 600, "bottle"));
		Level1.bottles.push(new Collectables(3700, 600, "bottle"));
	}
}
