var fixedRect, movingRect;
var gameObject1, gameObject2;
var edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(400,50,100,50);
  gameObject1.shapeColor = "green";

  edges = createEdgeSprites();

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
  }

  bounceoff(movingRect,fixedRect);
  bounceoff(fixedRect,gameObject1);
  bounceoff(fixedRect,edges[3]);

  drawSprites();
}