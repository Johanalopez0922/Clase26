const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn1;
var angle=60;

var fan, fan1, fan2, fan3; 

function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ground_options ={
    isStatic: true
  };
  
  btn1 = createImg('up.png');
  btn1.position(350,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 

  fan = new Ground(50,370,100,30); 
  fan1 = new Ground(150, 370, 100, 30); 
  fan2 = new Ground(250, 370, 100, 30); 
  fan3 = new Ground(350, 370, 100, 30); 
    
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
  background(51);
  Engine.update(engine);  
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
  
  fan.show(); 
  fan1.show();
  fan2.show();
  fan3.show();
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}