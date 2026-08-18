let world;
let cvsW;
let cvsH;
let cameraX = 0;
let aboveGround = false;

function init() {
    const canvas = document.getElementById("canvas");
    cvsW = canvas.width;
    cvsH = canvas.height;
    world = new World(canvas);

    EventListener.addEventListener();
}
