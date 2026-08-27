import { Background } from "./backgrounds.class.js";
import { Character } from "./character.class.js";

export class Level {
	character;
	clouds;
	enemies = [];
	backgrounds = [];
	coins = [];
	bottles = [];
	lvStart;
	lvEnd;

	constructor(_enemies, _clouds, _coins, _bottles, lvStart, lvEnd, cvsW) {
		this.character = new Character();
		this.enemies = _enemies;
		this.clouds = _clouds;
		this.coins = _coins;
		this.bottles = _bottles;
		this.lvStart = lvStart;
		this.lvEnd = lvEnd;
		this.addBackgrounds(lvStart, lvEnd, cvsW);
	}

	addBackgrounds(lvStart, lvEnd, cvsW) {
		for (let b = lvStart; b <= lvEnd; b++) {
			let x = 2;
			if (b % 2) x = 1;

			this.backgrounds.push(new Background("assets/img/5_background/layers/air.png", cvsW * b));
			this.backgrounds.push(new Background("assets/img/5_background/layers/3_third_layer/" + x + ".png", cvsW * b));
			this.backgrounds.push(new Background("assets/img/5_background/layers/2_second_layer/" + x + ".png", cvsW * b));
			this.backgrounds.push(new Background("assets/img/5_background/layers/1_first_layer/" + x + ".png", cvsW * b));
		}
	}
}
