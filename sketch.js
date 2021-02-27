var canvas;
var music;

var surface1,surface2,surface3,surface4;
var box;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,500,175,10);
    surface1.shapeColor="red";

    surface2 = createSprite(300,500,175,10);
    surface2.shapeColor="green";

    surface3 = createSprite(500,500,175,10);
    surface3.shapeColor="orange";

    surface4 = createSprite(700,500,175,10);
    surface4.shapeColor="yellow";
    //create box sprite and give velocity
    box = createSprite(random(20,750),100,20,20);
    box.shapeColor="white";
    box.velocityY = 4
    

}

function draw() {
    background(0);
    //create edgeSprite
    edges=createEdgeSprites();

    box.bounceOff(edges)

    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="red";
        box.velocityX = -4;
        music.loop();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="green";
        box.velocityX = 4;
        
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="yellow";
        box.velocityX = -4;
        
    }
}