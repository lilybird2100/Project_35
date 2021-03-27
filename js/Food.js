class Milks {
    constructor(){
        var foodStock, lastFed;
    
        this.milk = loadImage('images/Milk.png'); 
    }
    

    getFoodStock(){
    }

    updateFoodStock(){
        var count = foodS + 1
        database.ref('/').update({Food: count});
    }

    deductFoodStock(){
    }

    display(x, y){      
      /*  if(foodS > 1 ){
            MILK = createSprite(x, y, 20, 20); 
            MILK.addImage('milk',milk);  
        }else{
            MILK.visible = false; 
        }*/
        imageMode(CENTER);
        for(var i =0; i<foodS; i=i+1){
            if (i%5 ==0){
                x=60;
                y = y+50;
            }
            image(this.milk, x, y, 50, 50)
            x= x+30;
        }

    }
}