class Slingshot {

    constructor(bodyA, pointB) {

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 50,
            stiffness: 0.04,
        }

        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)

        this.bodyA = bodyA
        this.pointB = pointB
    }

    fly() {

        this.sling.bodyA=null

    }

    attach() {



    }
    
    display() {
        if(this.sling.bodyA) {

            push()
            stroke("pink")
            strokeWeight(5)
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)
            pop()
        }

    }


}