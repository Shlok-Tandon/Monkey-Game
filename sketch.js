
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,ground;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  survivaltime = 0;
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && monkey.y >= 150) {
    monkey.y = monkey.y - 25;
  }
  monkey.y = monkey.y + 5;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana(){
  if (frameCount%80 === 0){
   banana = createSprite(400,Math.round(random(120,200)),20,20)
   banana.velocityX = -5;
   banana.addImage("food",bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if (frameCount%300 === 0){
    obstacle = createSprite(375,325,20,20);
    obstacle.velocityX = -7;
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
  
}






