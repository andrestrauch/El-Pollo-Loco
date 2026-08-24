import { Chicken } from "../scripts/classes/chicken.class.js";
import { Cloud } from "../scripts/classes/clouds.class.js";
import { Coins } from "../scripts/classes/collectableCoins.class.js";
import { Endboss } from "../scripts/classes/endboss.class.js";

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
    new Endboss(),
];
export const clouds = new Cloud();

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
];
