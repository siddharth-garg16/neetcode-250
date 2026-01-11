/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // remove cycles from k
  // i.e. an array of length 7 rotated by 10 is the same as rotated by 3
  const effectiveRotations = k % nums.length;
  if (effectiveRotations === 0) return;

  // fully reverse the array first
  // nums.reverse();
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  // e.g. [1, 2, 3, 4, 5, 6, 7], k = 3
  // after full reverse: [7, 6, 5, 4, 3, 2, 1]
  // now reverse first k elements: [5, 6, 7, 4, 3, 2, 1] i.e. from [0, k-1]
  // finally reverse the rest: [5, 6, 7, 1, 2, 3, 4] i.e. from [k, length-1]

  limitBoundReverse(nums, 0, effectiveRotations - 1);
  limitBoundReverse(nums, effectiveRotations, nums.length - 1);
}

// helper to reverse a portion of the array from start to end indices
function limitBoundReverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
