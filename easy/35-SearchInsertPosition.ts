/**
 * Tip: Dry run for cases where element would be inserted at the very first, very last and somewhere middle
 * eg. for [1, 3, 4, 5, 7, 9, 10]
 * check: -1, 6, 15
 * it will establish relation that start needs to be returned
 */
function searchInsert(nums: number[], target: number): number {
  let start: number = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}
