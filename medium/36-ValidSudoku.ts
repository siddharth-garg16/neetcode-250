function isValidSudoku(board: string[][]): boolean {
  // idea is to use hashsets for all cases i.e. rows, columns and squares
  // rows
  for (let r = 0; r < 9; r++) {
    const seen = new Set();
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;
      if (seen.has(board[r][c])) return false;
      seen.add(board[r][c]);
    }
  }

  // cols
  for (let c = 0; c < 9; c++) {
    let seen = new Set();
    for (let r = 0; r < 9; r++) {
      if (board[r][c] === ".") continue;
      if (seen.has(board[r][c])) return false;
      seen.add(board[r][c]);
    }
  }

  // squares
  // idea here is that we'll mark each of the 9 squares with a number [0, 1,.....8]
  // with i<=2 and j<=2 to loop over each square
  // values of i and j will be mapped to original board's indices by using the number that was assigned to the square
  for (let s = 0; s < 9; s++) {
    let seen = new Set();
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        // compute row and col that will be mapped to original board
        // crackhead relation
        // r = (s//3)*3 + i;
        // c = (s%3)*3 + j;
        const r = Math.floor(s / 3) * 3 + i;
        const c = (s % 3) * 3 + j;
        if (board[r][c] === ".") continue;
        if (seen.has(board[r][c])) return false;
        seen.add(board[r][c]);
      }
    }
  }

  return true;
}
