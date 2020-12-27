object2
var fixed, moving;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(200, 200, 50, 80);
  moving = createSprite(200, 200, 80, 30);
  gameObject1= createSprite(100, 100, 50, 50);
  gameObject2= createSprite(200, 100, 50, 50);
  gameObject3= createSprite(300, 100, 50, 50);
  gameObject4= createSprite(400, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
  moving.shapeColor="green";
  fixed.shapeColor="green";
 // gameObject2.velocityY=4;
  moving.velocityY=-4;
}

function draw() {
  background(0); 
  fixed.x=World.mouseX;
  fixed.y=World.mouseY;
  console.log(moving.x-fixed.x);

  drawSprites();
  if(isTouching(fixed, gameObject3)){
    fixed.shapeColor="blue";
    gameObject3.shapeColor="blue";
  }
  else{
    fixed.shapeColor="green";
    gameObject3.shapeColor="green";
  }
  bounceOff(moving, gameObject2);
}

