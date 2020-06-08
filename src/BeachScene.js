class BeachScene extends Phaser.Scene {
	constructor() {
		super({key: "BeachScene"})
	}

	create() {
		let bg = this.load("./assets/BeachBg.png")
		this.add.image(bg)
	}

}