const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hero;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  //text(mouseX+","+mouseY,200,200);

  ground = new Ground(200, 400, 800,10 );
  hero = new Hero(50,50,100,100)
  // row 1 
  box1 = new Box(380,350,30,30);
  box2 = new Box(380,350,30,30);
  box3 = new Box(380,350,30,30);
  box4 = new Box(380,350,30,30);
  box5 = new Box(380,350,30,30);
  box6 = new Box(380,350,30,30);
  box7 = new Box(380,350,30,30);
  //box8 = new Box(380,350,40,40);
  //row2
  box9 = new Box(280,350,30,30);
  box10 = new Box(280,350,30,30);
  box11 = new Box(280,350,30,30);
  box12 = new Box(280,350,30,30);
  box13 = new Box(280,350,30,30);
  box14 = new Box(280,350,30,30);
  box15 = new Box(280,350,30,30);
  //box16 = new Box(280,350,40,40);

  rope = new Rope(hero.body,{x:100,y:65});
  monster = new Monster(580,200,100,100);




  Engine.run(engine);





  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  hero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  //box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  //box16.display();
  monster.display();
  


  

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX,y:moueY})
}

function mouseReleased() {
  attach.fly();
}
