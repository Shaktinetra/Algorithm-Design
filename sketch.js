var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 5;
  fixedRect.velocityY = 5

  movingRect = createSprite(400, 300, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0);  

  if (movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
    )  {
    //fixedRect.shapeColor = "red";
    //movingRect.shapeColor = "red";

    fixedRect.velocityX = -(fixedRect.velocityX);
    movingRect.velocityX = -(movingRect.velocityX);
  } 

  if (fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2) {
    
      fixedRect.velocityY = -(fixedRect.velocityY);
      movingRect.velocityY = -(movingRect.velocityY);
    }
  
  drawSprites();
}