
// until there is a winner continue this loop (a while loop?)

//  player1 takes turn
//  store data of that square
// fill the square with the class of X or O
// switch player

// player 2 takes turn
// store data of that square
// fill the square with the class of X or O
// switch player


var board = document.querySelector('.board');

var playerOne = true;

board.addEventListener('click', function(event) {
  checkSquare(event);
  markSquare(event);
  pushtoBoardArray(event);
  checkifWinner();
  checkNoWinner();
  // declareResult();
})

var checkSquare = function (event) {
  if (event.target.classList.contains("player1") === false && event.target.classList.contains("player2") === false){
    return true;
  }
}

var markSquare = function (event) {
  if (checkSquare(event) === true){
    if ( playerOne === true ){
        event.target.classList.add("player1");
        playerOne = false;
    } else if (playerOne === false){
        event.target.classList.add("player2");
        playerOne = true;
    }
  }
}

boardArray =
["","","",
"","","",
"","",""];

var pushtoBoardArray = function (event) {
var squareToPush = event.target.getAttribute('id');
  console.log(squareToPush);
  if (playerOne === false){
    boardArray[squareToPush] = 'X';
  } else if (playerOne === true){
    boardArray[squareToPush] = 'O';
  }
  };

var winner = 0;
var checkifWinner = function () {

var row1 = boardArray[0]+boardArray[1]+boardArray[2];
var row2 = boardArray[3]+boardArray[4]+boardArray[5];
var row3 = boardArray[6]+boardArray[7]+boardArray[8];
var col1 = boardArray[0]+boardArray[3]+boardArray[6];
var col2 = boardArray[1]+boardArray[4]+boardArray[7];
var col3 = boardArray[2]+boardArray[5]+boardArray[8];
var dia1 = boardArray[0]+boardArray[4]+boardArray[8];
var dia2 = boardArray[2]+boardArray[4]+boardArray[6];

var wins = [row1, row2, row3, col1, col2, col3, dia1, dia2];

wins.forEach(function(element){
   if (element === "XXX") {
     winner = 1;
     console.log("Player 1 Wins");
    //  endGame();
   } else if (element === "OOO") {
     winner = 2;
     console.log("Player 2 Wins")
    //  endGame();
   }
    return winner;
 })
}

var checkNoWinner = function () {
  if (boardArray.indexOf("") === -1 && winner === 0) {
    console.log("there is no winner");
  }
}

// var declareResult = function () {
//
// }
//
// var endGame = function () {
//
// }
