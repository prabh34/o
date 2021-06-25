class Rope{
  constructor(bodyA,pointB){
    var options={
      pointA: bodyA,
      pointB: pointB,
      stiffness:1.2,
      length:20

    }
    this.pointB=pointB;
    this.body=Constraint.create(options);
    World.add(world,this.body);
  }
  fly() {
    this.rope.bodyA=null;
  }
  attach() {
    this.rope.bodyA=bodyA;
  
  }
  display() {
    pointA=this.body.bodyA.Position;
    pointA=this.body.pointB;
    strokeWeight(0);
    stroke("blue");
    line(pointB.x,pointB.y,pointA.x,pointA.y)
  }
}