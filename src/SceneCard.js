class SceneCard extends Phaser.Scene {
	constructor() {
		super({key: "SceneCard"})
    }

    // LOAD SC WITH VARIABLES
    // TEXT
    // TIME IN MS
    // NEXT SCENE

    
    create () {
        this.timeMark = -1
        this.add.text(gs.centerX, gs.centerY, sc.text);
    }

    update (time, delta) {
        if (this.timeMark == -1) {
            this.timeMark = time
        } else if (this.timeMark + sc.time < time) {
            this.scene.start(sc.nextScene);
        }
    }
}