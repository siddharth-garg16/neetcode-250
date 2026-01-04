function firstMissingPositive(nums: number[]): number {
  // brute force approach
  // set each element in to a hashset
  // start iterating over from 1 to largest possible element in nums i.e. (2**31 - 1)
  // return the first element that is missing from the hashset
  //   const hashset = new Set(nums);
  //   let res = -1;
  //   for (let i = 1; i <= Math.pow(2, 31); i++) {
  //     if (!hashset.has(i)) {
  //       res = i;
  //       break;
  //     }
  //   }
  //   return res;
  // ==========================================================
  // slightly optimized approach
  // instead of iterating fro 2**31 times
  // iterate till the length of the array
  // if array was of length 10, and we had elements from 1 to 10 (ideal case)
  // then the first missing would be array.length + 1 i.e. 11
  // and if any number greatter equal to 1 and less than equal to array.length is missing that would be the first missing
  //   const len = nums.length;
  //   const hashset = new Set(nums);
  //   for (let i = 1; i <= len; i++) {
  //     if (!hashset.has(i)) {
  //       return i;
  //     }
  //   }
  //   return len + 1;
  // ==========================================================
  // most optimal solution: cycle sort but with extra condition that swap only positive elements from range [1, array.length] (inclusive)
  const len = nums.length;
  let i = 0;
  while (i < len) {
    // get the correct index for an element
    const correctIndex = nums[i] - 1;
    // only position elements that from range [1, array.length - 1] (ideal case element from 1 to n-1 exist in array of length n)
    // and additionally check if the element at the correctIndex is already equal to the current element no need to swap
    if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i += 1;
    }
  }
  // where we see that the element in array is not equal to index+1
  // that is the first violation, because in ideal case it should have been index+1, hence return index+1
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  // if all the elements are set correct index i.e ideal case where element from 1 to n-1 exist in array of length n
  // return len+1
  // if array was of length 10, and we had elements from 1 to 10 (ideal case)
  // then the first missing would be array.length + 1 i.e. 11
  return len + 1;
}
