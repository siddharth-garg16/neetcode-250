function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  // create empty array twice the size of original array and fill it with zero
  const ans = new Array(nums.length * 2).fill(0);

  for (let i = 0; i < n; i++) {
    // set zeroes at index 'i' and 'i+n' of ans with element at index 'i' of nums
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
}
