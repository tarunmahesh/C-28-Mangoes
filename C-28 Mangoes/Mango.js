class Mango {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Plucking Mangoes/mango.png")
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }

    display(){
        var mangoPos = this.body.position

        push()
        translate(mangoPos.x, mangoPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill(232,154,24)
        ellipse(0,0,this.radius,this.radius)
        imageMode(CENTER);
        image(this.image, 0, 0, 2*this.radius, 2*this.radius);
        pop()
    }
}