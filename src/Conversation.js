class Conversation extends Phaser.Scene {
	constructor() {
		super({key: "Conversation"})
	}

	preload() {
		gs.input = this.input.keyboard.addKeys('E')
		gs.input.E.emitOnRepeat = false
		this.load.image("mainConvo", "./assets/tmc.png")
		this.load.image("sideConvo", "./assets/tsc.png")
		this.load.image("textMessage", "./assets/ce.png")
	}

	create() {
		this.add.image(160, 360, "sideConvo")
		this.add.image(640, 360, "mainConvo")
		this.add.image(1120, 360, "sideConvo")
		this.convo = []
		this.convoPosition = {x: 530, y: 76}
		gs.input.E.on('down', event => this.addMessage(event))
	}

	addMessage(event) {
		if (this.convo.length >= 5) {
			for (var i = 0; i < this.convo.length; i++) {
				this.convo[i].y -= 142
			}
		}
		this.convo.push(this.add.image(this.convoPosition.x, this.convoPosition.y, "textMessage"))
		this.add.text(this.convo[this.convo.length - 1].x, this.convo[this.convo.length - 1].y, gs.curDialogue.convo[0].text)
		if (this.convo.length < 5) {
			this.convoPosition.y += 142
		}
		if (this.convoPosition.x == 530) {
			this.convoPosition.x = 750
		} else {
			this.convoPosition.x = 530
		}
	}
}