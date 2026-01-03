class NumMatrix {
  sumMat: number[][];
  // if matrix if m*n, make a new matrix (m+1)*(n+1)
  // we'll treat each element as the right bottom corner of the rectangle (store prefix sum)
  // and assume the top left of the matrix itself as the top for that rectangle
  constructor(matrix: number[][]) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    // zero filled (m+1)*(n+1) matrix
    this.sumMat = Array.from({ length: ROWS + 1 }, () =>
      Array(COLS + 1).fill(0)
    );
    // set values from original matrix
    /**
    CONVERTS:
            [
            [ 3, 0, 1, 4, 2 ],
            [ 5, 6, 3, 2, 1 ],
            [ 1, 2, 0, 1, 5 ],
            [ 4, 1, 0, 1, 7 ],
            [ 1, 0, 3, 0, 5 ]
            ]

    INTO:
            [
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 3, 0, 1, 4, 2 ],
            [ 0, 5, 6, 3, 2, 1 ],
            [ 0, 1, 2, 0, 1, 5 ],
            [ 0, 4, 1, 0, 1, 7 ],
            [ 0, 1, 0, 3, 0, 5 ]
            ]
     */
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        this.sumMat[r + 1][c + 1] = matrix[r][c];
      }
    }
    // after the values are set compute the prefix sum of the rectangle with assumption
    // that element at index [0][0] is the top left and current elemn=ent [i][j] is the bottom right
    /**
    FINAL sumMat:
            [
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 3, 3, 4, 8, 10 ],
            [ 0, 8, 14, 18, 24, 27 ],
            [ 0, 9, 17, 21, 28, 36 ],
            [ 0, 13, 22, 26, 34, 49 ],
            [ 0, 14, 23, 30, 38, 58 ]
            ]
     */
    for (let r = 1; r < ROWS + 1; r++) {
      let rowPrefix = 0;
      for (let c = 1; c < COLS + 1; c++) {
        rowPrefix += this.sumMat[r][c];
        this.sumMat[r][c] = rowPrefix + this.sumMat[r - 1][c];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    // since sumMat is larger by 1 in both rows and columns
    // [i, j] in matrix is [i+1, j+1] in sumMat
    // hence increase by one
    // point at top left of rectangle
    row1++;
    col1++;
    // point at bottom right of rectangle
    row2++;
    col2++;

    // [
    //   [0DR, 0, 0, 0, 0, 0PA],
    //   [0, 3T, 3, 4, 8, 10],
    //   [0, 8, 14, 18, 24, 27],
    //   [0, 9, 17, 21, 28, 36],
    //   [0PL, 13, 22, 26, 34B, 49],
    //   [0, 14, 23, 30, 38, 58],
    // ];

    // assume we need to find the sum for point 3T and 34B
    // we need to remove the sum at 0PA and 0Pl as these are not required
    // but also subtracted 0DR twice, so need to add it once to counter balance it

    // use bottom right pointer to get indices for PA and PL
    const prefixSumAtRightBottom = this.sumMat[row2][col2];
    const prefixSumAbove = this.sumMat[row1 - 1][col2]; // will point to the point that has extra prefix sum from above
    const prefixSumLeft = this.sumMat[row2][col1 - 1]; // will point to the point that has extra prefix sum from the left
    const doubleReducedPrefix = this.sumMat[row1 - 1][col1 - 1]; // point to the prefix that was subtracted twice

    return (
      prefixSumAtRightBottom -
      prefixSumAbove -
      prefixSumLeft +
      doubleReducedPrefix
    );
  }
}
