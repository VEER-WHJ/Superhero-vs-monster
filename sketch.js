const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var myEngine, myWorld
var background, ground, player, monster, box, rope
function preload() {
background=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  player=new Player(400, 300, 50, 50)
  rope=new Rope(player.body, {x: 1500, y: 100})
  monster = new Monster(2200, 400, 60, 60)
  boxA1=new Box(550, 400, 15, 15)
  boxA2=new Box(550, 420, 15, 15)
  boxA3=new Box(550, 440, 15, 15)
  boxA4=new Box(550, 460, 15, 15)
  boxA5=new Box(550, 480, 15, 15)
  boxA6=new Box(550, 500, 15, 15)
  boxA7=new Box(550, 520, 15, 15)
  boxB1=new Box(575, 400, 15, 15)
  boxB2=new Box(575, 420, 15, 15)
  boxB3=new Box(575, 440, 15, 15)
  boxB4=new Box(575, 460, 15, 15)
  boxB5=new Box(575, 480, 15, 15)
  boxB6=new Box(575, 500, 15, 15)
  boxC1=new Box(600, 400, 15, 15)
  boxC2=new Box(600, 420, 15, 15)
  boxC3=new Box(600, 440, 15, 15)
  boxC4=new Box(600, 460, 15, 15)
  boxC5=new Box(600, 480, 15, 15)
  boxC6=new Box(600, 500, 15, 15)
  boxC7=new Box(600, 520, 15, 15)
  boxC8=new Box(600, 540, 15, 15)
  boxD1=new Box(625, 400, 15, 15)
  boxD2=new Box(625, 420, 15, 15)
  boxD3=new Box(625, 440, 15, 15)
  boxD4=new Box(625, 460, 15, 15)
  boxD5=new Box(625, 480, 15, 15)
  ground=new Ground(0, 400, 2300, 10)
}

function draw() {
  background(background);

}
function mouseDragged(){
  Matter.body.setPosition(player.body, {x: mouseX, y: mouseY})
}