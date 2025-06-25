import { Scene } from "phaser";

export class Preloader extends Scene {

  //this.nick: Phaser.GameObjects.Sprite;
  constructor() {
        super({ key: "Preloader" });
  }


  create() {
    this.scene.start("Phase0");
  }
}
