class SceneCard extends Phaser.Scene {
	constructor() {
		super({key: "SceneCard"})
    }

    // LOAD SC WITH VARIABLES
    // TEXT
    // TIME IN MS
    // NEXT SCENE
    // STYLE OPTIONS

    
    create () {
        this.timeMark = -1
        this.textCard = this.add.text(gs.centerX, gs.centerY, sc.text, sc.styles)
        this.textCard.x -= this.textCard.width * 0.5
        this.textCard.y -= this.textCard.height * 0.5
    }

    update (time, delta) {
        if (this.timeMark == -1) {
            this.timeMark = time
        } else if (this.timeMark + sc.time < time) {
            this.scene.start(sc.nextScene)
        }
    }
}