class Background extends MoveableObjects {
    constructor(imgPath, x) {
        super().loadImage(imgPath);
        this.x = x;
        this.y = 0;
        this.w = cvsW;
        this.h = cvsH;
    }
}
