// Controller for navigating different screens, so I don't have redundant code across scenefiles
class NavController {

    // Finally got collision check working
    // Takes in vertices of polygon / bounding area that I wish to be the 'nav mesh'
    // Builds min/max x/y vals for bounding box check
    constructor(vertices) {
        this.vertices = vertices
        
        this.minX = this.vertices[0].x
        this.maxX = this.vertices[0].x
        this.minY = this.vertices[0].y
        this.maxY = this.vertices[0].y

        for (var i = 0; i < this.vertices.length; i++) {
            this.minX = Math.min(this.vertices.x, this.minX) 
            this.maxX = Math.max(this.vertices.x, this.maxX)
            this.minY = Math.min(this.vertices.y, this.minY) 
            this.maxY = Math.max(this.vertices.y, this.maxY)
        }

    }

    // Takes in curpos and newpos
    // Runs a "Point is within Polygon" check, returns resulting position depending on whether it is within the navmesh
    collisionCheck(curPos, newPos) {
        
        // Simple bounding box check
        // If point does not lie within the square plane that contains the polygon, it can not by necessity lie within the polygon
        if (newPos.x < this.minX || newPos.x > this.maxX || newPos.y < this.minY || newPos.y > this.maxY) {
            // If we are intersecting a boundary, we must check and see whether it is a gate boundary
            return this.getBoundary(curPos, newPos)
        }

        // Much more complex check
        // Gotten from here       https://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon 
        // Based on code from RPI https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
        // Probably better to look at RPI code, but in short it does a bunch of raycasting nonsense 
        // Cycles whether the ray is inside and outside, and should work for concave or even holey polygons but I'mma try to keep em convex anyway
        var inside = false
        var i = 0
        var j = this.vertices.length - 1
        for (i, j; i < this.vertices.length; j = i++) {
            var ipos = this.vertices[i] 
            var jpos = this.vertices[j]
            if ((ipos.y > newPos.y) != (jpos.y > newPos.y) && newPos.x < (jpos.x - ipos.x) * (newPos.y - ipos.y) / (jpos.y - ipos.y) + ipos.x) {
                inside = !inside
            }
        }

        if (inside) {
            return {x: newPos.x, y: newPos.y, gateway: false}
        } else {
            return this.getBoundary(curPos, newPos)
        }
    }

    getBoundary(c, d) {
        // Go through each boundary
        for (var i = 0; i < this.vertices.length; i++) {
            var a = this.vertices[i]
            var b;
            if (this.vertices.length != i + 1) {
                b = this.vertices[i + 1]
            } else {
                b = this.vertices[0]
            }

            // Simple bounding box check
            // If min x val or y val of one line is greater than max x val or y val of other line, by necessity they can not cross
            if (!( (Math.min(a.x, b.x) > Math.max(c.x, d.x) || Math.min(c.x, d.x) > Math.max(a.x, b.x))
                || (Math.min(a.y, b.y) > Math.max(c.y, d.y) || Math.min(c.y, d.y) > Math.max(a.y, b.y)))) {
                var intersecting = false;
                // Passes simpler bounding box check, maybe don't even need bounding box check at this point
                // Test based on geeksforgeeks.org formula
                // https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
                var o1 = this.getOrientation(a, b, c)
                var o2 = this.getOrientation(a, b, d)
                var o3 = this.getOrientation(c, d, a)
                var o4 = this.getOrientation(c, d, b)

                // General formula
                if ((o1 != o2) && (o3 != o4)) {
                    intersecting = true
                }

                // Special cases
                if ((o1 == 0) && this.onSegment(a, c, b)) {
                    intersecting = true
                }
                if ((o2 == 0) && this.onSegment(a, d, b)) {
                    intersecting = true
                }
                if ((o3 == 0) && this.onSegment(c, a, d)) {
                    intersecting = true
                }
                if ((o4 == 0) && this.onSegment(c, b, d)) {
                    intersecting = true
                }
                
                if (intersecting) {
                    // Check if boundary is gateway
                    if (this.vertices[i].gatewayVertex && this.vertices[(i + 1 == this.vertices.length ? 0 : i + 1)].gatewayVertex) {
                        // If so, mark gateway in result as positive and return with new scene info
                        return {x: 0, y: 0, gateway: true, newScene: this.vertices[i].gatewayScene}
                    } else {
                        // If not, we should calculate new movement vector
                        // Find Intercept point 
                        var s1 = (c.y - d.y) / (c.x - d.x) 
                        var b1 = c.y - s1 * c.x

                        var s2 = (a.y - b.y) / (a.x - b.x)
                        var b2 = a.y - s2 * a.x

                        var iX = (b1 - b2) / (s2 - s1)
                        var iY = s1 * iX + b1

                        var boundaryTheta = Math.atan((a.y - iY) / (a.x - iX))
                        var vectorTheta   = Math.atan((d.y - iY) / (d.x - iX))

                        var thetaDelta = Math.max(boundaryTheta, vectorTheta) - Math.min(boundaryTheta, vectorTheta)

                        var lineLength = Math.sqrt((a.y - iY) * (a.y - iY) + (a.x - iX) * (a.x - iX))

                        var slideValue = Math.cos(thetaDelta) * lineLength

                        // Now we have how far we need to project alone the line either way but must figure out which way 
                        // If newPos.x > intercept.x, then project to the right, otherwise to the left
                        var xDelta = Math.sqrt((slideValue * slideValue) / ((s2 * s2) + 1))
                        var xVal, yVal
                        if (d.x > iX) {
                            xVal = iX + xDelta
                            yVal = s2 * xVal + b2
                        } else {
                            xVal = iX - xDelta
                            yVal = s2 * xVal + b2
                        }
                        console.log(xVal + " " + yVal + " " + c.x + " " + c.y)
                        //return {x: xVal, y: yVal, gateway: false}
                        // TODO FIX broke dont know why cuz i dont get math
                        return {x: c.x, y: c.y, gateway: false}
                    }
                }
            }
        }
    }

    getOrientation(a, b, c) {
        // https://www.geeksforgeeks.org/orientation-3-ordered-points/amp/%c2%a0/
        // 0 == colinear
        // 1 == cw
        // 2 == ccw

        var val = ((b.y - a.y) * (c.x - b.x)) - ((b.x - a.x) * (c.y - b.y))
        if (val > 0) {
            return 1
        } else if (val < 0) {
            return 2
        } else {
            return 0
        }
    }

    onSegment(a, b, c) {
        return ((Math.min(a.x, c.x) <= b.x && Math.max(a.x, c.x) >= b.x) && (Math.min(a.y, c.y) <= b.y && Math.max(a.y, c.y) >= b.y))
    }
}