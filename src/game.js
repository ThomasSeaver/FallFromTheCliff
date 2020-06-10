var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [Loader, SceneCard, Conversation, Location]
}

var game = new Phaser.Game(config)

function loadScene(location, newScenePos, scene) {
    ll.newScenePos = newScenePos
    if (location == "Beach") {
        ll.sceneBG     = "BeachBG"
        ll.entities    = gs.beach.entities
        ll.vertices    = gs.beach.vertices
    } else if (location == "Cliff") {
        ll.sceneBG     = "CliffBG"
        ll.entities    = gs.cliff.entities
        ll.vertices    = gs.cliff.vertices
    } else if (location == "River") {
        ll.sceneBG     = "RiverBG"
        ll.entities    = gs.river.entities
        ll.vertices    = gs.river.vertices
    } else if (location == "Camp") {
        ll.sceneBG     = "CampBG"
        ll.entities    = gs.camp.entities
        ll.vertices    = gs.camp.vertices
    } else if (location == "Exit") {
        ll.sceneBG     = "ExitBG"
        ll.entities    = gs.exit.entities
        ll.vertices    = gs.exit.vertices
    } 
    scene.scene.start('Location')
}

// GAMESTATE VARIABLE gs
const gs = {
    width:   config.width,
    height:  config.height,
    centerX: config.width / 2,
    centerY: config.height / 2,
    beach:   {
        sceneBG:  "",
        vertices: [
			{x: 484, y: 315},
			{x: 439, y: 408},
			{x: 439, y: 495},
			{x: 469, y: 567},
			{x: 568, y: 636},
			{x: 712, y: 657},
			{x: 1006, y: 546},
			{x: 1147, y: 546},
			{x: 1280, y: 576, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 50, y: 600}},
			{x: 1280, y: 324, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 50, y: 600}},
			{x: 937, y: 285},
			{x: 730, y: 285},
			{x: 604, y: 309}
		],
        entities: []
    },
    cliff:   {
        sceneBG:  "",
        vertices: [
			{x: 838, y: 0, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 868, y: 114}},
			{x: 1273, y: 0, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 868, y: 114}},
			{x: 1201, y: 510},
			{x: 1021, y: 645},
			{x: 1018, y: 645},
			{x: 877, y: 621},
			{x: 718, y: 660},
			{x: 634, y: 672},
			{x: 598, y: 612},
			{x: 649, y: 552},
			{x: 568, y: 456},
			{x: 502, y: 360},
			{x: 502, y: 264},
			{x: 598, y: 210},
			{x: 736, y: 183},
			{x: 823, y: 105},
			{x: 844, y: 42}
		],
        entities: []
    },
    river:   {
        sceneBG:  "",
        vertices: [
			{x: 0, y: 717, gatewayVertex: true, gatewayScene: "Beach", afterPos: {x: 1230, y: 430}},
			{x: 0, y: 426, gatewayVertex: true, gatewayScene: "Beach", afterPos: {x: 1230, y: 430}},
			{x: 166, y: 375},
			{x: 433, y: 375},
			{x: 709, y: 429}, 
			{x: 808, y: 420},
			{x: 1000, y: 312},
			{x: 1102, y: 267},
			{x: 1280, y: 258, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 82, y: 585}}, 
			{x: 1280, y: 714, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 82, y: 585}}
		],
        entities: []
    },
    camp:   {
        sceneBG:  "",
        vertices: [
			{x: 166, y: 633},
			{x: 0, y: 633, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 1220, y: 570}},
			{x: 0, y: 489, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 1220, y: 570}},
			{x: 268, y: 405},
			{x: 343, y: 237},
			{x: 487, y: 114},
			{x: 688, y: 114},
			{x: 835, y: 0, gatewayVertex: true, gatewayScene: "Cliff", afterPos: {x: 1045, y: 111}},
			{x: 1015, y: 0, gatewayVertex: true, gatewayScene: "Cliff", afterPos: {x: 1045, y: 111}}, 
			{x: 946, y: 141},
			{x: 958, y: 255},
			{x: 1192, y: 405},
			{x: 1280, y: 405, gatewayVertex: true, gatewayScene: "Exit", afterPos: {x: 49, y: 381}}, 
			{x: 1280, y: 612, gatewayVertex: true, gatewayScene: "Exit", afterPos: {x: 49, y: 381}}, //1210 537
			{x: 1003, y: 573},
			{x: 871, y: 543},
			{x: 661, y: 543},
			{x: 463, y: 600},
			{x: 361, y: 633}
		],
        entities: []
    },
    exit:   {
        sceneBG:  "",
        vertices: [
			{x: 0, y: 417, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 1210, y: 537}}, 
			{x: 0, y: 225, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 1210, y: 537}}, 
			{x: 322, y: 273},
			{x: 532, y: 336},
			{x: 808, y: 336},
			{x: 1006, y: 288},
			{x: 1162, y: 249},
			{x: 1240, y: 240},
			{x: 1225, y: 468},
			{x: 1099, y: 489},
			{x: 1096, y: 489},
			{x: 799, y: 513},
			{x: 517, y: 465},
			{x: 280, y: 432},
			{x: 85, y: 417}
		],
        entities: []
    }
}
// SCENESTATE VARIABLE ss
const ss = {}
// LOCATION LOADER ll
const ll = {}
// SCENECARD LOADER sc
const sc = {}
// CONVERSATION LOADER c
const c = {}
