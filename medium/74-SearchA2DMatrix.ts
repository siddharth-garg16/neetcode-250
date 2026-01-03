// Initial binary search should be done vertically (to figure out the rows) => log(m)
// then binary search on the row that potential contains the target element =. log(n)
// hence, log(m) + log(n) = log(m + n)

function searchMatrix(matrix: number[][], target: number): boolean {
  const rows: number = matrix.length;
  const columns: number = matrix[0].length;

  // doing binary search on rows of the input matrix (using index)
  let top: number = 0,
    bottom: number = rows - 1;
  let targetRow: number = -1;

  while (top <= bottom) {
    const mid = Math.floor((top + bottom) / 2);
    // for each mid row check the first and last element of the row (if either is equal to taregt, taregt exists and return true)
    // if target is smaller than first element then we know that element potentially lie in the rows ahead of the current mid row
    // if target is greater than the last element then we know that element potentially lie in the rows that are behind the current mid row
    // else block simply means that (target > first and target < last) => it potentially lie in the mid row itself
    if (matrix[mid][0] === target || matrix[mid][columns - 1] === target) {
      return true;
    } else if (matrix[mid][0] > target) {
      bottom = mid - 1;
    } else if (matrix[mid][columns - 1] < target) {
      top = mid + 1;
    } else {
      targetRow = mid;
      break;
    }
  }

  // if target row was never changed, target is either smaller than the smallest element of the array or greater than the largest element of the array
  // i.e. it doesn't exist in the array
  if (targetRow === -1) return false;

  // just do the simple binary search in the targetRow
  // if found return true
  // else final return block will return false, as it was not found in the row
  let left: number = 0,
    right: number = columns - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const lookUpElement = matrix[targetRow][mid];
    if (lookUpElement === target) {
      return true;
    } else if (lookUpElement > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
