//Create variables here
var  dog1, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
 happyDog=loadImage("dogImg1.png");	
}

function setup() {
  createCanvas(700, 700);
   database=firebase.database();
 dog =createSprite(100,200,20,20);
  dog.addImage(dog1);
  dog.scale=0.25;
  foodStock=database.ref("Food");
foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  textSize(20);
  fill("red");
  stroke(4);
  text("NOTE:Press UP_ARROW key to feed the dog", 250, 250)
  //add styles here

}

function readStock(data){
    foodS=data.val();
}

function writeStock(x){
if (x<=0){
  x=0;
} else{
  x=x-1;

}
 database.ref("/").update({
   Food:x
 })
}