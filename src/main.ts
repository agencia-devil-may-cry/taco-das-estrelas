import{ Game, Types } from "phaser"

const config: Types.Core.GameConfig = { 
    type: Phaser .AUTO,
    width: 800,
    height: 450,
    parent: "game-container"  
}

export default new Game(config)