var player,game,form, gameState = 0
var database
var playerCount

function setup(){
    createCanvas(500,500);
    
    database=firebase.database()
 game=new Game()
 game.getState()
 game.start()
    

}

function draw(){
   
}


