//Create variables here
var database;
var dog;
var dog1;
var dog2;
var foodstock;
function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg.png");
}

function setup() {
	createCanvas(500,800);
  dog=createSprite(250,600,30,30);
  dog.addImage(dog1)
  database=firebase.database();
  foodstock = database.ref('virtualpet/food');
  foodstock.on("value",readstock);
}


function draw() {  

  drawSprites();
  //add styles here
  if(keyWentDown(key_down)){
    writestock(foodS);
    dog.addImage(dog2);
  }
}
function readstock(data){
foodS=data.val();
}

function writestock(x){
  database.ref('/').update({food:x});
}