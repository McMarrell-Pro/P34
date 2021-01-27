//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  foodStock=database.ref('Ref');
  foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87);
  drawSprites();
  textSize(15);
  fill("white");
  text("Note: Press down Up Arrow to feed the dog!",05,50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  //add styles here


}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })

}
