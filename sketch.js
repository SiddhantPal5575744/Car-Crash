var car,wall;
var  speed , wieght;


function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200,100, 40);
  car.shapeColor=color(255,255,255);
  wall=createSprite(700, 200,80,350);
  wall.shapeColour='brown';

  speed=random(55,90);
  speed=random(400,1500);
}

function draw() {
  background(0,0,0);  
car.velocityX=speed;

if(wall.x-car.x<(wall.width+car.width)/2){
car.velocityX=0;
var deformation=0.5*speed*wieght*speed/22509
if(deformation<180){
car.shapeColor=color(255,0,0);

}

if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
  
  }

  if( deformation<100){
    car.shapeColor=color(0,255,0);
    
    }

}




  drawSprites();
}