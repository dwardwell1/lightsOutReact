
  function createBoard() {
    let initialBoard = [];
    // create array-of-arrays of true/false values
    for (let i = 0; i < 6; i++) {for (let j = 0; j < 6; j++) {
      initialBoard.push(Math.random() < .5);
    }
    return initialBoard;
  }}