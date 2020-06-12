class Conversation extends Phaser.Scene {
	constructor() {
		super({key: "Conversation"})
	}

	preload() {
		ss.input = this.input.keyboard.addKeys('E')
		if (!cl.entity.talkedTo) {
			if (cl.entity.name == "George") {
				gs.handkerchief = true
			} else if (cl.entity.name == "Cop") {
				gs.knife = true;
			}
			ss.dialogue = cl.entity.dialogues[0]
			cl.entity.talkedTo = true
		} else if ((cl.entity.name == "Alex" || cl.entity.name == "Cop" || cl.entity.name == "Katie") && (gs.handkerchief == true) && (!cl.entity.secondDialogue)) {
			ss.dialogue = cl.entity.dialogues[1]
			cl.entity.secondDialogue = true
		} else if (cl.entity.name == "Tara" && gs.knife == true && (!cl.entity.secondDialogue)) { 
			ss.dialogue = cl.entity.dialogues[1]
			cl.entity.secondDialogue = true
		} else if (cl.entity.name == "Cop") { 
			ss.dialogue = cl.entity.dialogues[2]
		} else { 
			loadScene(cl.meta.returnScene, cl.meta.returnPos, this)
		}
		ss.eDown = false
		ss.decision = false
	}

	create() {
		this.add.image(160, 360, ss.dialogue.speakers[0] + "BG")
		this.add.image(640, 360, "dialogueBG")
		this.add.image(1120, 360, ss.dialogue.speakers[1] + "BG")
		ss.dialogueElements = []
		ss.newPos = {x: 530, y: 76}
		this.addMessage(event)
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
		if (ss.dialogueElements.length == ss.dialogue.messages.length) {
			loadScene(cl.meta.returnScene, cl.meta.returnPos, this)
		} else if (ss.dialogue.messages[ss.dialogueElements.length].lossScreen == true) {
			sc.text = "YOU LOSE!\nRestart game to try again."
			sc.time = 6000000
			this.scene.start("SceneCard")
		} else if (ss.dialogue.messages[ss.dialogueElements.length].winScreen == true) {
			sc.text = "YOU WIN!\nCongratulations!"
			sc.time = 6000000
			this.scene.start("SceneCard")
		} else if (ss.dialogue.messages[ss.dialogueElements.length].decisionButton == true) {
			if (!ss.decision) {
				var george = this.add.image(430, 610, "DecisionBox").setInteractive()
				this.add.text(350, 610, "George King")
				var katie = this.add.image(430, 680, "DecisionBox").setInteractive()
				this.add.text(350, 680, "Katie Smith")
				var tara = this.add.image(640, 610, "DecisionBox").setInteractive()
				this.add.text(560, 610, "Tara Diskin")
				var idk = this.add.image(640, 680, "DecisionBox").setInteractive()
				this.add.text(560, 680, "I don't know yet")
				var moe = this.add.image(850, 610, "DecisionBox").setInteractive()
				this.add.text(770, 610, "Moe Floyd")
				var alex = this.add.image(850, 680, "DecisionBox").setInteractive()
				this.add.text(770, 680, "Alex Jensen")
				ss.decision = true

				katie.on('pointerup', () => {
					cl.meta.returnScene = "Beach"
					cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
					cl.entity           = {dialogues: [gs.dialogues.loss], talkedTo: false}
					this.scene.start("Conversation")
				})				
				tara.on('pointerup', () => {
					cl.meta.returnScene = "Beach"
					cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
					cl.entity           = {dialogues: [gs.dialogues.loss], talkedTo: false}
					this.scene.start("Conversation")
				})				
				george.on('pointerup', () => {
					cl.meta.returnScene = "Beach"
					cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
					cl.entity           = {dialogues: [gs.dialogues.loss], talkedTo: false}
					this.scene.start("Conversation")
				})				
				moe.on('pointerup', () => {
					cl.meta.returnScene = "Beach"
					cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
					cl.entity           = {dialogues: [gs.dialogues.loss], talkedTo: false}
					this.scene.start("Conversation")
				})				
				alex.on('pointerup', () => {					
					cl.meta.returnScene = "Beach"
					cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
					cl.entity           = {dialogues: [gs.dialogues.win], talkedTo: false}
					this.scene.start("Conversation")
				})				
				idk.on('pointerup', () => {
					loadScene(cl.meta.returnScene, cl.meta.returnPos, this)
				})
			}
		} else {
			if (ss.dialogueElements.length >= 5) {
				for (var i = 0; i < ss.dialogueElements.length; i++) {
					ss.dialogueElements[i].box.y -= 142
					ss.dialogueElements[i].text.y -= 142
				}
			}
			var newBox;
			if (ss.dialogue.messages[ss.dialogueElements.length].side == "left") {
				newBox = this.add.image(530, ss.newPos.y, "boxBG")
			}	else {
				newBox = this.add.image(750, ss.newPos.y, "boxBG")
			}
			var newText = this.add.text(newBox.x - 190, newBox.y - 58, ss.dialogue.messages[ss.dialogueElements.length].text)
			newText.setWordWrapWidth(380)
			ss.dialogueElements.push({box: newBox, text: newText})

			if (ss.dialogueElements.length < 5) {
				ss.newPos.y += 142
			} 
		}
	}
}