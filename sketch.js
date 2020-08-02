var ground,contra,firegroup,fire,man,reset,gameOver,cloudgroup,mangroup;
var groundimg,contraimg,manimg,restartimg,gameoverimg;
score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
groundimg = loadImage("ground2.png");
contraimg = loadImage("contra2.gif");
cloudImage = loadImage("cloud.png");
manimg = loadImage("zombai.png");
restartimg = loadImage("restart.png");
gameoverimg = loadImage("gameOver.png");
}



function setup() {
  createCanvas(1365, 400);
  invisiableground = createSprite(400,395,2000,10);
  invisiableground.visible = false;
  var ground = createSprite(800,380,400,20);
  ground.addImage("master",groundimg);
  ground.x = ground.width /2;
  ground.velocityX = -3;
  contra1 = createSprite(60,340,400,20);
  contra1.addImage("bob",contraimg);
  contra1.scale = 0.5;
  mangroup = createGroup();
  firegroup = createGroup();
  cloudgroup = createGroup();
  // gameOver = createSprite(200,300);
 
 }

function draw() {
    background(0);
    if(gameState === PLAY){
        score = score + Math.round(getFrameRate()/60);
        text("Score: "+ score, 500,50);
      if(keyDown("UP_ARROW")&& contra1.y >= 150){
        contra1.velocityY = -10;
        
      }
       
        contra1.velocityY = contra1.velocityY + 0.7
      if (keyDown ("SPACE")) {
        fire = createSprite(contra1.x,contra1.y,10,3);
        firegroup.add(fire);

        //man1.visible = true;
        firegroup.add(fire);
        fire.shapeColor="blue";
        fire.velocityX =  12;
      
        }
      
        contra1.collide(invisiableground);
  
     
     }else if(gameState === END){
        ground.velocityX = 0;
        contra1.velocityY = 0;
        mangroup.setVelocityXEach(0);
        cloudgroup.setVelocityXEach(0);
        mangroup.setLifetimeEach(-1);
        cloudgroup.setLifetimeEach(-1);
        
      }
    spawnman(); 
    spawnClouds();
 drawSprites()
 }
 function spawnClouds() {
 
  if (frameCount % 100 === 0) {
    var cloud = createSprite(1360,120,40,10);
    cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.velocityX = -3;
      cloud.lifetime = 2000;
      cloudgroup.add(cloud);
  }
  
}
function spawnman(){
  if (frameCount % 100 === 0) {
    var man = createSprite(1360,310,40,10);
      man.addImage(manimg);
      man.velocityX = -3;
      man.lifetime = 2000;
      man.scale = 0.1;
      mangroup.add(man);
  }
  
}

    


   
    
  