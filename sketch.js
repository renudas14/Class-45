var GameState=1
var game,form;
var gender,Name;
var mainC;

function preload(){
  Herione= loadImage("Images/Herion.png");
  Hero=loadImage("Images/Hero.png");
  //gFriends1=loadImage("Images/GFriend 1.png");
  //gFriends2=loadImage("Images/Gfreind 2 .png");
  //gFriends3=loadImage("Images/GFriend 3.png");
  //gFriends4=loadImage("Images/GFriend 4.png");
  //Friends1=loadImage("Images/fRIEND 1.png");
  //Friends2=loadImage("Images/fRIEND 2.png");
  //Friends3=loadImage("Images/Friend 3.png");
  //Friends4=loadImage("Images/Friend 4.png");
  //Friends5=loadImage("Images/Friend 5.png");
  //Obstacle=loadImage("Images/Obstacle.png")

}

function setup(){
  createCanvas (400,400);
  game= new Game()
  game.start()
  mainC=createSprite(200,200,10,30);
  mainC.visible=false

}

function draw(){
  if(GameState===2){
    console.log(gender)
    mainC.visible=true
    mainC.scale=0.1
    spanFriend();
    if(gender==="male"||gender==="Male"||gender==="M"){
      mainC.addImage(Hero);
    }
    if(gender==="female"||gender==="Female"||gender==="F"){
      mainC.addImage(Herione)
    }
  }

  drawSprites();
}

function spanFriend(){
  if(frameCount%100===0){
   friends=createSprite(Math.round(random(30,370)),0)
   number=Math.round(random(1,9));
   switch(number){
     case 1:friends.addImage(gFriends1)
            break;
    }
  }
}