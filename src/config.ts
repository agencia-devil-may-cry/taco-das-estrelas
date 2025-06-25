import { Types } from
    "phaser"
import { Boot } from
    "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { Phase0 } from "./scenes/Phase0";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
    scene: [Boot, Preloader, Phase0],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: true,
        },
    },
};
export default config;
