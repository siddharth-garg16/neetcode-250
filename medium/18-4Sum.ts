function fourSum(nums: number[], target: number): number[][] {
  // similar approach to 3sum but with slightly additional attention to edge cases
  // because each element has to be different
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    // moved i until we found different element
    // additional check i > 0 to prevent out of bound error
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      // moved j until we found different element
      // additional check j > i + 1 to make sure checks don't compare j with i
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let k = j + 1,
        l = nums.length - 1;

      while (k < l) {
        const foursum = nums[i] + nums[j] + nums[k] + nums[l];
        if (foursum < target) {
          k++;
        } else if (foursum > target) {
          l--;
        } else {
          ans.push([nums[i], nums[j], nums[k], nums[l]]);
          // since elements need to be unique
          // increase k until distinct element found
          // decrease l until distinct element found
          while (k < l && nums[k] === nums[k + 1]) {
            k++;
          }
          while (k < l && nums[l] === nums[l - 1]) {
            l--;
          }
          k++; // since nums[k] === nums[K+1] was used, move k one more time because that previous k was used get answer above
          l--; // same logic for l but in opposite direction
        }
      }
    }
  }

  return ans;
}
