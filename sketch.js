//Create variables here
var dog, happyDog, database, foodS, foodStock, database, dogImg, dogImg1, milk; 
var feedButton, getFoodButton, fedTime, LastFedTime, bottle, time;
var MILK;
function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg2.png');
  dogImg1 = loadImage('images/dogImg1.png'); 
  milk = loadImage('images/Milk.png'); 
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(350,250,20,20); 
  dog.addImage('dog', dogImg); 

  feedButton = createButton("Feed");
  feedButton.position(200,175);
  
  getFoodButton = createButton("Get Food")
  getFoodButton.position(200,200); 

  feedButton.mousePressed(()=>{
    if(foodS > 0){
      foodS = foodS-1; 
      writeStock(foodS); 
     dog.addImage('dog', dogImg1);
     database.ref('/').update({
      FeedTime:hour() 
     })
     dog.x= 200
    }
    if(foodS <= 0){
      z=0; 
      dog.addImage('dog', dogImg); 
      dog.x=350;
     }
  })

  getFoodButton.mousePressed(()=>{
    if(foodS<=24){
      bottle.updateFoodStock();
    }
    dog.addImage('dog', dogImg);
    dog.x=350;
  })

  database = firebase.database(); 

  ReadStock = database.ref('Food');
  ReadStock.on('value', readStock);
  
  bottle = new Milks(); 

  //MILK = createSprite(100, 200, 20, 20); 
}


function draw() {  
  background(46,139,87);
  //add styles here
  textSize(20);
  fill(255,255,255);
  text("Food Stock: " + foodS, 175,100);
  textSize(15);
  text("Note: press up arrow to feed milk", 150, 450); 

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
    LastFedTime=data.val();
  });
  text("Last Fed: " + LastFedTime, 175, 50);
  

  
  

  bottle.display(50,100);
  drawSprites();
}


function readStock(data){
    foodS = data.val();
}
function writeStock(z){
  database.ref('/').update({
    Food:z
  })
}
