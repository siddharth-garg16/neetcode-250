function search(nums: number[], target: number): number {
  let start: number = 0,
    end: number = nums.length;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
