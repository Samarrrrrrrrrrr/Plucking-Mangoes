
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(275, 125, 500, 500)
	ground = new Ground(400, 650, 800, 100)
	stone = new Stone(85, 490, 30, 30)
	slingshot = new Slingshot(stone.body, {x:100, y:500})
	mango1 = new Mango(600, 350, 30, 30)
	mango2 = new Mango(630, 230, 30, 30)
	mango3 = new Mango(550, 250, 30, 30)
	mango4 = new Mango(900, 230, 30, 30)
	mango5 = new Mango(810, 380, 30, 30)
	mango6 = new Mango(450, 190, 30, 30)
	mango7 = new Mango(530, 320, 30, 30)
	mango8 = new Mango(980, 280, 30, 30)
	mango9 = new Mango(360, 270, 30, 30)
	mango10 = new Mango(440, 260, 30, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);

image(boyImage, 50, 450, 200, 200)
  tree.display();
ground.display();
stone.display();
slingshot.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

  drawSprites();
 
}

function mouseDragged() {

Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {

	slingshot.fly()
	
}

function keyPressed() {

if (keyCode === 32) {
	Matter.Body.setPosition(stone.body, {x:235, y:420})
	slingshotObject.attach(stone.body);
	}
}

function detectollision(bodyA, bodyB) {

mangoBodyPosition=bodyB.body.position
stoneBodyPosition=bodyA.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=bodyB.width/2+bodyA.width/2)
	{
		Matter.Body.setStatic(bodyB.body,false)
	}
}