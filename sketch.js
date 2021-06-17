const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundI,bg1,snowman,barrier1,barrier2,trajectory=[],t,snowyState="standing",velX=1;
function preload(){
  imgStanding= loadImage("snowman (1).png");
  imgBeingGrabbed= loadImage("snowman (2).png");
  imgJumping= loadImage("snowman_.png");
  trailR= loadImage("snowTrail.png");
  trailL= loadImage("snowTrailL.png");
}
function setup() {
  createCanvas(800,400);
 snowman1=  createSprite(500, 300, 50, 50);
 barrier1=createSprite(700, 200, 25, 400)
 barrier2=createSprite(100, 200, 25, 400)
 barrier1.visible=false
 barrier2.visible=false
 v=int((Math.random() * 3));
 console.log(v);
 switch(v){
  case 0:
    bg="snow1.jpg";
    break;
  case 1:
    bg="snow2.jpg";
    break;
  case 2:  
    bg="snow3.jpg";
   break;
  default:
    bg="snow1.jpg "
  }
 
  backgroundI=loadImage(bg);
  snowman1.addImage('standing',imgStanding);
  snowman1.addImage('moving',imgBeingGrabbed);
  snowman1.addImage('jumping',imgJumping);
  snowman1.scale=0.5;
  snowman1.velocityX=1;
  snowSprite=new Snow(400,10,5);

}

function draw() {
  background(backgroundI);  
  drawSprites();
  textSize(20);
  snowSprite.display()
  text(snowman1.velocityX,50,100)
    if (mouseIsOver(snowman1)){
   // if (snowman1.velocityX!=0){velX=snowman1.velocityX;}
   snowyState=="grabbed"
    snowman1.velocityX=0
    snowman1.x=mouseX;
    snowman1.y=mouseY;
    snowman1.changeImage("moving")
  if (mouseDown("left")){
    snowman1.changeImage("jumping");
    textSize(50)
    stroke("white")
    strokeWeight(4)
    text("I am Shiva!",(snowman1.x+85),snowman1.y-10)
  }
}
  else {
    //snowman1.velocityX=velX;
  bonceOff(snowman1,barrier1)
  bonceOff(snowman1,barrier2)
 }
 Trajectory()
}
function bonceOff(x,y){
  if (x.isTouching(y)){
  x.velocityX=-velX;
  velX=x.velocityX;
}  //setTimeout(() => {x.changeImage("standing");}, 20000);
  x.changeImage("standing");

}
function Trajectory(){
  if (snowman1.velocityX==1){
      snowyState="moving"
      snowman1.mirrorX(1);
    if (snowyState=="moving"){
      var position = [snowman1.x-205, snowman1.y+75];
      trajectory.push(position);
   for(var i=0; i<trajectory.length; i++){
      t= image(trailL, trajectory[i][0], trajectory[i][1]);
      //setTimeout(()=> {t.remove();}, 3000); 
    }
   }
  }
  else if (snowman1.velocityX==-1){
      snowyState="moving"
      snowman1.mirrorX(-1);
      if (snowyState=="moving"){
      var position = [snowman1.x-75, snowman1.y+75];
      trajectory.push(position);
      for(var i=0; i<trajectory.length; i++){
      t= image(trailR, trajectory[i][0], trajectory[i][1]);
      //setTimeout(()=> {t.remove();}, 3000);
      }
    }
  }
}