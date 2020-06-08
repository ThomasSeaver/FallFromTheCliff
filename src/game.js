var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [SceneCard, Conversation, BeachScene]
}

var game = new Phaser.Game(config)

// GAMESTATE VARIABLE gs
const gs = {
    width:   config.width,
    height:  config.height,
    centerX: config.width / 2,
    centerY: config.height / 2
}
// SCENECARD LOADER sc
const sc = {
    text:      "DAY 1",
    time:      5000,
    nextScene: "BeachScene"
}
// CONVERSATION LOADER c
const c = {}