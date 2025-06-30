import { Scene } from "phaser";

export class Phase0 extends Scene {
  nicolas: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor() {
    super({ key: "Phase0" });
  }

  preload() {
    this.load.spritesheet("nicolas", "assets/nicolas.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.nicolas = this.physics.add.sprite(400, 225, "nicolas");

    this.anims.create({
      key: "andar-direita",
      frames: this.anims.generateFrameNumbers("nicolas", { start: 87, end: 95 }),
      frameRate: 10,
      repeat: -1,
    });

    this.nicolas.play("andar-direita");
    this.nicolas.setVelocityX(100);
  }
}
