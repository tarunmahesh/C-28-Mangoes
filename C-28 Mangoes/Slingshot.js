class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.007,
            length : 5
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
    
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body)
    }
    display(){

        if(this.body.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB
    
            push();
            strokeWeight(5)
            stroke(48,22,8)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
            pop();
        }
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body
    }
  };