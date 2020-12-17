var database,foodStock;
var dog,dogImg,doghappy;
var foodS,foodStock,lastFed;
var fedDog,addFood;
var FoodImg;

function preload(){

  dogHappy=loadImage("images/dogImg1.png")  
  dogImg=loadImage("images/dogImg.png")


}


function setup() {

  createCanvas(800, 500)

foodStockRef=database.ref('Food')
foodStockRef.on("value",readStock);
dog=createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale=0.5

addFood=createButton("Add Food")
addFood.postion
addFood.mousePressed(addFoods)


food=new Food(100,200)

}







function draw() { 
  
  


  fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){
lastFed=data.val()
fed=createButton("feed the dog")
fed.position(700,95)
fed.mousePressed(fedDog)


  
});

  if(addFood(pressed)){
    x=x+1
  }
  if(feedDog(pressed)){
    x=x-1
  }
  

background(46,139,87)
fill("red")
textSize(20)
text("Food: "+foodStock,250,50)

food.display()

fill(255,255,254);
textSize(15)
if(fedDog>=12){
  text("lastFed :"+lastFed%12+"PM",350,30);
}else if(lastFed==0){
text("Last Feed: 12AM",350,30)
}else{
text("Last Feed:"+"AM",350,30)
}








  drawSprites();
}
function readStock(data){
  foodStock=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}else{
x=x-1;

}

  database.ref('/').update({
    Food:x
  })
}
function feedDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
 FoodS++
 database.ref ('/').update({
   Food:foodS
 })
}



