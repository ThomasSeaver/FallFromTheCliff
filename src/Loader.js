class Loader extends Phaser.Scene {
	constructor() {
		super({key: "Loader"})
	}

    preload() {
        sc.text      = "DAY ONE"
        sc.time      = 5000
        sc.nextScene = "Beach"
        sc.styles    = {fontSize: '32px', boundsAlignH: "center", boundsAlignV: "middle"}
    }

    create() {
        this.scene.start('Beach')
    }
}   