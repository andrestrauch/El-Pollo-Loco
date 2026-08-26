import { Chicken } from "../scripts/classes/chicken.class.js";
import { Cloud } from "../scripts/classes/clouds.class.js";
import { CollectableBottle } from "../scripts/classes/collectableBottle.class.js";
import { Coins } from "../scripts/classes/collectableCoins.class.js";
import { Endboss } from "../scripts/classes/endboss.class.js";
import { MiniChicken } from "../scripts/classes/chickenMini.class.js";

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
    new Coins(300, 610),
    new Coins(400, 610),
    new Coins(500, 610),
    new Coins(700, 610),
    new Coins(900, 610),
    new Coins(1100, 610),
    new Coins(1500, 610),
    new Coins(1800, 610),
    new Coins(2000, 610),
    new Coins(2400, 610),

    new Coins(300, 500),
    new Coins(400, 500),
    new Coins(500, 500),
    new Coins(700, 500),
    new Coins(900, 500),
    new Coins(1100, 500),
    new Coins(1500, 500),
    new Coins(1800, 500),
    new Coins(2000, 500),
    new Coins(2400, 500),

    new Coins(300, 390),
    new Coins(400, 390),
    new Coins(500, 390),
    new Coins(700, 390),
    new Coins(900, 390),
    new Coins(1100, 390),
    new Coins(1500, 390),
    new Coins(1800, 390),
    new Coins(2000, 390),
    new Coins(2400, 390),

    new Coins(300, 280),
    new Coins(400, 280),
    new Coins(500, 280),
    new Coins(700, 280),
    new Coins(900, 280),
    new Coins(1100, 280),
    new Coins(1500, 280),
    new Coins(1800, 280),
    new Coins(2000, 280),
    new Coins(2400, 280),

    new Coins(2800, 610),
    new Coins(2800, 500),
    new Coins(2800, 390),
    new Coins(2800, 280),

    new Coins(3200, 610),
    new Coins(3200, 500),
    new Coins(3200, 390),
    new Coins(3200, 280),

    new Coins(3500, 610),
    new Coins(3500, 500),
    new Coins(3500, 390),
    new Coins(3500, 280),

    new Coins(3800, 610),
    new Coins(3800, 500),
    new Coins(3800, 390),
    new Coins(3800, 280),

    new Coins(-500, 610),
    new Coins(-500, 500),
    new Coins(-500, 390),
    new Coins(-500, 280),

    new Coins(-1000, 610),
    new Coins(-1000, 500),
    new Coins(-1000, 390),
    new Coins(-1000, 280),

    new Coins(-2000, 610),
    new Coins(-2000, 500),
    new Coins(-2000, 390),
    new Coins(-2000, 280),
];

export const bottles = [
    new CollectableBottle(200, 600),
    new CollectableBottle(-200, 600),
    new CollectableBottle(-2050, 600),
    new CollectableBottle(1050, 600),
    new CollectableBottle(1950, 600),
    new CollectableBottle(2350, 600),
    new CollectableBottle(3050, 600),
    new CollectableBottle(3700, 600),
];
