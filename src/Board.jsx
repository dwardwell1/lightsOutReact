import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());
  const [winner, setWinner] = useState(false);

 

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // create array-of-arrays of true/false values
   for(let i = 0; i < nrows; i++){
      initialBoard.push(new Array (ncols));
      for(let j = 0; j < ncols; j++){
          initialBoard[i][j] = Math.random() < chanceLightStartsOn}}
    return initialBoard;
    }
   

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for(let i = 0; i < nrows; i++){
      for(let j = 0; j < ncols; j++){
        if(board[i][j] == true){
          console.log("no winner")
          return false;
        }
      }
    } return (setWinner(true), console.log("winner!"))
  }

  function flipCellsAroundMe(coord) {
    setBoard(board => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let boardCopy = [...board]
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      hasWon()
      
      // TODO: return the copy
      return boardCopy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  return(
    <div className="Board">
      {winner ? <div className="Board-winner"><h1>Winnneerrrr</h1></div> :
      <table className="BoardTable">
        <tbody>
          {board.map((row, i) =>
            <tr key={i}>
              {row.map((cell, j) =>
                <Cell
                  key={`${i}-${j}`}
                  isLit={cell}
                  flipCellsAroundMe={() => flipCellsAroundMe(`${i}-${j}`)}
                />
              )}
            </tr>
          )}
        </tbody>
      </table>
      }
      
    </div>
  );

  
 
  // TODO
}

export default Board;


