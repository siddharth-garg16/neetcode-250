function removeElement(nums: number[], val: number): number {
  // set k as zero
  // it will used to set mismatch values at the start of the array
  let k = 0;

  // go through the array
  for (let i = 0; i < nums.length; i++) {
    // if the current element is not equal to val, then it needs to be set at the start of the array set it at 'k' (acts as base slow pointer to the for loop)
    // if it matches just let loop go through until a mismatch is found
    // set the mismatch at k
    // safe loop since any mismatch before current mismatch are already set the front of the array (dry run prefered)
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  // return k since k will be at the index where replacement can be made (so it accounts for the zero based index)
  // if 4 mismatches were there, all four were set from index [0, 1, 2, 3] and k will be at 4 after the loop ends => which means length of all mismatches
  return k;
}
