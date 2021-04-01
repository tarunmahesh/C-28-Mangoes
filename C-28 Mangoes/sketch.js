var launchState = 1
var slingState = 0
var gameState = slingState

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyImage
var tree1, ground, stone, slingshot
var mango1, mango2, mango3, mango4, mango5, mango6
var tree, treeImage

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
	treeImage = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(150,600,10,10)
	boy.addImage(boyImage)
	boy.scale = 0.1

	tree = createSprite(650,425,200,200)
	tree.addImage(treeImage)
	tree.scale  =0.425
	
	//tree1 = new Tree(650,400,300,500)
	stone = new Stone(100,545,20,20)
	ground = new Ground(400,674,800,10)

	mango1 = new Mango(625,225,20)
	mango2 = new Mango(575,325,20)
	mango3 = new Mango(635,285,20)
	mango4 = new Mango(700,250,20)
	mango5 = new Mango(685,340,20)
	mango6 = new Mango(760,325,20)

	slingshot = new Slingshot(stone.body, {x:100,y:545})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  //tree1.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
 
}

function mouseDragged() {

    if(gameState !== launchState){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})     
    }
}

function mouseReleased() {
    slingshot.fly()
    gameState = launchState
}

function detectCollision(Stones,Mangoes) {
	mangoPosition = Mangoes.body.position;
	stonePosition = Stones.body.position;

	distance = (stonePosition.x-mangoPosition.x)*(stonePosition.x-mangoPosition.x) + (stonePosition.y-mangoPosition.y)*(stonePosition.y-mangoPosition.y)

		if(distance <= 1600){
			Matter.Body.setStatic(Mangoes.body,false);
		}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		slingshot.attach(stone.body);
	}
	gameState = slingState;
}
