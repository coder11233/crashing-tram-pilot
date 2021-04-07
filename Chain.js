class Chain{
    constructor(bodyA, bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.5,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;

        stroke(0);
        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);
    }
}