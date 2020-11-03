var wall, car;
var speed, weight, deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 25);
  car.shapeColor = "white";
  wall = createSprite(700, 200, 30, 300);
  wall.shapeColor = "brown";
  speed = random(50, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
}

function draw() {
  background("black");
  if (car.isTouching(wall)){
    car.velocityX = 0;
    deformationCalc();
  }
  drawSprites();
}

function deformationCalc(){
  deformation = (0.5 * weight * speed * speed)/22500;
  if(deformation < 100){
    car.shapeColor = "green";
  }
  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow";
  }
  if(deformation > 180){
    car.shapeColor = "red";
  }

}