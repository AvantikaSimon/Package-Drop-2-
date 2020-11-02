const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, helicopter, helicopter2, package, ground

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  package_options = {
    restitution:1
  }

  package = Bodies.rectangle(200, 75, 15, 20, package_options);
  

World.add(world, package);

  helicopter_options = {
    isStatic:true
  }
  helicopter = Bodies.rectangle(150, 70, 150, 20, helicopter_options);

World.add(world, helicopter); 

  ground_options = { 
    isStatic:true
  }

  ground = Bodies.rectangle(1, 380, 400, 20, ground_options);
  World.add(world, ground); 
}

function draw() {
  background("white");
  Engine.update(engine);

  if(package.y > 375){
    package_options = {
      isStatic:true
    }
  }

  rectMode(CENTER);
  rect(package.position.x, package.position.y, 25, 30);

  rectMode(CENTER);
  rect(helicopter.position.x, helicopter.position.y, 150, 20);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  drawSprites();
}