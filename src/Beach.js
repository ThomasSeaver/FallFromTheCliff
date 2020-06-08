class Beach extends Phaser.Scene {
	constructor() {
		super({key: "Beach"})
	}

	preload() {
        gs.input = this.input.keyboard.addKeys('W,S,A,D,up,down,left,right,E')
		this.load.image("beachBG", "./assets/BeachBg.png")
		this.load.image("playerAlive", "./assets/PlayerAlive.png")
		var boundaries = [
			{aX: 1280, aY: 336, bX: 1280, bY: 576, gatewayBoundary: false},
			{aX: 1280, aY: 576, bX: 1081, bY: 543, gatewayBoundary: false},
			{aX: 1081, aY: 543, bX: 943,  bY: 564, gatewayBoundary: false},
			{aX: 943,  aY: 564, bX: 826,  bY: 615, gatewayBoundary: false},
			{aX: 826,  aY: 615, bX: 727,  bY: 648, gatewayBoundary: false},
			{aX: 727,  aY: 648, bX: 643,  bY: 648, gatewayBoundary: false},
			{aX: 643,  aY: 648, bX: 520,  bY: 603, gatewayBoundary: false},
			{aX: 520,  aY: 603, bX: 454,  bY: 531, gatewayBoundary: false},
			{aX: 454,  aY: 531, bX: 439,  bY: 459, gatewayBoundary: false},
			{aX: 439,  aY: 459, bX: 445,  bY: 390, gatewayBoundary: false},
			{aX: 445,  aY: 390, bX: 469,  bY: 336, gatewayBoundary: false},
			{aX: 469,  aY: 336, bX: 634,  bY: 336, gatewayBoundary: false},
			{aX: 634,  aY: 336, bX: 757,  bY: 297, gatewayBoundary: false},
			{aX: 757,  aY: 297, bX: 871,  bY: 297, gatewayBoundary: false},
			{aX: 871,  aY: 297, bX: 910,  bY: 288, gatewayBoundary: false},
			{aX: 910,  aY: 288, bX: 1063, bY: 303, gatewayBoundary: false},
			{aX: 1063, aY: 303, bX: 1177, bY: 321, gatewayBoundary: false},
			{aX: 1177, aY: 321, bX: 1280, bY: 336, gatewayBoundary: false}
		]
		gs.nav = new NavController(boundaries, gs.centerX, gs.centerY);
	}

	create() {
		this.add.image(gs.centerX, gs.centerY, "beachBG")
		gs.player = this.add.sprite(gs.centerX, gs.centerY, "playerAlive")
		gs.player.setOrigin(0.5, 0.8)
		gs.circle = this.add.circle(gs.player.x, gs.player.y, 8, 0x0000ff)
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
		if (newX != gs.player.x || newY != gs.playerY) {
			var result = gs.nav.moveResult(newX, newY)
			if (result == "notGate") {
				gs.player.x = newX
				gs.player.y = newY
				gs.circle.x = gs.player.x
				gs.circle.y = gs.player.y
			} else if (result != false) {
				this.scene.start(result)
			}
		}
	}
}