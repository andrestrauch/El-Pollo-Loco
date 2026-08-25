class MyAudio {
    file;
    isLoaded;

    constructor(_file) {
        this.file = new Audio(_file);
    }
}

export class AudioHub {
    static PepeRun = new MyAudio("./assets/sounds/character/characterRun.mp3");

    static allSounds = [AudioHub.PepeRun];

    static playOne(sound) {
        sound.file.currentTime = 0;
        if (sound.file.readyState > 0 || sound.isLoaded) {
            sound.isLoaded = true;
            sound.file.play();

            // console.log("Sound wird abgespielt!");
        }
    }

    static stopAll() {
        AudioHub.allSounds.forEach((sound) => {
            sound.file.pause();
        });
    }

    static stopOne(sound) {
        sound.file.pause();
    }
}
