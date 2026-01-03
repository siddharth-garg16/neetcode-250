/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

/**
    Utility function to perform target search in order agnostic way
  */
function orderAgnosticBS(
  start: number,
  end: number,
  arr: MountainArray,
  target: number
): number {
  let isAsc = arr.get(start) > arr.get(end) ? false : true;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr.get(mid) === target) return mid;
    if (isAsc) {
      if (arr.get(mid) < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr.get(mid) < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}

/**
    Find the peak element first using binary search principle
    then do split binary search for target element => LHS being from [0, peakIndex] and RHX being [peakIndex + 1, arr.length - 1]
 */
function findInMountainArray(target: number, mountainArr: MountainArray) {
  let left = 0,
    right = mountainArr.length() - 1;

  while (left < right) {
    const m = Math.floor((left + right) / 2);
    if (mountainArr.get(m) < mountainArr.get(m + 1)) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  // binary search from [0, peakIndex]
  let leftSpace = orderAgnosticBS(0, left, mountainArr, target);
  // binary search from [peakIndex+1, end]
  let rightSpace = orderAgnosticBS(
    left + 1,
    mountainArr.length() - 1,
    mountainArr,
    target
  );

  // if found in LHS return that because it is smaller index, else if found in RHS return that else -1
  if (leftSpace !== -1) return leftSpace;
  else if (rightSpace !== -1) return rightSpace;
  else return -1;
}
