import { EventListener } from "./classes/event-listener.class.js";
import { Globals } from "./classes/globals.class.js";
import { IntervalHub } from "./classes/interval-hub.class.js";
import { Level } from "./classes/level.class.js";
import { Level1 } from "./level/level1.js";
import { World } from "./classes/world.class.js";
import { AudioHub } from "./classes/audio-hub.class.js";

export function init() {
	document.getElementById("startBtn").classList.add("d_none");

	const canvas = document.getElementById("canvas");
	let lvStart = -2;
	let lvEnd = 7;
	Globals.cvsW = canvas.width;
	Globals.cvsH = canvas.height;
	Globals.lvStart = canvas.width * lvStart;
	Globals.lvEnd = canvas.width * lvEnd;

	Level1.addContent();
	setTimeout(() => {
		Globals.level1 = new Level(Level1.enemies, Level1.clouds, Level1.coins, Level1.bottles, lvStart, lvEnd, Globals.cvsW);
	}, 100);
	setTimeout(() => {
		Globals.world = new World(canvas);
		EventListener.addEventListener();
		AudioHub.playOne(AudioHub.gameStart);
		setTimeout(() => {
			AudioHub.stopOne(AudioHub.gameStart);
			AudioHub.gameStart.isPlayed = false;
		}, 2000);
	}, 250);
}

export function gameRestart() {
	document.getElementById(`gameOver`).classList.remove(`d-flex`);
	document.getElementById(`gameOver`).classList.add(`d_none`);
	document.getElementById(`gameEnd`).classList.remove(`d-flex`);
	document.getElementById(`gameEnd`).classList.add(`d_none`);

	Globals.isHurt = false;
	Globals.isDead = false;
	Globals.bossDead = false;
	IntervalHub.stopAllIntervals();

	setTimeout(() => {
		init();
	}, 500);
}

function showFullscreen() {
	let fullscreen = document.getElementById("fullscreen");
	fullscreen.requestFullscreen();
}

export function setSoundBtn() {
	let soundRef = document.getElementById(`muteBtn`);
	soundRef.innerHTML = "";
	if (AudioHub.mute) {
		AudioHub.mute = false;
		soundRef.innerHTML = /*html*/ `
				<img src="./assets/icons/sound_btn.png" alt="">
			`;
	} else {
		// AudioHub.stopAll();
		AudioHub.mute = true;
		soundRef.innerHTML = /*html*/ `
				
				<img src="./assets/icons/muted_btn.png" alt="">
			`;
	}
	// console.log("Mute Button gelickt, Sound Mute: ", AudioHub.mute);
}
