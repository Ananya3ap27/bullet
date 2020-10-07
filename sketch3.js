var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;
var speed,weight,thickness,damage;
function setup(){
    createCanvas(500,500);

    bullet1=createSprite(50,100,20,20);
    bullet1.velocityX=40;
    bullet1.weight=random(30,50);
    bullet1.speed=bullet1.velocityX;
    bullet2=createSprite(50,200,20,20);
    bullet2.velocityX=40;
    bullet2.speed=bullet2.velocityX;
    bullet2.weight=random(30,50);
    bullet3=createSprite(50,300,20,20);
    bullet3.velocityX=40;
    bullet3.speed=bullet3.velocityX;
    bullet3.weight=random(30,50);
    bullet4=createSprite(50,400,20,20);
    bullet4.velocityX=40;
    bullet4.speed=bullet4.velocityX;
    bullet4.weight=random(30,50);

    wall1=createSprite(470,100,random(10,30),30);
    wall1.thickness=wall1.width;
    wall2=createSprite(470,200,random(10,30),30);
    wall2.thickness=wall2.width;
    wall3=createSprite(470,300,random(10,30),30);
    wall3.thickness=wall3.width;
    wall4=createSprite(470,400,random(10,30),30);
    wall4.thickness=wall4.width;
}
function draw(){
    background("black");

    if(collide(wall1,bullet1)){
        bullet1.velocityX=0;
        bullet1.x=wall1.x-wall1.width/2;
        damages(bullet1,wall1);
    }
    if(collide(wall2,bullet2)){
        bullet2.velocityX=0;
        bullet2.x=wall2.x-wall2.width/2;
        damages(bullet2,wall2);
    }
    if(collide(wall3,bullet3)){
        bullet3.velocityX=0;
        bullet3.x=wall3.x-wall3.width/2;
        damages(bullet3,wall3);
    }
    if(collide(wall4,bullet4)){
        bullet4.velocityX=0;
        bullet4.x=wall4.x-wall4.width/2;
        damages(bullet4,wall4);
    }
    drawSprites();
}
function damages(bullet,wall){
    damage=(0.5*bullet.weight*bullet.speed*bullet.speed)/(wall.thickness*wall.thickness*wall.thickness);

    if(damage>15){
        wall.shapeColor="red";
    }
    if(damage>=10&&damage<15){
        wall.shapeColor="yellow";
    }
    if(damage<10){
        wall.shapeColor="green"
    }

}
function collide(wall,bullet){
    if(wall.x-bullet.x<wall.width/2+bullet.width/2){
        return true;
    }else{
        return false;
    }


}