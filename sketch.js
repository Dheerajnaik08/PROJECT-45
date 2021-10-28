const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var beanSadImg, bean, beanStandingImg, beanWithTeddyImg, backgroundImg, teddyImg, teddy;
var engine; 

function preload(){
beanSadImg = loadImage("bean_sad.jpg");
beanStandingImg = loadImage("bean_standing.png");
beanWithTeddyImg = loadImage("bean_with_teddy.jpg");
backgroundImg = loadImage("Background.jpg");
teddyImg = loadImage("teddy.jpg");
}

function setup(){
createCanvas(1000,900);

engine = Engine.create();
world = engine.world;

}

function draw(){
  background(backgroundImg);

    bean = createSprite(500, 700, 50,50);
    bean.addImage(beanStandingImg);
    bean.scale = 0.5;
    
  drawSprites();

}