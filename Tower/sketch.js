const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
  h  = loadImage("Hexagon.png")
  bg = loadImage("COol.jpg");
}
function setup() {
  
  createCanvas(1500,600);
  engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(1200,300,220,10);
  ground2 = new Ground(600,500,200,10);
  ground3 = new Ground(750,600, 1500,20);

  block1  = new Block(530,459,30,40);
  block2 = new Block(560,459,30,40);
  block3 = new Block(590,459,30,40);
  block4 = new Block(620,459,30,40);
  block5 = new Block(650,459,30,40);

  block6 = new Block(560,419,30,40);
  block7 = new Block(590,419,30,40);
  block8 = new Block(620,419,30,40);
  block9 = new Block(590,400,30,40);

  polygon = Bodies.circle(50,200,20);

  block10  = new Block(1105,265,30,40);
  block12 = new Block(1136,270,30,40);
  block13 = new Block(1167,269,30,40);
  block14 = new Block(1201,269,30,40);
  block15 = new Block(1235,269,30,40);

  block16 = new Block(1136,250,30,40);
  block17 = new Block(1167,250,30,40);
  block18 = new Block(1201,250,30,40);
  block19 = new Block(1167,186,30,40);

  World.add(world,polygon);
  
  chain = new Chain(polygon,{x:150,y:200})
  
  Engine.run(engine);
}

function draw() {
  background(bg);  
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  ground3.display();
  chain.display();
  //b2.display();
  imageMode(CENTER);
  image(h, polygon.position.x,polygon.position.y,40,40);
  fill("LIGHT_BLUE");
  stroke("BLUE");
  textSize(40);
  text("X:"+ mouseX + "Y:"+mouseY,750,300);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
   chain.attach(polygon)
  }
}