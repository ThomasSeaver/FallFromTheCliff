class Loader extends Phaser.Scene {
	constructor() {
		super({key: "Loader"})
	}

    preload() {
        sc.text      = "DAY ONE"
        sc.time      = 5000
        sc.nextScene = "Beach"
        sc.styles    = {fontSize: '32px', boundsAlignH: "center", boundsAlignV: "middle"}
		this.load.image("RiverBG", "./assets/River.png")
		this.load.image("BeachBG", "./assets/BeachBg.png")
		this.load.image("CampBG", "./assets/Camp.png")
		this.load.image("ExitBG", "./assets/Exit.png")
		this.load.image("CliffBG", "./assets/Cliff.png")
		this.load.image("playerAlive", "./assets/PlayerAlive.png")
    }

    create() {
        loadScene("Beach", {x: gs.centerX, y: gs.centerY}, this)
    }
}   