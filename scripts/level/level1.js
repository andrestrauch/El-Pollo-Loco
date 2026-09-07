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
		Level1.coins.push(new Collectables(-2300, 190, "coin"));
		Level1.coins.push(new Collectables(-2300, 270, "coin"));
		Level1.coins.push(new Collectables(-2300, 330, "coin"));
		Level1.coins.push(new Collectables(-2300, 400, "coin"));
		Level1.coins.push(new Collectables(-2300, 470, "coin"));
		Level1.coins.push(new Collectables(-2300, 540, "coin"));
		Level1.coins.push(new Collectables(-2300, 610, "coin"));

		Level1.coins.push(new Collectables(-2100, 190, "coin"));
		Level1.coins.push(new Collectables(-2100, 270, "coin"));
		Level1.coins.push(new Collectables(-2100, 330, "coin"));
		Level1.coins.push(new Collectables(-2100, 400, "coin"));
		Level1.coins.push(new Collectables(-2100, 470, "coin"));
		Level1.coins.push(new Collectables(-2100, 540, "coin"));
		Level1.coins.push(new Collectables(-2100, 610, "coin"));

		Level1.coins.push(new Collectables(-1900, 190, "coin"));
		Level1.coins.push(new Collectables(-1900, 270, "coin"));
		Level1.coins.push(new Collectables(-1900, 330, "coin"));
		Level1.coins.push(new Collectables(-1900, 400, "coin"));
		Level1.coins.push(new Collectables(-1900, 470, "coin"));
		Level1.coins.push(new Collectables(-1900, 540, "coin"));
		Level1.coins.push(new Collectables(-1900, 610, "coin"));

		Level1.coins.push(new Collectables(-1700, 190, "coin"));
		Level1.coins.push(new Collectables(-1700, 270, "coin"));
		Level1.coins.push(new Collectables(-1700, 330, "coin"));
		Level1.coins.push(new Collectables(-1700, 400, "coin"));
		Level1.coins.push(new Collectables(-1700, 470, "coin"));
		Level1.coins.push(new Collectables(-1700, 540, "coin"));
		Level1.coins.push(new Collectables(-1700, 610, "coin"));

		Level1.coins.push(new Collectables(-1500, 190, "coin"));
		Level1.coins.push(new Collectables(-1500, 270, "coin"));
		Level1.coins.push(new Collectables(-1500, 330, "coin"));
		Level1.coins.push(new Collectables(-1500, 400, "coin"));
		Level1.coins.push(new Collectables(-1500, 470, "coin"));
		Level1.coins.push(new Collectables(-1500, 540, "coin"));
		Level1.coins.push(new Collectables(-1500, 610, "coin"));

		// V
		Level1.coins.push(new Collectables(245, 190, "coin"));
		Level1.coins.push(new Collectables(260, 260, "coin"));
		Level1.coins.push(new Collectables(285, 330, "coin"));
		Level1.coins.push(new Collectables(315, 400, "coin"));
		Level1.coins.push(new Collectables(335, 470, "coin"));
		Level1.coins.push(new Collectables(360, 540, "coin"));
		Level1.coins.push(new Collectables(400, 610, "coin"));
		Level1.coins.push(new Collectables(550, 190, "coin"));
		Level1.coins.push(new Collectables(525, 260, "coin"));
		Level1.coins.push(new Collectables(500, 330, "coin"));
		Level1.coins.push(new Collectables(475, 400, "coin"));
		Level1.coins.push(new Collectables(450, 470, "coin"));
		Level1.coins.push(new Collectables(430, 540, "coin"));

		// O
		Level1.coins.push(new Collectables(655, 190, "coin"));
		Level1.coins.push(new Collectables(630, 260, "coin"));
		Level1.coins.push(new Collectables(605, 330, "coin"));
		Level1.coins.push(new Collectables(580, 400, "coin"));
		Level1.coins.push(new Collectables(605, 470, "coin"));
		Level1.coins.push(new Collectables(630, 540, "coin"));
		Level1.coins.push(new Collectables(655, 610, "coin"));
		Level1.coins.push(new Collectables(730, 190, "coin"));
		Level1.coins.push(new Collectables(755, 260, "coin"));
		Level1.coins.push(new Collectables(780, 330, "coin"));
		Level1.coins.push(new Collectables(805, 400, "coin"));
		Level1.coins.push(new Collectables(780, 470, "coin"));
		Level1.coins.push(new Collectables(755, 540, "coin"));
		Level1.coins.push(new Collectables(730, 610, "coin"));

		// R
		Level1.coins.push(new Collectables(900, 260, "coin"));
		Level1.coins.push(new Collectables(900, 330, "coin"));
		Level1.coins.push(new Collectables(900, 400, "coin"));
		Level1.coins.push(new Collectables(900, 470, "coin"));
		Level1.coins.push(new Collectables(900, 540, "coin"));
		Level1.coins.push(new Collectables(900, 610, "coin"));
		Level1.coins.push(new Collectables(960, 190, "coin"));
		Level1.coins.push(new Collectables(960, 400, "coin"));
		Level1.coins.push(new Collectables(1020, 190, "coin"));
		Level1.coins.push(new Collectables(1020, 400, "coin"));
		Level1.coins.push(new Collectables(1080, 260, "coin"));
		Level1.coins.push(new Collectables(1080, 330, "coin"));
		Level1.coins.push(new Collectables(1060, 470, "coin"));
		Level1.coins.push(new Collectables(1100, 540, "coin"));
		Level1.coins.push(new Collectables(1150, 600, "coin"));

		// S
		Level1.coins.push(new Collectables(1220, 190, "coin"));
		Level1.coins.push(new Collectables(1220, 260, "coin"));
		Level1.coins.push(new Collectables(1220, 330, "coin"));
		Level1.coins.push(new Collectables(1220, 400, "coin"));
		Level1.coins.push(new Collectables(1220, 540, "coin"));
		Level1.coins.push(new Collectables(1220, 610, "coin"));
		Level1.coins.push(new Collectables(1280, 190, "coin"));
		Level1.coins.push(new Collectables(1280, 400, "coin"));
		Level1.coins.push(new Collectables(1280, 610, "coin"));
		Level1.coins.push(new Collectables(1340, 190, "coin"));
		Level1.coins.push(new Collectables(1340, 260, "coin"));
		Level1.coins.push(new Collectables(1340, 400, "coin"));
		Level1.coins.push(new Collectables(1340, 470, "coin"));
		Level1.coins.push(new Collectables(1340, 540, "coin"));
		Level1.coins.push(new Collectables(1340, 610, "coin"));

		// I
		Level1.coins.push(new Collectables(1420, 190, "coin"));
		Level1.coins.push(new Collectables(1420, 260, "coin"));
		Level1.coins.push(new Collectables(1420, 330, "coin"));
		Level1.coins.push(new Collectables(1420, 400, "coin"));
		Level1.coins.push(new Collectables(1420, 470, "coin"));
		Level1.coins.push(new Collectables(1420, 540, "coin"));
		Level1.coins.push(new Collectables(1420, 610, "coin"));

		// C
		Level1.coins.push(new Collectables(1500, 260, "coin"));
		Level1.coins.push(new Collectables(1500, 330, "coin"));
		Level1.coins.push(new Collectables(1500, 400, "coin"));
		Level1.coins.push(new Collectables(1500, 470, "coin"));
		Level1.coins.push(new Collectables(1500, 540, "coin"));
		Level1.coins.push(new Collectables(1560, 190, "coin"));
		Level1.coins.push(new Collectables(1560, 610, "coin"));
		Level1.coins.push(new Collectables(1620, 190, "coin"));
		Level1.coins.push(new Collectables(1620, 610, "coin"));
		Level1.coins.push(new Collectables(1680, 260, "coin"));
		Level1.coins.push(new Collectables(1680, 540, "coin"));

		// H
		Level1.coins.push(new Collectables(1760, 190, "coin"));
		Level1.coins.push(new Collectables(1760, 260, "coin"));
		Level1.coins.push(new Collectables(1760, 330, "coin"));
		Level1.coins.push(new Collectables(1760, 400, "coin"));
		Level1.coins.push(new Collectables(1760, 470, "coin"));
		Level1.coins.push(new Collectables(1760, 540, "coin"));
		Level1.coins.push(new Collectables(1760, 610, "coin"));
		Level1.coins.push(new Collectables(1820, 400, "coin"));
		Level1.coins.push(new Collectables(1880, 400, "coin"));
		Level1.coins.push(new Collectables(1940, 190, "coin"));
		Level1.coins.push(new Collectables(1940, 260, "coin"));
		Level1.coins.push(new Collectables(1940, 330, "coin"));
		Level1.coins.push(new Collectables(1940, 400, "coin"));
		Level1.coins.push(new Collectables(1940, 470, "coin"));
		Level1.coins.push(new Collectables(1940, 540, "coin"));
		Level1.coins.push(new Collectables(1940, 610, "coin"));

		// T
		Level1.coins.push(new Collectables(2020, 190, "coin"));
		Level1.coins.push(new Collectables(2080, 190, "coin"));
		Level1.coins.push(new Collectables(2140, 190, "coin"));
		Level1.coins.push(new Collectables(2200, 190, "coin"));
		Level1.coins.push(new Collectables(2260, 190, "coin"));
		Level1.coins.push(new Collectables(2140, 260, "coin"));
		Level1.coins.push(new Collectables(2140, 330, "coin"));
		Level1.coins.push(new Collectables(2140, 400, "coin"));
		Level1.coins.push(new Collectables(2140, 470, "coin"));
		Level1.coins.push(new Collectables(2140, 540, "coin"));
		Level1.coins.push(new Collectables(2140, 610, "coin"));

		// C
		Level1.coins.push(new Collectables(1500 + 1100, 260, "coin"));
		Level1.coins.push(new Collectables(1500 + 1100, 330, "coin"));
		Level1.coins.push(new Collectables(1500 + 1100, 400, "coin"));
		Level1.coins.push(new Collectables(1500 + 1100, 470, "coin"));
		Level1.coins.push(new Collectables(1500 + 1100, 540, "coin"));
		Level1.coins.push(new Collectables(1560 + 1100, 190, "coin"));
		Level1.coins.push(new Collectables(1560 + 1100, 610, "coin"));
		Level1.coins.push(new Collectables(1620 + 1100, 190, "coin"));
		Level1.coins.push(new Collectables(1620 + 1100, 610, "coin"));
		Level1.coins.push(new Collectables(1680 + 1100, 260, "coin"));
		Level1.coins.push(new Collectables(1680 + 1100, 540, "coin"));

		// H
		Level1.coins.push(new Collectables(1760 + 1100, 190, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 260, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 330, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 400, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 470, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 540, "coin"));
		Level1.coins.push(new Collectables(1760 + 1100, 610, "coin"));
		Level1.coins.push(new Collectables(1820 + 1100, 400, "coin"));
		Level1.coins.push(new Collectables(1880 + 1100, 400, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 190, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 260, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 330, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 400, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 470, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 540, "coin"));
		Level1.coins.push(new Collectables(1940 + 1100, 610, "coin"));

		// I
		Level1.coins.push(new Collectables(1420 + 1700, 190, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 260, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 330, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 400, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 470, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 540, "coin"));
		Level1.coins.push(new Collectables(1420 + 1700, 610, "coin"));

		// C
		Level1.coins.push(new Collectables(1500 + 1700, 260, "coin"));
		Level1.coins.push(new Collectables(1500 + 1700, 330, "coin"));
		Level1.coins.push(new Collectables(1500 + 1700, 400, "coin"));
		Level1.coins.push(new Collectables(1500 + 1700, 470, "coin"));
		Level1.coins.push(new Collectables(1500 + 1700, 540, "coin"));
		Level1.coins.push(new Collectables(1560 + 1700, 190, "coin"));
		Level1.coins.push(new Collectables(1560 + 1700, 610, "coin"));
		Level1.coins.push(new Collectables(1620 + 1700, 190, "coin"));
		Level1.coins.push(new Collectables(1620 + 1700, 610, "coin"));
		Level1.coins.push(new Collectables(1680 + 1700, 260, "coin"));
		Level1.coins.push(new Collectables(1680 + 1700, 540, "coin"));

		// K
		Level1.coins.push(new Collectables(3460, 190, "coin"));
		Level1.coins.push(new Collectables(3460, 260, "coin"));
		Level1.coins.push(new Collectables(3460, 330, "coin"));
		Level1.coins.push(new Collectables(3460, 400, "coin"));
		Level1.coins.push(new Collectables(3460, 470, "coin"));
		Level1.coins.push(new Collectables(3460, 540, "coin"));
		Level1.coins.push(new Collectables(3460, 610, "coin"));
		Level1.coins.push(new Collectables(3520, 400, "coin"));
		Level1.coins.push(new Collectables(3580, 330, "coin"));
		Level1.coins.push(new Collectables(3640, 260, "coin"));
		Level1.coins.push(new Collectables(3700, 190, "coin"));
		Level1.coins.push(new Collectables(3580, 470, "coin"));
		Level1.coins.push(new Collectables(3640, 540, "coin"));
		Level1.coins.push(new Collectables(3700, 610, "coin"));

		// E
		Level1.coins.push(new Collectables(3780, 190, "coin"));
		Level1.coins.push(new Collectables(3780, 260, "coin"));
		Level1.coins.push(new Collectables(3780, 330, "coin"));
		Level1.coins.push(new Collectables(3780, 400, "coin"));
		Level1.coins.push(new Collectables(3780, 470, "coin"));
		Level1.coins.push(new Collectables(3780, 540, "coin"));
		Level1.coins.push(new Collectables(3780, 610, "coin"));
		Level1.coins.push(new Collectables(3840, 190, "coin"));
		Level1.coins.push(new Collectables(3900, 190, "coin"));
		Level1.coins.push(new Collectables(3840, 400, "coin"));
		Level1.coins.push(new Collectables(3900, 400, "coin"));
		Level1.coins.push(new Collectables(3840, 610, "coin"));
		Level1.coins.push(new Collectables(3900, 610, "coin"));

		// N
		Level1.coins.push(new Collectables(4000, 190, "coin"));
		Level1.coins.push(new Collectables(4000, 260, "coin"));
		Level1.coins.push(new Collectables(4000, 330, "coin"));
		Level1.coins.push(new Collectables(4000, 400, "coin"));
		Level1.coins.push(new Collectables(4000, 470, "coin"));
		Level1.coins.push(new Collectables(4000, 540, "coin"));
		Level1.coins.push(new Collectables(4000, 610, "coin"));
		Level1.coins.push(new Collectables(4070, 230, "coin"));
		Level1.coins.push(new Collectables(4100, 300, "coin"));
		Level1.coins.push(new Collectables(4140, 370, "coin"));
		Level1.coins.push(new Collectables(4180, 440, "coin"));
		Level1.coins.push(new Collectables(4220, 510, "coin"));
		Level1.coins.push(new Collectables(4270, 570, "coin"));
		Level1.coins.push(new Collectables(4340, 190, "coin"));
		Level1.coins.push(new Collectables(4340, 260, "coin"));
		Level1.coins.push(new Collectables(4340, 330, "coin"));
		Level1.coins.push(new Collectables(4340, 400, "coin"));
		Level1.coins.push(new Collectables(4340, 470, "coin"));
		Level1.coins.push(new Collectables(4340, 540, "coin"));
		Level1.coins.push(new Collectables(4340, 610, "coin"));

		// !
		Level1.coins.push(new Collectables(4540, 190, "coin"));
		Level1.coins.push(new Collectables(4540, 330, "coin"));
		Level1.coins.push(new Collectables(4540, 400, "coin"));
		Level1.coins.push(new Collectables(4540, 470, "coin"));
		Level1.coins.push(new Collectables(4540, 540, "coin"));
		Level1.coins.push(new Collectables(4540, 610, "coin"));

		// =>
		Level1.coins.push(new Collectables(4880, 400, "coin"));
		Level1.coins.push(new Collectables(4940, 400, "coin"));
		Level1.coins.push(new Collectables(5000, 400, "coin"));
		Level1.coins.push(new Collectables(5060, 400, "coin"));
		Level1.coins.push(new Collectables(5120, 400, "coin"));
		Level1.coins.push(new Collectables(5180, 400, "coin"));
		Level1.coins.push(new Collectables(5120, 190, "coin"));
		Level1.coins.push(new Collectables(5120, 610, "coin"));
		Level1.coins.push(new Collectables(5180, 260, "coin"));
		Level1.coins.push(new Collectables(5180, 540, "coin"));
		Level1.coins.push(new Collectables(5240, 330, "coin"));
		Level1.coins.push(new Collectables(5240, 470, "coin"));
		Level1.coins.push(new Collectables(5300, 400, "coin"));
	}

	static addBottle() {
		Level1.bottles.push(new Collectables(-2400, 600, "bottle"));
		Level1.bottles.push(new Collectables(-2050, 600, "bottle"));
		Level1.bottles.push(new Collectables(-1500, 600, "bottle"));
		Level1.bottles.push(new Collectables(-1050, 600, "bottle"));
		Level1.bottles.push(new Collectables(-200, 600, "bottle"));

		Level1.bottles.push(new Collectables(200, 600, "bottle"));
		Level1.bottles.push(new Collectables(1000, 600, "bottle"));
		Level1.bottles.push(new Collectables(2000, 600, "bottle"));
		Level1.bottles.push(new Collectables(3000, 600, "bottle"));
		Level1.bottles.push(new Collectables(4000, 600, "bottle"));
		Level1.bottles.push(new Collectables(5000, 600, "bottle"));
	}
}
