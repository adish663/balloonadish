var database
var balloon

function preload() {
  bg = loadImage ("Hot Air Ballon-01.png")
  balloonImg = loadImage ("Hot Air Ballon-02.png")
}
function setup() {
database = firebase.database();
  createCanvas(500,500);
  ballon = createSprite(400, 200, 50, 50);
  ballon.addImage(balloonImg)
  ballon.scale  = 0.3
  var balloonPosition = database.ref('balloon/height')
  balloonPosition.on("value",readPosition);

}

function draw() {

  background(bg); 
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
   else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    


  }
   else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
  drawSprites();

}
function readPosition (data){

height = data.val()
balloon.x = height.x;
balloon.y = height.y;
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    x:height.x+x,
    y :height.y+y
  })

}