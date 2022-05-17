var box 
function setup() {
  createCanvas(400,400);
  box = createSprite (303, 206, 50, 50)
}

function draw() 
{
  background(30);
drawSprites ()
box.shapeColor = "yellow"

if (keyIsDown(RIGHT_ARROW)) {
  background ("red")
}
}
