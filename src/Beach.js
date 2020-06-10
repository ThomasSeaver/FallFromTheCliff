class Beach extends Phaser.Scene {
	constructor() {
		super({key: "Beach"})
	}

	preload() {
        gs.input = this.input.keyboard.addKeys('W,S,A,D,up,down,left,right,E')
		this.load.image("beachBG", "./assets/BeachBg.png")
		this.load.image("playerAlive", "./assets/PlayerAlive.png")
		this.vertices = [
			{x: 484, y: 315},
			{x: 439, y: 408},
			{x: 439, y: 495},
			{x: 469, y: 567},
			{x: 568, y: 636},
			{x: 712, y: 657},
			{x: 1006, y: 546},
			{x: 1147, y: 546},
			{x: 1280, y: 576, gatewayVertex: true, gatewayScene: "SceneCard"},
			{x: 1280, y: 324, gatewayVertex: true, gatewayScene: "SceneCard"},
			{x: 937, y: 285},
			{x: 730, y: 285},
			{x: 604, y: 309}
		]
		gs.nav = new NavController(this.vertices)
	}

	create() {
		this.add.image(gs.centerX, gs.centerY, "beachBG")
		gs.player = this.add.sprite(gs.centerX, gs.centerY, "playerAlive")
		gs.player.setOrigin(0.5, 0.8)
		gs.circle = this.add.circle(gs.player.x, gs.player.y, 8, 0x0000ff)
		for (var i = 0; i < this.vertices.length; i++) {
			this.add.circle(this.vertices[i].x, this.vertices[i].y, 8, 0xff)
			if (i > 0) {
				this.add.line(0, 0, this.vertices[i].x, this.vertices[i].y, this.vertices[i - 1].x, this.vertices[i - 1].y, 0xff0000).setOrigin(0,0)
			}
		}
		this.add.line(0, 0, this.vertices[0].x, this.vertices[0].y, this.vertices[this.vertices.length - 1].x, this.vertices[this.vertices.length - 1].y, 0xff0000).setOrigin(0,0)
	}

	update() {
		var newY = gs.player.y
		var newX = gs.player.x
		if (gs.input.W.isDown || gs.input.up.isDown) {
			newY -= 3
		}
		if (gs.input.S.isDown || gs.input.down.isDown) {
			newY += 3
		}
		if (gs.input.D.isDown || gs.input.right.isDown) {
			newX += 3
		}
		if (gs.input.A.isDown || gs.input.left.isDown) {
			newX -= 3
		}
		if (gs.input.E.isDown) {
			console.log(gs.player.x + ' ' + gs.player.y)
			this.add.circle(gs.player.x, gs.player.y, 8, 0xff0000)
		}
		if (newX != gs.player.x || newY != gs.player.y) {
			var result = gs.nav.collisionCheck({x:gs.player.x, y:gs.player.y}, {x: newX, y: newY})
			if (result.gateway) {
				this.scene.start(result.newScene)
			} else {
				gs.player.x = result.x
				gs.player.y = result.y
				gs.circle.x = result.x
				gs.circle.y = result.y
			}
		}
	}
}