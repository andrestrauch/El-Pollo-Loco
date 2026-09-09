import { EventListener } from "./classes/event-listener.class.js";
import { Globals } from "./classes/globals.class.js";
import { IntervalHub } from "./classes/interval-hub.class.js";
import { AudioHub } from "./classes/audio-hub.class.js";
import { Level } from "./classes/level.class.js";
import { Level1 } from "./level/level1.js";
import { World } from "./classes/world.class.js";

setTimeout(() => {
	playBackgroundMusic();
}, 2000);

export function init() {
	document.getElementById("startBtn").classList.add("d_none");
	const canvas = document.getElementById("canvas");
	let lvStart = -2;
	let lvEnd = 6;
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
	}, 250);
}

export function gameRestart() {
	document.getElementById(`gameOver`).classList.remove(`d-flex`);
	document.getElementById(`gameOver`).classList.add(`d_none`);
	document.getElementById(`gameEnd`).classList.remove(`d-flex`);
	document.getElementById(`gameEnd`).classList.add(`d_none`);
	document.getElementById(`restartBtn3`).classList.remove(`d-flex`);
	document.getElementById(`restartBtn3`).classList.add(`d_none`);

	Globals.isHurt = false;
	Globals.isDead = false;
	Globals.bossDead = false;
	Globals.titleReturn = false;
	Globals.pause = false;

	if (AudioHub.gameStart.isPlayed) {
		AudioHub.stopOne(AudioHub.gameStart);
		AudioHub.gameStart.isPlayed = false;
	}

	if (AudioHub.backgroundMusic.isPlayed) {
		AudioHub.stopOne(AudioHub.backgroundMusic);
		AudioHub.backgroundMusic.isPlayed = false;
	}

	IntervalHub.stopAllIntervals();
	EventListener.addEventListener();
	EventListener.changePauseBtn();

	setTimeout(() => {
		init();
		playBackgroundMusic();
	}, 2000);
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
		AudioHub.mute = true;
		AudioHub.changeVolume(AudioHub.backgroundMusic);
		soundRef.innerHTML = /*html*/ `
				
				<img src="./assets/icons/muted_btn.png" alt="">
			`;
	}
}

function playBackgroundMusic() {
	if (AudioHub.backgroundMusic.isPlayed == false) AudioHub.playOne(AudioHub.backgroundMusic);
	AudioHub.changeVolume(AudioHub.backgroundMusic);
}

export function backToStartscreen() {
	Globals.titleReturn = true;
	Globals.pause = false;
	Globals.isHurt = false;
	Globals.isDead = false;
	Globals.bossDead = false;

	if (AudioHub.backgroundMusic.isPlayed) {
		AudioHub.stopOne(AudioHub.backgroundMusic);
		AudioHub.backgroundMusic.isPlayed = false;
	}

	setTimeout(() => {
		playBackgroundMusic();
	}, 2000);

	IntervalHub.stopAllIntervals();
	EventListener.addEventListener();
	EventListener.changePauseBtn();

	document.getElementById("startBtn").classList.remove("d_none");
	document.getElementById(`gameOver`).classList.remove(`d-flex`);
	document.getElementById(`gameOver`).classList.add(`d_none`);
	document.getElementById(`gameEnd`).classList.remove(`d-flex`);
	document.getElementById(`gameEnd`).classList.add(`d_none`);
}

export function startDialog() {
	const dialogRef = document.getElementById(`myDialog`);
	dialogRef.showModal();
	dialogRef.classList.add(`opened`);
	Globals.pause = true;
	EventListener.changePauseBtn();

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			endDialog(event);
		}
	});

	dialogRef.addEventListener("click", (event) => {
		const rect = dialogRef.getBoundingClientRect();
		const isInDialog = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
		if (!isInDialog) {
			endDialog(event);
		}
	});
}

export function startDialog2() {
	const dialogRef = document.getElementById(`myDialog2`);
	dialogRef.showModal();
	dialogRef.classList.add(`opened`);
	Globals.pause = true;
	EventListener.changePauseBtn();

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			endDialog2(event);
		}
	});

	dialogRef.addEventListener("click", (event) => {
		const rect = dialogRef.getBoundingClientRect();
		const isInDialog = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
		if (!isInDialog) {
			endDialog2(event);
		}
	});
}

export function endDialog() {
	const dialogRef = document.getElementById(`myDialog`);
	dialogRef.close();
	dialogRef.classList.remove(`opened`);
	Globals.pause = false;
	EventListener.changePauseBtn();
}

export function endDialog2() {
	const dialogRef = document.getElementById(`myDialog2`);
	dialogRef.close();
	dialogRef.classList.remove(`opened`);
	Globals.pause = false;
	EventListener.changePauseBtn();
}
