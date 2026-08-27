import { enemies, clouds, coins, bottles } from "./level/level1.js";
import { EventListener } from "./classes/event-listener.class.js";
import { Globals } from "./classes/globals.class.js";
import { IntervalHub } from "./classes/interval-hub.class.js";
import { Level } from "./classes/level.class.js";
import { World } from "./classes/world.class.js";

function init() {
	// IntervalHub.stopAllIntervals();
	const canvas = document.getElementById("canvas");
	let lvStart = -2;
	let lvEnd = 7;
	Globals.cvsW = canvas.width;
	Globals.cvsH = canvas.height;
	Globals.lvStart = canvas.width * lvStart;
	Globals.lvEnd = canvas.width * lvEnd;

	Globals.level1 = new Level(enemies, clouds, coins, bottles, lvStart, lvEnd, Globals.cvsW);
	Globals.world = new World(canvas);
	EventListener.addEventListener();
}

init();

function showFullscreen() {
	let fullscreen = document.getElementById("fullscreen");
	fullscreen.requestFullscreen();
}
