class Level {
    character;
    enemies = [];
    clouds;
    backgrounds = [];
    lvStart;
    lvEnd;

    constructor(enemies, clouds, lvStart, lvEnd, cvsW, cvsH) {
        this.character = new Character();
        this.enemies = enemies;
        this.clouds = clouds;
        this.lvStart = lvStart;
        this.lvEnd = lvEnd;
        this.addBackgrounds(lvStart, lvEnd, cvsW, cvsH);
    }

    addBackgrounds(lvStart, lvEnd, cvsW, cvsH) {
        for (let b = lvStart; b <= lvEnd; b++) {
            let x = 2;
            if (b % 2) x = 1;
            this.backgrounds.push(new Background("assets/img/5_background/layers/air.png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/3_third_layer/" + x + ".png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/2_second_layer/" + x + ".png", cvsW * b));
            this.backgrounds.push(new Background("assets/img/5_background/layers/1_first_layer/" + x + ".png", cvsW * b));
        }
    }
}
