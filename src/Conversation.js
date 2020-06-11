class Conversation extends Phaser.Scene {
	constructor() {
		super({key: "Conversation"})
	}

	preload() {
		ss.input = this.input.keyboard.addKeys('E')
		console.log(cl.dialogue)
		ss.dialogueObj = cl.dialogue
		this.load.image("dialogueBG", "./assets/tmc.png")
		for (var i = 0; i < cl.dialogue.speakers.length; i++) {
			this.load.image(cl.dialogue.speakers[i] + "BG", "./assets/tsc" + cl.dialogue.speakers[i] + ".png")
		}
		this.load.image("boxBG", "./assets/ce.png")
		ss.eDown = false
	}

	create() {
		this.add.image(160, 360, cl.dialogue.speakers[0] + "BG")
		this.add.image(640, 360, "dialogueBG")
		this.add.image(1120, 360, cl.dialogue.speakers[1] + "BG")
		ss.dialogueElements = []
		ss.newPos = {x: 530, y: 76}
	}

	update() {
		if (ss.input.E.isDown) {
			if (!ss.eDown) {
				ss.eDown = true
				this.addMessage(event)
			}
		} else {
			ss.eDown = false;
		}
	}

	addMessage(event) {
		if (ss.dialogueElements.length == cl.dialogue.messages.length) {
			loadScene(cl.meta.returnScene, cl.meta.returnPos, this)
		} else {
			if (ss.dialogueElements.length >= 5) {
				for (var i = 0; i < ss.dialogueElements.length; i++) {
					ss.dialogueElements[i].box.y -= 142
					ss.dialogueElements[i].text.y -= 142
				}
			}
			var newBox;
			if (cl.dialogue.messages[ss.dialogueElements.length].side == "left") {
				newBox = this.add.image(530, ss.newPos.y, "boxBG")
			}	else {
				newBox = this.add.image(750, ss.newPos.y, "boxBG")
			}
			var newText = this.add.text(newBox.x - 190, newBox.y - 58, cl.dialogue.messages[ss.dialogueElements.length].text)
			newText.setWordWrapWidth(380)
			ss.dialogueElements.push({box: newBox, text: newText})

			if (ss.dialogueElements.length < 5) {
				ss.newPos.y += 142
			} 
		}
	}
}