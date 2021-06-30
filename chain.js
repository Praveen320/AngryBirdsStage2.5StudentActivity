class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10,
    
        }
    
       this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        line(bird.body.position.x,bird.body.position.y,constraintlog.body.position.x,constraintlog.body.position.y)
    }
}