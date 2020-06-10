class InputController {
    constructor(input, nav, entities) {
        this.input = input
        this.nav = nav
        this.entities = entities
    }

    // Handles Input and returns whether we're entering Conversation or NewScene or just moving player
    checkInput (playerPos) {
        var newPos = {x: playerPos.x, y: playerPos.y}
		if (this.input.W.isDown || this.input.up.isDown) {
			newPos.y -= 3
		}
		if (this.input.S.isDown || this.input.down.isDown) {
			newPos.y += 3
		}
		if (this.input.D.isDown || this.input.right.isDown) {
			newPos.x += 3
		}
		if (this.input.A.isDown || this.input.left.isDown) {
			newPos.x -= 3
		}
		if (this.input.E.isDown) {
			for (var i = 0; i < this.entities.length; i++) {
				if (this.entities[i].inDialogueRadius) {
                    return {transition: true, nextScene: "Conversation", dialogue: this.entities[i].dialogue, nextPos: {x: playerPos.x, y: playerPos.y}}
				}
			}
		}
		if (newPos.x != playerPos.x || newPos.y != playerPos.y) {
			var result = this.nav.collisionCheck({x:playerPos.x, y:playerPos.y}, {x: newPos.x, y: newPos.y})
			if (result.gateway) {
                return {transition: true, nextScene: result.newScene, nextPos: result.gatewayPos}
			} else {
                return {transition: false, nextPos: result}
			}
		}
		
		// Check for dialogue entities within certain radius
		for (var i = 0; i < this.entities.length; i++) {
			if (!this.entities[i].dialogueDone) {
				if (!this.entities[i].inDialogueRadius && this.distance({x: playerPos.x, y: playerPos.y}, {x: this.entities[i].image.x, y: this.entities[i].image.y}) < 30) {
					this.entities[i].dialogueImage.visible = true;
					this.entities[i].inDialogueRadius = true
				} else if (this.entities[i].inDialogueRadius && this.distance({x: playerPos.x, y: playerPos.y}, {x: this.entities[i].image.x, y: this.entities[i].image.y}) > 30) {
					this.entities[i].dialogueImage.visible = false;
					this.entities[i].inDialogueRadius = false
				}
			}
        }
        return {transition: false, nextPos: playerPos}
    }

	distance(a, b) {
		return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
	}
}