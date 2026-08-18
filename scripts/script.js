function init() {
    const canvas = document.getElementById("canvas");

    Globals.cvsW = canvas.width;
    Globals.cvsH = canvas.height;
    level1 = new Level(enemies, clouds, -2, 20, Globals.cvsW, Globals.cvsH);
    Globals.world = new World(canvas);

    EventListener.addEventListener();
}
