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

	}

	create() {
		// Draw BG or other 0th z level images
		this.add.image(gs.centerX, gs.centerY, ll.sceneBG)
		ss.entities = ll.entities
		ss.entities.push({image: this.add.circle(550, 500, 20, 0xff00ff), dialogueDone: false, dialogue: gs.testChat, inDialogueRadius: false})
		ss.entities[0].dialogueImage = this.add.circle(ss.entities[0].image.x, ss.entities[0].image.y - 40, 10, 0)
		ss.entities[0].dialogueImage.visible = false

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
                gs.curDialogue = result.dialogue
            }
            loadScene(result.nextScene, result.nextPos, this)
        }
        ss.player.x = result.nextPos.x
        ss.player.y = result.nextPos.y
	}
}