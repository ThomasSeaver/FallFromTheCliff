class Location extends Phaser.Scene {
	constructor() {
		super({key: "Location"})
	}

	// Should be semi-standard method of writing these scenes
	preload() {
		// Pull in input and other scene specific variables like nav mesh verts 
		// load assets
		ss.vertices = ll.vertices
		ss.keys = this.input.keyboard.addKeys('W,S,A,D,up,down,left,right,E')
		ss.entities = ll.entities
	}

	create() {
		// Draw BG or other 0th z level images
		this.add.image(gs.centerX, gs.centerY, ll.sceneBG)

		// Draw entities

		for (var i = 0; i < ss.entities.length; i++) {
			this.add.image(ss.entities[i].x, ss.entities[i].y, ss.entities[i].name)
			ss.entities[i].dialogueIndicator = this.add.image(ss.entities[i].x, ss.entities[i].y - 80, "DialogueIndicator")
			ss.entities[i].dialogueIndicator.visible = false
		}

		// Player gets drawn on top
		ss.player = this.add.sprite(ll.newScenePos.x, ll.newScenePos.y, "playerAlive")
		ss.player.setOrigin(0.5, 0.8)

		// Instantiate controllers for scene
		ss.nav = new NavController(ss.vertices)
		ss.input = new InputController(ss.keys, ss.nav, ss.entities)
	}

	update() {
        // Every update poll the input and deal with resulting information
		var result = ss.input.checkInput({x: ss.player.x, y: ss.player.y})
        if (result.transition) {
            if (result.nextScene == "Conversation") {
				cl.meta.returnScene = ll.sceneBG.substring(0, ll.sceneBG.length-2)
				cl.meta.returnPos   = result.nextPos
				cl.entity           = result.entity
				this.scene.start("Conversation")
            } else {
				loadScene(result.nextScene, result.nextPos, this)
			}
        }
        ss.player.x = result.nextPos.x
        ss.player.y = result.nextPos.y
	}
}