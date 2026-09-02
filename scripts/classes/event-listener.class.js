import { AudioHub } from "./audio-hub.class.js";
import { Keyboard } from "./keyboard.class.js";

export class EventListener {
	static addEventListener() {
		document.addEventListener("keydown", function (event) {
			if (event.code == "Space") {
				Keyboard.SPACE = true;
			}
			if (event.code == "ArrowUp") {
				Keyboard.UP = true;
			}
			if (event.code == "ArrowDown") {
				Keyboard.DOWN = true;
			}
			if (event.code == "ArrowLeft") {
				Keyboard.LEFT = true;
			}
			if (event.code == "ArrowRight") {
				Keyboard.RIGHT = true;
			}
			if (event.code == "KeyD") {
				Keyboard.D = true;
			}
		});

		document.addEventListener("keyup", function (event) {
			if (event.code == "Space") {
				Keyboard.SPACE = false;
			}
			if (event.code == "ArrowUp") {
				Keyboard.UP = false;
			}
			if (event.code == "ArrowDown") {
				Keyboard.DOWN = false;
			}
			if (event.code == "ArrowLeft") {
				Keyboard.LEFT = false;
			}
			if (event.code == "ArrowRight") {
				Keyboard.RIGHT = false;
			}
			if (event.code == "KeyD") {
				Keyboard.D = false;
			}
		});

		document.getElementById(`btnLeft`).addEventListener(`mousedown`, () => {
			Keyboard.LEFT = true;
		});

		document.getElementById(`btnLeft`).addEventListener(`mouseup`, () => {
			Keyboard.LEFT = false;
		});

		document.getElementById(`btnRight`).addEventListener(`mousedown`, () => {
			Keyboard.RIGHT = true;
		});

		document.getElementById(`btnRight`).addEventListener(`mouseup`, () => {
			Keyboard.RIGHT = false;
		});

		document.getElementById(`btnUp`).addEventListener(`mousedown`, () => {
			Keyboard.UP = true;
		});

		document.getElementById(`btnUp`).addEventListener(`mouseup`, () => {
			Keyboard.UP = false;
		});

		document.getElementById(`btnThrow`).addEventListener(`mousedown`, () => {
			Keyboard.D = true;
		});

		document.getElementById(`btnThrow`).addEventListener(`mouseup`, () => {
			Keyboard.D = false;
		});
	}
}
