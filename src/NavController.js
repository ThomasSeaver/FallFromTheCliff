// Controller for navigating different screens, so I don't have redundant code across scenefiles
class NavController {
    // Add in boundaries and original player positions
    // Boundaries come in form {(int) aX, (int) aY, (int) bX, (int) bY, (boolean) gatewayBoundary, (optional String) nextScene}
    constructor(boundaries, playerX, playerY) {
        this.boundaries = boundaries
        this.playerX    = playerX
        this.playerY    = playerY
    }

    // Check if move is possible and return relevant information
    moveResult(newX, newY) {
        for (var i = 0; i < this.boundaries.length; i++) {
            // Check if player curPoint -> player newPoint intersects boundary line for each possible boundary line/movement
            // Stolen/Modified from https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
            // Because I'm too lazy to understand the math myself and this is a pretty simple ask
            
            var check = true

            var boundary = this.boundaries[i]
            var aX = boundary.aX
            var aY = boundary.aY
            var bX = boundary.bX
            var bY = boundary.bY

            var pX = this.playerX
            var pY = this.playerY
            var nX = newX
            var nY = newY

            /*var det = (bX - aX) * (nY - pY) - (nX - pX) * (bY - aY)

            if (det != 0) {
                var lambda = ((nY - pY) * (nX - aX) + (pX - nX) * (nY - aY)) / det;
                var gamma = ((aY - bY) * (nX - aX) + (bX - aX) * (nY - aY)) / det;       
                if ((0 < lambda && lambda < 1) && (0 < gamma && gamma < 1)) {
                    check = false
                }
            }*/

            // https://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment
            // Tried a much more mathy approach that was dumb, and this appears to solve issues the above had
            // Probably better to just combine them somehow, but ehhhhhhh

            if ((nY - aY) * (bX - aX) == (bY - aY) * (nX - aX)) {
                check = false;
            }
            
            
            if (!check) {
                if (boundary.gatewayBoundary) {
                    return boundary.nextScene
                } else {
                    console.log(boundary)
                    return false
                }
            }

        }
        this.playerX = newX
        this.playerY = newY
        return "notGate"
    }
}