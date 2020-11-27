class Food{

    constructor(){
    this.foodstock=null;
    this.lastFed= null; 
    this.image = loadImage("images/Milk.png");
} 
getFoodStock(){
    this.foodstock= database.ref('food');
    this.foodstock.on("value",readstock);
}
updateFoodStock(data){
    foods=data.val();

}

deductFood(){
if (foods<=0){
    foods=0;
}else{
    foods=foods-1;
}
database.ref('/').update({
    Food:foods
    })

}


display(){
 var x=80,y=100;

 imageMode(CENTER);
 image(this.image,720,220,70,70);
 if(this.foodStock!=0){
 for(var i=0; i <this.foodStock;i++){
if(i%10){
    x=80;
    y=y+50}
    image(this.image,x,y,50,50);
    x=x+30;
}

}
}
}

