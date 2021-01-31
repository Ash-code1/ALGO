var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "yellow"
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow"

  //collider radius
  movingRect.debug = true;
  fixedRect.debug = true;

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.x)
 //console.log(movingRect.x-fixedRect.x)
  //console.log(movingRect.y-fixedRect.y)

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){

  movingRect.shapeColor = "blue";
 
  }

  else {
    movingRect.shapeColor = "red";
  
  }
  

  drawSprites();
}