var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [Loader, SceneCard, Conversation, Beach]
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
const sc = {}
// CONVERSATION LOADER c
const c = {}