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
    }
}
