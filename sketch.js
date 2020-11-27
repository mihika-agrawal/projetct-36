var dog;
var dogImage;
var hdogImage;
var foodobj;
var database;
var feedDog;
var addFood;
var foods;
var fedTime;
var lastfed;
 
function preload()
{
  dogImage= loadImage("images/dogImg.png");
  hdogImage= loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(1200, 800);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodobj= new Food();

  feedDog= createButton("Feed The Dog");
  feedDog.position(700,95);
  feedDog.mousePressed(feed);

  addFood= createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)
}


function draw() {  
 background(46,139,87);
 drawSprites();

  fill(0);
text("food left:" + foods ,250,30);
fedTime=database.ref('feedtime');
fedTime.on("value",function(data){
lastfed=data.val();
})

fill(255,255,254);
textSize(15);
if(lastfed>=12){
  text("Last Fed= "+lastfed%12+"PM",350,30);
 
} else if(lastfed==0){
  text("Last Fed= 12 AM",350,30)
}else {
  text("Last Fed= "+lastfed+"AM",350,30);
}

foodobj.display();
}

function feed(){
dog.addImage(hdogImage);

foodobj.updateFoodStock(foodobj.getFoodStock()-1)
database.ref('/').update({
foods:foodobj.getFoodStock(),
feedTime:hour()
})
}

function addFoods(){
foods++
database.ref('/').update({
  Food:foods
});
}




  


