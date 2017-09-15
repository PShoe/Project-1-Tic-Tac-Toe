# Tic Tac Toe - General Assembly Project 1

## Summary
[Link to game](https://pshoe.github.io/Project-1-Tic-Tac-Toe/)

![](https://i.pinimg.com/736x/25/bd/b0/25bdb0454a099492bc42e4f1392e938a--a-grand-picnics.jpg)

This is a Wallace and gromit themed tic-tac-toe game.

### Approach taken

I used basic javascript, css, and html to create an interactive game. Each time a user clicks on a square, a string of either X or O is pushed into an array of 9. From this array, I identify if a win occurs with either XXX or OOO.

### Simple features included
* Score count
* CSS animations - pulse
* Customize player names
* Reset score button

### Unsolved problems
#### Bugs
* Malfunctions occur when one clicks outside a div on the board in the small gaps between the tic tac toe squares. This bug can render the game un-playable. The board acts as one overall event listener. This issue could be solved with either some precise math and spacing in the css file, or through javascript to be sure that nothing activates unless the event is activated on a div event target.
#### Improvements
*  There are some major redundancies in my code. Most of this bulky code could be reduced and put into various loops. The most cumbersome example is the hard code to show the winning squares.
* In retrospect, I would have changed the way the win is recorded into my data. My goal would be to push each square's data into an array of arrays to signify the 3 columns or rows. Because I chose to add the board strings early on, it was difficult to change this structure later in development.
