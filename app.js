
var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');
var playerOne = true;
var winner = 0;
var gameOver = false;
var tie = 0;
var player1Score = 0;
var player2Score = 0;
var boardArray = ["","","","","","","","",""];
var headerDiv = document.querySelector('header');
var submitButton = document.querySelector("#submitButton");
var modal = document.getElementById('myModal');
var btn = document.getElementById("playerNameBtn");
var span = document.getElementsByClassName("close")[0];
var winScreen = document.querySelector('.declareWinner');
var tieWin = document.querySelector('#tieWin')
var player2Win = document.querySelector('#player2Win');
var player1Win = document.querySelector('#player1Win');
var player1Name = "Player 1";
var player2Name = "Player 2";
var mainDiv = document.querySelector('main');
var player2NameText = document.querySelector('#player2NameSpan');
var player1NameText = document.querySelector('#player1NameSpan');
var resetScoreBtn = document.querySelector('#resetScoreBtn');
var indexWin = 8;

submitButton.addEventListener('click', function(){
  player1Name = document.querySelector("#player1Name").value;
  player2Name = document.querySelector("#player2Name").value;
  document.querySelector("#player1NameSpan").textContent = player1Name + ":  ";
  document.querySelector("#player2NameSpan").textContent = player2Name + ":  ";
  modal.style.display = "none";
})

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

board.addEventListener('click', function(event) {
  if (gameOver === false){
  checkSquare(event);
  markSquare(event);
  pushtoBoardArray(event);
  checkifWinner();
  showLine();
  tallyScore();
  // showWinPage();
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
      player1NameText.classList.add("currentPlayerColor");
      player2NameText.classList.remove("currentPlayerColor");
      playerOne = false;
    } else if (playerOne === false){
      event.target.classList.add("player2");
      player1NameText.classList.remove("currentPlayerColor");
      player2NameText.classList.add("currentPlayerColor");
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

//use an object here instead or array of arrays??

var wins = [row1, row2, row3, col1, col2, col3, dia1, dia2];

wins.forEach(function(element){
   if (element === "XXX") {
     winner = 1;
     console.log("Player 1 Wins");
     indexWin = wins.indexOf("XXX");
     console.log(indexWin);
     endGame();

   } else if (element === "OOO") {
     winner = 2;
     console.log("Player 2 Wins");
     indexWin = wins.indexOf("OOO");
     console.log(indexWin);
     endGame();
   }
    return [winner,indexWin];
 })
}

var showLine = function () {
  if (gameOver === true){
  var square0 = document.querySelectorAll('.square')[0];
  var square1 = document.querySelectorAll('.square')[1];
  var square2 = document.querySelectorAll('.square')[2];
  var square3 = document.querySelectorAll('.square')[3];
  var square4 = document.querySelectorAll('.square')[4];
  var square5 = document.querySelectorAll('.square')[5];
  var square6 = document.querySelectorAll('.square')[6];
  var square7 = document.querySelectorAll('.square')[7];
  var square8 = document.querySelectorAll('.square')[8];

  if (indexWin === 0){
    square0.className = 'square winningSquare pulse';
    square1.className = 'square winningSquare pulse';
    square2.className = 'square winningSquare pulse';
  } else if (indexWin === 1) {
    square3.className = 'square winningSquare pulse';
    square4.className = 'square winningSquare pulse';
    square5.className = 'square winningSquare pulse';
  } else if (indexWin === 2) {
    square6.className = 'square winningSquare pulse';
    square7.className = 'square winningSquare pulse';
    square8.className = 'square winningSquare pulse';
  } else if (indexWin === 3) {
    square0.className = 'square winningSquare pulse';
    square3.className = 'square winningSquare pulse';
    square6.className = 'square winningSquare pulse';
  } else if (indexWin === 4) {
    square1.className = 'square winningSquare pulse';
    square4.className = 'square winningSquare pulse';
    square7.className = 'square winningSquare pulse';
  } else if (indexWin === 5) {
    square2.className = 'square winningSquare pulse';
    square5.className = 'square winningSquare pulse';
    square8.className = 'square winningSquare pulse';
  } else if (indexWin === 6) {
    square0.className = 'square winningSquare pulse';
    square4.className = 'square winningSquare pulse';
    square8.className = 'square winningSquare pulse';
  } else if (indexWin === 7) {
    square2.className = 'square winningSquare pulse';
    square4.className = 'square winningSquare pulse';
    square6.className = 'square winningSquare pulse';
  }
  if (winner !== 3 ){
    var showWin =  setTimeout(showWinPage, 2000);
  } else { showWinPage();
  }
}
}


var showWinPage = function () {
  if (gameOver === true){
    winScreen.classList.remove('winScreenHide');
    mainDiv.classList.add('block');
    var winnerName = document.querySelector('.declareWinner span');
    if (winner === 3) {
      player1Win.classList.add('block');
      player2Win.classList.add('block');
      winnerName.textContent = "No one";
    } else if (winner === 2){
      player1Win.classList.add('block');
      tieWin.classList.add('block')
      winnerName.textContent = player2Name;
    } else if (winner === 1){
      player2Win.classList.add('block');
      tieWin.classList.add('block');
      winnerName.textContent = player1Name;
    }
}
}

var endGame = function () {
  if (winner !== 0){
    gameOver = true;
  }
  return gameOver;
}

var reset = function () {
  boardArray = ["","","","","","","","",""];
  gameOver = false;
  playerOne = true;
  winner = 0;
  squares.forEach(function(element){
    element.className = "square";
  })
  winScreen.classList.add('winScreenHide');
  player1Win.classList.remove('block');
  player2Win.classList.remove('block');
  tieWin.classList.remove('block');
  mainDiv.classList.remove('block');
  player1NameText.classList.remove("currentPlayerColor");
  player2NameText.classList.remove("currentPlayerColor");
}

var playAgainBtn = document.querySelector('#playAgain');
playAgainBtn.addEventListener('click',reset);

var tallyScore = function () {
  if (gameOver === true){
    if (winner === 3){
      tie ++;
      document.querySelector('#tieScore').textContent = tie;
    } else if (winner === 1) {
      player1Score ++;
      document.querySelector('#player1Score').textContent = player1Score;
    } else if (winner === 2){
      player2Score ++;
      document.querySelector('#player2Score').textContent = player2Score;
    }
  }
}

var resetScore = function () {
  tie = 0;
  player1Score = 0;
  player2Score = 0;
  document.querySelector('#player1Score').textContent = player1Score
  document.querySelector('#player2Score').textContent = player2Score;
  document.querySelector('#tieScore').textContent = tie;
}

resetScoreBtn.addEventListener('click',resetScore);
