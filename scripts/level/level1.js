import { Chicken } from "../classes/chicken.class.js";
import { Cloud } from "../classes/clouds.class.js";
import { Endboss } from "../classes/endboss.class.js";
import { MiniChicken } from "../classes/chicken-mini.class.js";
import { Collectables } from "../classes/collectables.class.js";

export const enemies = [
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
	new MiniChicken(),
	new MiniChicken(),
	new MiniChicken(),
	new MiniChicken(),
	new MiniChicken(),
	new Endboss(),
];

export const clouds = [
	new Cloud(-2000, 1 + Math.random() * 2),
	new Cloud(-1000, 1 + Math.random() * 2),
	new Cloud(0, 1 + Math.random() * 2),
	new Cloud(1000, 1 + Math.random() * 2),
	new Cloud(2000, 1 + Math.random() * 2),
	new Cloud(3000, 1 + Math.random() * 2),
	new Cloud(4000, 1 + Math.random() * 2),
	new Cloud(5000, 1 + Math.random() * 2),
	new Cloud(6000, 1 + Math.random() * 2),
	new Cloud(7000, 1 + Math.random() * 2),
	new Cloud(8000, 1 + Math.random() * 2),
];

export const coins = [
	new Collectables(300, 610, "coin"),
	new Collectables(400, 610, "coin"),
	new Collectables(500, 610, "coin"),
	new Collectables(700, 610, "coin"),
	new Collectables(900, 610, "coin"),
	new Collectables(1100, 610, "coin"),
	new Collectables(1500, 610, "coin"),
	new Collectables(1800, 610, "coin"),
	new Collectables(2000, 610, "coin"),
	new Collectables(2400, 610, "coin"),

	new Collectables(300, 500, "coin"),
	new Collectables(400, 500, "coin"),
	new Collectables(500, 500, "coin"),
	new Collectables(700, 500, "coin"),
	new Collectables(900, 500, "coin"),
	new Collectables(1100, 500, "coin"),
	new Collectables(1500, 500, "coin"),
	new Collectables(1800, 500, "coin"),
	new Collectables(2000, 500, "coin"),
	new Collectables(2400, 500, "coin"),

	new Collectables(300, 390, "coin"),
	new Collectables(400, 390, "coin"),
	new Collectables(500, 390, "coin"),
	new Collectables(700, 390, "coin"),
	new Collectables(900, 390, "coin"),
	new Collectables(1100, 390, "coin"),
	new Collectables(1500, 390, "coin"),
	new Collectables(1800, 390, "coin"),
	new Collectables(2000, 390, "coin"),
	new Collectables(2400, 390, "coin"),

	new Collectables(300, 280, "coin"),
	new Collectables(400, 280, "coin"),
	new Collectables(500, 280, "coin"),
	new Collectables(700, 280, "coin"),
	new Collectables(900, 280, "coin"),
	new Collectables(1100, 280, "coin"),
	new Collectables(1500, 280, "coin"),
	new Collectables(1800, 280, "coin"),
	new Collectables(2000, 280, "coin"),
	new Collectables(2400, 280, "coin"),

	new Collectables(2800, 610, "coin"),
	new Collectables(2800, 500, "coin"),
	new Collectables(2800, 390, "coin"),
	new Collectables(2800, 280, "coin"),

	new Collectables(3200, 610, "coin"),
	new Collectables(3200, 500, "coin"),
	new Collectables(3200, 390, "coin"),
	new Collectables(3200, 280, "coin"),

	new Collectables(3500, 610, "coin"),
	new Collectables(3500, 500, "coin"),
	new Collectables(3500, 390, "coin"),
	new Collectables(3500, 280, "coin"),

	new Collectables(3800, 610, "coin"),
	new Collectables(3800, 500, "coin"),
	new Collectables(3800, 390, "coin"),
	new Collectables(3800, 280, "coin"),

	new Collectables(-500, 610, "coin"),
	new Collectables(-500, 500, "coin"),
	new Collectables(-500, 390, "coin"),
	new Collectables(-500, 280, "coin"),

	new Collectables(-1000, 610, "coin"),
	new Collectables(-1000, 500, "coin"),
	new Collectables(-1000, 390, "coin"),
	new Collectables(-1000, 280, "coin"),

	new Collectables(-2000, 610, "coin"),
	new Collectables(-2000, 500, "coin"),
	new Collectables(-2000, 390, "coin"),
	new Collectables(-2000, 280, "coin"),
];

export const bottles = [
	new Collectables(-200, 600, "bottle"),
	new Collectables(-1050, 600, "bottle"),
	new Collectables(-2050, 600, "bottle"),
	new Collectables(200, 600, "bottle"),
	new Collectables(1050, 600, "bottle"),
	new Collectables(1950, 600, "bottle"),
	new Collectables(2350, 600, "bottle"),
	new Collectables(3050, 600, "bottle"),
	new Collectables(3700, 600, "bottle"),
];
