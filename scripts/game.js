let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
    lastButton: "",
    turnInProgress: false,
}

function newGame() {
    game.score = 0; //set the game score to reset to zero
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
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

function showTurns () {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
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
    showTurns();
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert ("Wrong Move!");
        newGame();
    }
}

module.exports = {game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn};