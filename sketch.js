var ball;
var database, ballPosition, Position
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition = database.ref("ball/position")
    ballPosition.on("value", readposition, showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+10);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}
function readposition(data){
    Position = data.val()
    ball.x = Position.x
    ball.y = Position.y
}
function showerror(){
    console.log("error")

}
