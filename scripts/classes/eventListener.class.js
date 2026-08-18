class EventListener {
    static addEventListener() {
        document.addEventListener("keydown", function (event) {
            if (event.code == "Space") {
                Keyboard.SPACE = true;
                console.log("Test");
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
        });
    }
}
