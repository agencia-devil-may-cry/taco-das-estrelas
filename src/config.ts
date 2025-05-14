import { Types } from
    "phaser"
import { Boot } from
    "./scenes/Boot";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
    scene: [Boot],
};
export default config;
