import { enemies, clouds, coins } from "../level/level1.js";
import { EventListener } from "./classes/eventListener.class.js";
import { Globals } from "./classes/globals.class.js";
import { IntervalHub } from "./classes/intervalHub.class.js";
import { Level } from "./classes/level.class.js";
import { World } from "./classes/world.class.js";

function init() {
    const canvas = document.getElementById("canvas");
    // IntervalHub.stopAllIntervals();
    Globals.cvsW = canvas.width;
    Globals.cvsH = canvas.height;
    Globals.level1 = new Level(enemies, clouds, coins, -2, 20, Globals.cvsW);
    Globals.world = new World(canvas);
    EventListener.addEventListener();
}

init();

function showFullscreen() {
    let fullscreen = document.getElementById("fullscreen");
    fullscreen.requestFullscreen();
}
