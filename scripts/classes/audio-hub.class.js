class MyAudio {
	file;
	isLoaded = false;
	isPlayed = false;

	constructor(_file) {
		this.file = new Audio(_file);
	}
}

export class AudioHub {
	static gameStart = new MyAudio("./assets/sounds/game/gameStart.mp3");
	static pepeRun = new MyAudio("./assets/sounds/character/characterRun.mp3");
	static pepeJump = new MyAudio("./assets/sounds/character/characterJump.wav");
	static pepeSleep = new MyAudio("./assets/sounds/character/characterSnoring.mp3");
	static pepeDmg = new MyAudio("./assets/sounds/character/characterDamage.mp3");
	static pepeDead = new MyAudio("./assets/sounds/character/characterDead.wav");
	static collectCoin = new MyAudio("./assets/sounds/collectibles/collectSound.wav");
	static collectBottle = new MyAudio("./assets/sounds/collectibles/bottleCollectSound.wav");
	static bottleBreak = new MyAudio("./assets/sounds/throwable/bottleBreak.mp3");
	static bossEncounter = new MyAudio("./assets/sounds/endboss/endbossApproach.wav");
	static bossDead = new MyAudio("./assets/sounds/chicken/chickenDead2.mp3");
	static chickenDead = new MyAudio("./assets/sounds/chicken/chickenDead.mp3");
	static backgroundMusic = new MyAudio("./assets/sounds/game/background_music.mp3");
	static mute = true;

	static allSounds = [
		AudioHub.gameStart,
		AudioHub.pepeRun,
		AudioHub.pepeJump,
		AudioHub.pepeSleep,
		AudioHub.pepeDmg,
		AudioHub.pepeDead,
		AudioHub.collectCoin,
		AudioHub.collectBottle,
		AudioHub.bottleBreak,
		AudioHub.bossEncounter,
		AudioHub.bossDead,
		AudioHub.chickenDead,
		AudioHub.backgroundMusic,
	];

	static playOne(sound) {
		sound.file.currentTime = 0;
		if ((sound.file.readyState > 0 || sound.isLoaded) && sound.isPlayed == false) {
			if (AudioHub.mute) sound.file.volume = 0;
			else sound.file.volume = 0.05;
			sound.isLoaded = true;
			sound.isPlayed = true;
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

	static changeVolume(sound) {
		if (AudioHub.mute) sound.file.volume = 0;
		else sound.file.volume = 0.05;
	}
}
