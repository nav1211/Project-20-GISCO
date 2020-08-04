var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  //creating the car and wall
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  //giving the wall it's color
  wall.shapeColor = color(80,80,80);

  //setting random values for the speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //making the car move
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  //checking for collision
  if(wall.x - car.x < (wall.width + car.width)/2){

    //finding the deformation
    var deformation = (0.5 * weight * speed * speed)/22500;

    //making the car stop
    car.velocityX = 0;

    //changing the color if deformation is less than 100
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

    //changing the color of the car if deformation is more than 180
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    //changing the color of the car if deformation is between 100 and 180
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
  }

  drawSprites();
}