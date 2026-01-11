function threeSum(nums: number[]): number[][] {
  // sorting the array to remove the duplicate entries in the ans
  // it would allow us to skip pointers over the duplicate elements
  nums.sort((a, b) => a - b);
  const ans = [];

  // start i at 0
  // skip i over to the next different element to avoid duplicates
  // added i < 0 check to avoid out of bound error on first iteration
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // set j to i + 1 and k to end of array
    // use the idea that nums is now sorted to our advantage
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      // compute threesum
      const threesum = nums[i] + nums[j] + nums[k];

      if (threesum < 0) {
        // if less than 0, increment j to increase sum (nums is sorted, number at j must be small enough to drop the threesum below 0)
        j++;
      } else if (threesum > 0) {
        // if more than 0, decrement k to decrease sum (nums is sorted, number at k must be large enough to push the threesum above 0)
        k--;
      } else {
        // triplet found, push the triplet to ans
        ans.push([nums[i], nums[j], nums[k]]);
        // now increase j so it points to the next element
        j++;
        // now check if new j is similar to previous j, if so, keep incrementing j to skip duplicates
        // also make sure j is still less than k to avoid out of bound error
        // intuition here is that at previous j, threesum was 0, now if we increase j threesum will only increase because of the sorted order of nums
        // hence we don't need to move k, because it generated threesum 0 at previous j, k only needs to be reduced to make threesum equal to 0 because j is increasing
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return ans;
}
