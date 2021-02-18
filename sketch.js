var fixed,move;

function setup() {
  createCanvas(1200,800);
  fixed =createSprite(200, 200, 50, 50);
  fixed.shapeColor = "black"

  move =createSprite(400, 200, 50, 50);
  move.shapeColor = "black"

}

function draw() {
  background(255,255,255);

  move.x = World.mouseX;
  move.y = World.mouseY;
  
  if(fixed.x- move.x <=fixed.width/2 + move.width/2
    &&  move.x- fixed.x <=fixed.width/2 + move.width/2
    &&  move.y- fixed.y <=fixed.height/2 + move.height/2 
    &&  fixed.y- move.y <=fixed.height/2 + move.height/2){
    fixed.shapeColor = "blue";
    move.shapeColor = "blue";
  }else{
    fixed.shapeColor = "black";
    move.shapeColor = "black";
  }

  drawSprites();
}