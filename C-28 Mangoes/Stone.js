class Stone {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.x = x;
        this.y = y
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/stone.png")
        this.body = Bodies.circle(x,y,radius)
        World.add(world,this.body)
    }

    display(){
        var stonePos = this.body.position

        push()
        translate(stonePos.x, stonePos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill("white")
        ellipse(0,0,this.radius,this.radius)
        imageMode(CENTER);
        image(this.image, 0, 0, 2*this.radius, 2*this.radius);
        pop()
    }
}