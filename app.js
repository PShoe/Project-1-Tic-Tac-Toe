var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');
var playerOne = true;
var winner = 0;
tie = 0;
gameOver = false;
player1Score = 0;
player2Score = 0;
boardArray = ["","","","","","","","",""];
var headerDiv = document.querySelector('header');

board.addEventListener('click', function(event) {
  if (gameOver === false){
  checkSquare(event);
  markSquare(event);
  pushtoBoardArray(event);
  checkifWinner();
  // declareResult();
  tallyScore();
}
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

var pushtoBoardArray = function (event) {
var squareToPush = event.target.getAttribute('id');
  console.log(squareToPush);
  if (playerOne === false){
    boardArray[squareToPush] = 'X';
  } else if (playerOne === true){
    boardArray[squareToPush] = 'O';
  }
  };

var checkifWinner = function () {

if (boardArray.indexOf("") === -1 && winner === 0) {
  console.log("No one won this game");
  winner = 3;
  endGame();
}

var row1 = boardArray[0]+boardArray[1]+boardArray[2];
var row2 = boardArray[3]+boardArray[4]+boardArray[5];
var row3 = boardArray[6]+boardArray[7]+boardArray[8];
var col1 = boardArray[0]+boardArray[3]+boardArray[6];
var col2 = boardArray[1]+boardArray[4]+boardArray[7];
var col3 = boardArray[2]+boardArray[5]+boardArray[8];
var dia1 = boardArray[0]+boardArray[4]+boardArray[8];
var dia2 = boardArray[2]+boardArray[4]+boardArray[6];

//use and object here instead??

var wins = [row1, row2, row3, col1, col2, col3, dia1, dia2];

wins.forEach(function(element){
   if (element === "XXX") {
     winner = 1;
     console.log("Player 1 Wins");
     var indexWin = wins.indexOf("XXX");
     console.log(wins[indexWin]);
     console.log(indexWin);
     endGame();

   } else if (element === "OOO") {
     winner = 2;
     console.log("Player 2 Wins");
     var indexWin = wins.indexOf("OOO");
     console.log(indexWin);
     endGame();
   }
    return winner;
 })
}

// var showLine = function() {
// }

var endGame = function () {
  if (winner !== 0){
    gameOver = true;
  }
  return gameOver;
}

var reset = function () {
  squares.forEach(function(element){
    element.classList.remove('player1');
    element.classList.remove('player2');
    boardArray = ["","","","","","","","",""];
    gameOver = false;
  })
}
var playAgainBtn = document.querySelector('#playAgain');
playAgainBtn.addEventListener('click',reset);

var tallyScore = function () {
  if (gameOver === true){
    if (winner === 3){
      tie ++;
      document.querySelector('h3 span').textContent = tie;
    } else if (winner === 1) {
      player1Score ++;
      document.querySelector('.player1Score span').textContent = player1Score;
    } else if (winner === 2){
      player2Score ++;
      document.querySelector('.player2Score span').textContent = player2Score;
    }
  }
}

var submitButton = document.querySelector("#submitButton");

submitButton.addEventListener('click', function(){
  var player1Name = document.querySelector("#player1Name").value;
  var player2Name = document.querySelector("#player2Name").value;
  document.querySelector(".player1Score").textContent = player1Name + ":  ";
  document.querySelector(".player2Score").textContent = player2Name + ":  ";
  modal.style.display = "none";
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
