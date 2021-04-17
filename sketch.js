var snowBg = "snow3.jpg";
var boy,boy_img;
var  snow1=[]

function preLoad(){
  snowBg =loadImage("snow3.jpg");
  boy_img = loadImage("boy.png");
}


function setup() {
  createCanvas(800,400);
  boy=createSprite(400, 200, 50, 50);
 // boy.addImage("boy_img");
 for(var j =0; j <=random(width/2-10,width/2+10); j=j+10)
  {
  if(frameCount%60===0){
snow1.push(new Snow(random(width/2-10,width/2+10),10,10))
  }} 

 
   
}

function draw() {
  background(snowBg);  
  drawSprites();
  for (var j = 0; j < particles.length; j++) {
   snow1[j].display(); }  
}