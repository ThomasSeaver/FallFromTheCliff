class InputController {
    constructor(input, nav, entities) {
        this.input = input
        this.nav = nav
        ss.entities = entities
    }

    // Handles Input and returns whether we're entering Conversation or NewScene or just moving player
    checkInput (playerPos) {
		
		// Check for dialogue entities within certain radius
		for (var i = 0; i < ss.entities.length; i++) {
			if (!ss.entities[i].inDialogueRadius && this.distance({x: playerPos.x, y: playerPos.y}, {x: ss.entities[i].x, y: ss.entities[i].y}) < 150) {
				ss.entities[i].dialogueIndicator.visible = true;
				ss.entities[i].inDialogueRadius = true
			} else if (ss.entities[i].inDialogueRadius && this.distance({x: playerPos.x, y: playerPos.y}, {x: ss.entities[i].x, y: ss.entities[i].y}) > 150) {
				ss.entities[i].dialogueIndicator.visible = false;
				ss.entities[i].inDialogueRadius = false
			}
        }
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
			console.log("x: " + playerPos.x + " y: " + playerPos.y)
			for (var i = 0; i < ss.entities.length; i++) {
				if (ss.entities[i].inDialogueRadius) {
                    return {transition: true, nextScene: "Conversation", entity: ss.entities[i], nextPos: {x: playerPos.x, y: playerPos.y}}
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
        return {transition: false, nextPos: playerPos}
    }

	distance(a, b) {
		return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
	}
}