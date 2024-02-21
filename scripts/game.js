let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0; //set the game score to reset to zero
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function showScore() {
   document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) { //id circ
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() *4))]);
/*
We're going to push onto  the computer game sequence,  
we're going to go to our game.choices  key, which of course contains our four values,
the IDs of our buttons. And then  we're going to use the math.random library  
to generate a random number between zero and  three. We're going to use that as the index  
of our choices array and then the resulting  choice is pushed onto the current game array.
*/
    //showTurns();
}

module.exports = {game, newGame, showScore, addTurn, lightsOn};