import { Types } from
    "phaser"
import { Boot } from
    "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { Maps } from "./scenes/Maps";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
    scene: [Boot, Preloader, Maps],
};
export default config;
