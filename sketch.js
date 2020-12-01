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
  foodS = database.ref('food');
  foodS.on("value",readstock);
}


function draw() {  

  drawSprites();
  //add styles here
  
    if(keyWentDown(UP_ARROW)){
      writestock(foodS);
      dog.addImage(dog2);
     
    }
    text("food remaining: "+foodS,200,300);
}
function readstock(data){
  foodS=data.val();
  }
  
  
function writestock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
//  e=x;
  database.ref('/').update({food:x});
// text("food remaining: "+x,250,200);
}