//Create variables here
var database;
var dog;
var dog1;
var dog2;
var foodstock;
var foodS;
var e;
function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,800);
  dog=createSprite(250,600,30,30);
  dog.scale=0.7;
  dog.addImage(dog1);
  database=firebase.database();
 ref = database.ref("Food")
 ref.on("value",readStock)
}


function draw() {  
  background(255,255,255)
  drawSprites();
  // add styles here
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dog2);
     
    }
    text("food remaining: "+foodS,200,300);
}
function readStock(data){
  foodS=data.val();
  console.log(foodS)
}

function writeStock(x){
  if(x<0){
    x=0
  }
  else{
 x=x-1
  }
  // text(x,30,30);
//  e=x;
console.log("fedvc")
  database.ref('/').update({
    Food:x
  });
// text("food remaining: "+x,250,200);

// dog.addImage(dog1)
}