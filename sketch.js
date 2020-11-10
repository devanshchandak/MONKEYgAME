
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,370)

monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
ground=createSprite(400,350,900,10) 
ground.velocityX=-4
ground.x=ground.width/2 
  
  
  
}


function draw() {
  background(180)
 if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12
 }
 
monkey.velocityY = monkey.velocityY + 0.8  
   
monkey.collide(ground)   
   
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
 spawnFruits() ;    
 spawnObstacles() ;
   
  
  
drawSprites();  
}
function spawnFruits(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,300,40,10)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
   banana.velocityX = -3
}
}
function spawnObstacles() {
if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,900,10)
   obstacle.addImage(obstaceImage)
  obstacle.scale=0.1
  obstacle.velocityX=-3;
}
}


