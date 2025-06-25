import { Scene } from "phaser";

export class Phase0 extends Scene {
  constructor() {
    super({ key: "Phase0" });
  }

  preload() {
    this.load.spritesheet("nick", "assets/nick.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.nick = this.physics.add.sprite(400, 225, "nick");

    this.anims.create({
      key: "andar-direita",
      frames: this.anims.generateFrameNumbers("nick", { start: 87, end: 95 }),
      frameRate: 10,
      repeat: -1,
    });

    this.nick.play("andar-direita");
    this.nick.setVelocityX(100);
  }
}
