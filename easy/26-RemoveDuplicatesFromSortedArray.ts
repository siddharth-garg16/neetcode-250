function removeDuplicates(nums: number[]): number {
  // two pointer approach
  // make l point to 0 and r to 1
  // l will be used to compute return value, hence we'll make sure l always point to the last non-duplicate value index
  let l = 0,
    r = 1;

  // if nums only had one element, r already out of bound
  // simply return l+1
  while (r < nums.length) {
    // if nums[l] equals to nums[r]
    // keep increasing r until we found a mismatch
    if (nums[l] === nums[r]) {
      r++;
    } else {
      // once we have found the mismatch we need to check different cases
      // if l and r are adjacent to each other (i.e. r - l === 1), we don't need to swap since there no duplicates to remove

      // but if they are not adjacent then it means r was able to move faster than l because elements between l and r were same up until we reched the mismatched
      // i.e. elements from index [l, r-1] are all same.
      // only need to assign element at l+1 with element at r
      // increase both l and r
      // it will make sure that first mismatch was moved to front
      // and l now points at the last non-duplicate value
      const diff = r - l;
      if (diff > 1) {
        nums[l + 1] = nums[r];
      }
      l++;
      r++;
    }
  }

  return l + 1;
}
