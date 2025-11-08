// array is rtotated in such a way that it two sorted array in t.
// catch is to know
// - if left and mid lies in the same sorted array
// or - if mid and right lies in the same sorted array
function search(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // e.g. [4, 5, 6, 7, 0, 1, 2], target = 0
    // left and mid are the part of same sorted array i.e. 4 and 7.
    // elements that are bigger than 4 and smaller than 7 must lie between them
    // else that element must lie in the RHS of mid i.e. 7
    if (nums[left] <= nums[mid]) {
      if (target < nums[left] || target > nums[mid]) left = mid + 1;
      else right = mid - 1;
    }
    // e.g. [6, 7, 0, 1, 2, 4, 5], target = 0
    // mid and right are the part of same sorted array i.e. 1 and 5.
    // elements that are bigger than 1 and smaller than 5 must lie between them
    // else that element must lie in the LHS of mid i.e. 1
    else {
      if (target < nums[mid] || target > nums[right]) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
}
