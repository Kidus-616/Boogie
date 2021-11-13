const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var b1,b2,b3,b4,b5,b6;
var ground
var chain, chain2, chain3, chain4, chain5
var rock

function preload(){
  bg= loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground= new Ground(600,390,1200,10)
  b1= new Boggie(50,70,50,50)
  b2= new Boggie(150,70,50,50)
  b3= new Boggie(250,70,50,50)
  b4= new Boggie(350,70,50,50)
  b5= new Boggie(450,70,50,50)
  b6= new Boggie(550,70,50,50)

  rock=new Rock(1000,70,100,100)

  chain1=new Chain(b1.body,b2.body)
  chain2=new Chain(b2.body,b3.body)
  chain3=new Chain(b3.body,b4.body)
  chain4=new Chain(b4.body,b5.body)
  chain5=new Chain(b5.body,b6.body)








}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()
  b6.show()

  rock.show()

  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()
  if (keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(b6.body, b6.body.position,{x:0.5,y:0})

  }
 

  
 
}