/**
 * Catch is that array is split into two different sorted array
 * we need to find out that which two of left, right and mid are the part of same sorted array
 */
function findMin(nums: number[]): number {
  let left: number = 0,
    right: number = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // if element at mid is larger than right, we know the sorted array with smaller values is on RHS
    // else on LHS
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // didn't do (mid - 1) because element at mid could be the smallest as well in this case
      right = mid;
    }
  }
  return nums[right];
}
