class MyAudio {
    file;
    isLoaded;

    constructor(_file) {
        this.file = new Audio(_file);
    }
}

export class AudioHub {
    // static PIANO = new MyAudio('./assets/sounds/piano.mp3');
    // static GUITAR = new MyAudio('./assets/sounds/guitar.mp3');
    // static DRUMS = new MyAudio('./assets/sounds/drums.mp3');

    static allSounds = [];

    static playOne(sound) {
        sound.file.currentTime = 0;

        if (sound.file.readyState === 4 || sound.isLoaded) {
            sound.isLoaded = true;
            sound.file.play();
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
