var PLAY=1;
var END=0;
var gameState=1;

var sword, fruit1, fruit2, fruit3, fruit4, enemy, fruitGroup, enemyGroup;




function preload(){
  
 enemy_moving = loadAnimation("alien1.png","alien2.png")
  
 fruit1 = loadImage("fruit1.png"); 
  
  fruit2 = loadImage("fruit2.png"); 
  
  fruit3 = loadImage("fruit3.png"); 
  
  fruit4 = loadImage("fruit4.png"); 
 swordImage = loadImage("knife.png"); 
   gameover = loadImage("gameover.png");
  gameover1 = loadSound("gameover.mp3");
  
}
function setup() {
  createCanvas(500,400);
  
sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
  sword.scale=0.5
  
 
  
  score=0;
  
  
  fruitGroup= new Group();
  enemyGroup = new Group();
  
  
  
}
function draw(){
background("lightblue");
  
  sword.y=  World.mouseY;
   sword.x=World.mouseX;
  
  
   
  if(gameState === PLAY){
  
  if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+2;
  }
  
  }

  
   
  if(enemyGroup.isTouching(sword)){
  enemyGroup.destroyEach();
  gameover1.play();
  gameState=END;
  }
  
   if(gameState === END){
  
  sword.addImage(gameover);
  sword.x=200;
  sword.y=200; 
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
     
   }    
     
     
  fruits();
  enemy();
  
  drawSprites();
   text("Score: "+ score, 400,50);
}

function fruits(){

if(World.frameCount%80===0){
  position=Math.round(random(1,2))
  fruit=createSprite(400,200,20,20);
fruit.scale=0.2;
//fruit.debug=true;
r=Math.round(random(1,4));
if(r == 1){
fruit.addImage(fruit1)
}else if(r == 2){
fruit.addImage(fruit2)
}else if(r == 3){
fruit.addImage(fruit3)
}else{
fruit.addImage(fruit4)
}

fruit.y=Math.round(random(50,340))

  if(position==1)
  {
  fruit.x=400;
    fruit.velocityX=-(7+(score/4));
  }
  
  else
  {
    if(position==2)
  {
  fruit.x=0;
  
  fruit.velocityX= (7+(score/4));
  }
  }

fruit.setLifetime=100;

fruitGroup.add(fruit);


}
}


function enemy(){

if(World.frameCount%200===0){
var enemy=createSprite(400,200,20,20);
enemy.addAnimation("moving",enemy_moving);  
enemy.y=Math.round(random(100,300));
enemy.velocityX=-(8+(score/10));
enemy.setLifetime=500;
  
  enemyGroup.add(enemy)

}


}




