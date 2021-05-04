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
  // foodS = database.ref('Food');
  // foodS.on("value",readstock);
}


function draw() {  
  background(255,255,255)
  drawSprites();
  //add styles here
  
    if(keyDown(UP_ARROW)){
      writeStock(5);
      dog.addImage(dog2);
     
    }
    text("food remaining: "+foodS,200,300);
}
function readstock(data){
  foodS=data.val();
  }
  
  
function writeStock(x){

  text(x,30,30);
//  e=x;
console.log("fedvc")
  database.ref('/').update({
    Food:x
  });
// text("food remaining: "+x,250,200);
}