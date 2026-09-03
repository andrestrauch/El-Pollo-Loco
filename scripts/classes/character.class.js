import { AudioHub } from "./audio-hub.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./image-hub.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MoveableObjects } from "./moveable-objects.class.js";

export class Character extends MoveableObjects {
	bottles = 0;
	coins = 0;
	hurtZ;
	idleZ;
	walking;
	jumping;

	offset = {
		top: 250,
		right: 50,
		bottom: 20,
		left: 40,
	};

	constructor() {
		super();
		this.x = 20;
		this.y = 260;
		this.w = 200;
		this.h = 500;

		this.hurtZ = 0;
		this.idleZ = 0;
		this.energy = 100;
		this.speedY = 0;
		Globals.currentX = this.x;

		this.imageLoading();
		IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
		IntervalHub.startInterval(this.applyGravity, 1000 / 30);
		this.animate();
		this.playSounds();
	}

	playSounds() {
		IntervalHub.startInterval(this.playWalking, 1000 / 1.5);
		IntervalHub.startInterval(this.playJumping, 1000 / 1);
		IntervalHub.startInterval(this.playSleeping, 2500 / 1);
		IntervalHub.startInterval(this.playHurting, 3000 / 5.8);
		IntervalHub.startInterval(this.playDead, 2000 / 1.5);
	}

	getRealFrame = () => {
		this.rX = this.x + this.offset.left;
		this.rY = this.y + this.offset.top;
		this.rW = this.w - this.offset.right - this.offset.right;
		this.rH = this.h - this.offset.top - this.offset.bottom;
	};

	animate() {
		IntervalHub.startInterval(this.animateMove, 1000 / 10);
		IntervalHub.startInterval(this.animateIdle, 1000 / 2.5);
		IntervalHub.startInterval(this.animateHurt, 1000 / 5);
		IntervalHub.startInterval(this.animateDead, 1000 / 8);
		IntervalHub.startInterval(this.changePosition, 1000 / 60);
	}

	imageLoading() {
		this.loadImage(`assets/img/2_character_pepe/1_idle/idle/I-1.png`);
		this.loadImages(ImageHub.PEPE.idle);
		this.loadImages(ImageHub.PEPE.longIdle);
		this.loadImages(ImageHub.PEPE.run);
		this.loadImages(ImageHub.PEPE.jump);
		this.loadImages(ImageHub.PEPE.hurt);
		this.loadImages(ImageHub.PEPE.dead);
	}

	animateHurt = () => {
		if (Globals.isHurt && Globals.bossDead != true && Globals.pause == false) {
			this.animateObject(ImageHub.PEPE.hurt);
			this.hurtZ++;
			if (this.hurtZ > 30) {
				Globals.isHurt = false;
				this.hurtZ = 0;
			}
		}
	};

	animateDead = () => {
		if (this.energy == 0 && Globals.pause == false) {
			this.animateObject(ImageHub.PEPE.dead);
			this.otherDirection = false;
		}
	};

	animateMove = () => {
		if (Globals.pause == false) {
			if (Globals.aboveGround == true) this.animateObject(ImageHub.PEPE.jump);
			if ((Keyboard.RIGHT == true || Keyboard.LEFT == true) && Globals.aboveGround == false && this.energy > 0 && Globals.bossDead != true) {
				this.animateObject(ImageHub.PEPE.run);
				this.walking = true;
			}

			if ((Keyboard.RIGHT == false && Keyboard.LEFT == false) || Globals.aboveGround == true) this.walking = false;
		}
	};

	animateIdle = () => {
		if (Globals.pause == false) {
			if ((Keyboard.RIGHT == false || Keyboard.LEFT == false) && Globals.aboveGround == false && this.energy > 0 && Globals.bossDead != true) {
				if (this.idleZ < 30) this.animateObject(ImageHub.PEPE.idle);
				if (this.idleZ >= 30) {
					this.animateObject(ImageHub.PEPE.longIdle);
					Globals.longIdle = true;
				}
			}
			this.idleZ++;
			if (Keyboard.RIGHT || Keyboard.LEFT || Globals.aboveGround) {
				this.idleZ = 0;
				Globals.longIdle = false;
			}
		}
	};

	changePosition = () => {
		if (Globals.pause == false) {
			if ((Keyboard.SPACE == true || Keyboard.UP == true) && Globals.aboveGround == false && this.energy > 0 && Globals.bossDead != true)
				this.jump();
			if (Keyboard.RIGHT == true && this.energy > 0 && Globals.bossX > this.x && Globals.bossDead != true) this.moveRight();
			if (Keyboard.LEFT == true && this.energy > 0 && Globals.bossDead != true) this.moveLeft();
			if (this.x < Globals.lvEnd - 1200) Globals.cameraX = -this.x;
		}
	};

	//auslagern in mo klasse
	moveLeft() {
		if (this.x > -2550) {
			this.x -= (Globals.cvsW / 100) * 1;
			Globals.currentX = this.x;
		}
		this.otherDirection = true;
	}

	playWalking = () => {
		if (this.walking) AudioHub.playOne(AudioHub.pepeRun);
		else {
			AudioHub.stopOne(AudioHub.pepeRun);
			AudioHub.pepeRun.isPlayed = false;
		}
	};

	playJumping = () => {
		if (Globals.aboveGround) AudioHub.playOne(AudioHub.pepeJump);
		else {
			AudioHub.stopOne(AudioHub.pepeJump);
			AudioHub.pepeJump.isPlayed = false;
		}
	};

	playSleeping = () => {
		if (Globals.longIdle) AudioHub.playOne(AudioHub.pepeSleep);
		else {
			AudioHub.stopOne(AudioHub.pepeSleep);
			AudioHub.pepeSleep.isPlayed = false;
		}
	};

	playHurting = () => {
		if (Globals.isHurt) AudioHub.playOne(AudioHub.pepeDmg);
		else {
			AudioHub.stopOne(AudioHub.pepeDmg);
			AudioHub.pepeDmg.isPlayed = false;
		}
	};

	playDead = () => {
		if (Globals.isDead) AudioHub.playOne(AudioHub.pepeDead);
		else {
			AudioHub.stopOne(AudioHub.pepeDead);
			AudioHub.pepeDead.isPlayed = false;
		}
	};
}
