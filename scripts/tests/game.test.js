
/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn } = require("../game");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains the correct Ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

//see if the new game function resets the score
describe ("new game works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = [1, 2, 3];
        game.currentGame = [1, 2, 3];
        document.getElementById("score").innerText = "42";//set the score on the DOM to 42 to see if it will reset to 0 by newGame
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    // test("should clear the computer sequence array", () => {
    //     expect(game.currentGame.length).toBe(0);
    // });
    //replaced the above with the below
    test("should be one element in the computer's array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});
