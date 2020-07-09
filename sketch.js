function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  var car,wall;
  var speed,weight;
  var wall,thickness;
  var bullet,speed,weight;
  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);
  speed=random(223,321);
  weight=random(30,52);
  car.createSprite(50,200,50,50);
  wall.createSprite(1200,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX=speed;
  if(wall.x-car.x < (car.weight+wall.weight)/2)
  {
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0); 
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0); 
  }
  function hasCollided(lbullet,lwall)
  {

    bulletRightEdge=lbullet.x+lbullet.weight;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
  if(hasCollided(bullet,wall))
  {
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }





  }
}
