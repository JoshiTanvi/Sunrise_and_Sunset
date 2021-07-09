const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
        }
    Engine.update(engine);
    textSize(30);
    text("Time:"+ hour,50,100);


}

async function getBackgroundImg(){
    var response=  await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJSON= await response.json();
    var date = responseJSON.datetime;
    hour = date.slice(11,13);
    console.log(hour);
    
    if(hour>=04 && hour<=06){
        backgroundImg=loadImage("sunrise1.png");
    }else if (hour>=07 && hour<=08){
        backgroundImg=loadImage("sunrise2.png");
    }else if (hour>=9 && hour<=10){
        backgroundImg=loadImage("sunrise3.png");
    }else if (hour>=11 && hour<=12){
        backgroundImg=loadImage("sunrise4.png");
    }else if (hour>=13 && hour<=14){
        backgroundImg=loadImage("sunrise5.png");
    }else if (hour>=15 && hour<=16){
        backgroundImg=loadImage("sunrise6.png");
    }else if (hour>=17 && hour<=18){
        backgroundImg=loadImage("sunrise7.png");
    }else if (hour>=19 && hour<=20){
        backgroundImg=loadImage("sunrise8.png");
    }else if (hour>=21 ){
        backgroundImg=loadImage("sunrise9.png");
    }else if (hour<=22){
        backgroundImg=loadImage("sunrise10.png");
    }else if (hour<=23){
        backgroundImg=loadImage("sunrise11.png");
    }else{
        backgroundImg=loadImage("sunrise12.png")

    }
    

}
