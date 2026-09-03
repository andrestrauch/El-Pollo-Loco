import { EventListener } from "./classes/event-listener.class.js";
import { Globals } from "./classes/globals.class.js";
import { IntervalHub } from "./classes/interval-hub.class.js";
import { Level } from "./classes/level.class.js";
import { Level1 } from "./level/level1.js";
import { World } from "./classes/world.class.js";
import { AudioHub } from "./classes/audio-hub.class.js";

playBackgroundMusic();
export function init() {
	document.getElementById("startBtn").classList.add("d_none");
	const canvas = document.getElementById("canvas");
	let lvStart = -2;
	let lvEnd = 7;
	Globals.cvsW = canvas.width;
	Globals.cvsH = canvas.height;
	Globals.lvStart = canvas.width * lvStart;
	Globals.lvEnd = canvas.width * lvEnd;
	Globals.titleReturn = false;

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
	Globals.titleReturn = false;
	IntervalHub.stopAllIntervals();

	setTimeout(() => {
		AudioHub.stopOne(AudioHub.backgroundMusic);
		AudioHub.backgroundMusic.isPlayed = false;
	}, 2000);

	setTimeout(() => {
		init();
		playBackgroundMusic();
	}, 1000);
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
		AudioHub.changeVolume(AudioHub.backgroundMusic);
		soundRef.innerHTML = /*html*/ `
				<img src="./assets/icons/sound_btn.png" alt="">
			`;
	} else {
		// AudioHub.stopAll();
		AudioHub.mute = true;
		AudioHub.changeVolume(AudioHub.backgroundMusic);
		soundRef.innerHTML = /*html*/ `
				
				<img src="./assets/icons/muted_btn.png" alt="">
			`;
	}
}

export function playBackgroundMusic() {
	setTimeout(() => {
		AudioHub.playOne(AudioHub.backgroundMusic);
		AudioHub.changeVolume(AudioHub.backgroundMusic);
	}, 2000);
}

export function backToStartscreen() {
	Globals.titleReturn = true;
	Globals.isHurt = false;
	Globals.isDead = false;
	Globals.bossDead = false;
	IntervalHub.stopAllIntervals();
	document.getElementById("startBtn").classList.remove("d_none");
	document.getElementById(`gameOver`).classList.remove(`d-flex`);
	document.getElementById(`gameOver`).classList.add(`d_none`);
	document.getElementById(`gameEnd`).classList.remove(`d-flex`);
	document.getElementById(`gameEnd`).classList.add(`d_none`);
}
