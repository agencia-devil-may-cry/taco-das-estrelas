import { Types } from    "phaser";
import { Boot } from    "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
    scene: [Boot, Preloader],
};
export default config;
