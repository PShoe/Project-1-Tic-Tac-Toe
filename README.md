# Tic Tac Toe - General Assembly Project 1

## Summary
[Link to game](https://pshoe.github.io/Project-1-Tic-Tac-Toe/)

![](https://i.pinimg.com/736x/25/bd/b0/25bdb0454a099492bc42e4f1392e938a--a-grand-picnics.jpg)

This is a Wallace and gromit themed tic-tac-toe game.

### Approach taken

I used basic javascript, css, and html to

### Unsolved problems
#### Bugs
* Clicking outside a div on the board. When one clicks between the 9 square divs, onto the board that acts as the overall event listener, the entire app style falls apart and makes the game un-playable. This could be solved with some math in the css by reducing that space, or through javascript to be sure that nothing activates unless the event is activated on a div.
#### Improvements
*  There are major redundancies in my code currently, that should be reduced and put into various for loops. The largest example of this is the hard code to show the winning squares.
* In retrospect, I would have changed the way the win is recorded, by pushing into an array of arrays to signify the 3 columns or rows. Because I chose to add the board strings early on, it was difficult to change this structure later in development.  
