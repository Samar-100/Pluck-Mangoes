const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree, treeImage, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5;
var world, boy;
var launchingForce = 100;

function preload() {
  boy = loadImage("images/boy.png");
  treeImage = loadImage("images/tree.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  stone = new Stone(235, 420, 60);

  mango1 = new Mango(1100, 100, 30);
  mango2 = new Mango(1170, 130, 30);
  mango3 = new Mango(1010, 140, 30);
  mango4 = new Mango(1000, 70, 30);
  mango5 = new Mango(1100, 70, 30);

  tree = createSprite(1050, 300, 600, 600);
  tree.scale = 0.5;
  tree.addImage("tree", treeImage);
  ground = new Ground(width / 2, 600, width, 20);
  launcher = new Launcher(stone.body, { x: 235, y: 420 });

  Engine.run(engine);
}

function draw() {
  background(230);
  textSize(25);
  text("Press Space for a second Chance to Play!!", 50, 50);
  image(boy, 200, 340, 200, 300);

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();

  ground.display();
  launcher.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcher.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, { x: 235, y: 420 });
    launcher.attach(stone.body);
  }
}

function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}
