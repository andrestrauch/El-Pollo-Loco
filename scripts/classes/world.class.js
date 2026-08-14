class World {
    ctx;
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
    }

    draw() {
        this.ctx.drawImage();
    }
}
