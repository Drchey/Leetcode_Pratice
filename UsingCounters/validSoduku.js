function isValidSudoku(board){

    // Check Rows 
    for(let i =0; i < 9 ;i++){
        const rowMap = {}
        for(let j = 0; j < 9; j++){
            if(board[i][j] === ".") continue;
            if(rowMap[board[i][j]]) return false
            rowMap[board[i][j]] = 1
        }
    }

     // Check Cols 
     for(let j =0; j < 9 ;j++){
        const colMap = {}
        for(let i = 0; i < 9; i++){
            if(board[i][j] === ".") continue;
            if(colMap[board[i][j]]) return false
            colMap[board[i][j]] = 1
        }
    }

    for (let block = 0; block < 9; block++) {
        const subGridSet = {};
        const rowStart = Math.floor(block / 3) * 3;
        const colStart = (block % 3) * 3;
        for (let i = rowStart; i < rowStart + 3; i++) {
          for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] === ".") continue; // Ignore empty cells
            if (subGridSet[board[i][j]]) return false;
            subGridSet[board[i][j]] = 1;
          }
        }
      }

      return true
}