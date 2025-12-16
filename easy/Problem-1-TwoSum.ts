function twoSum(nums: number[], target: number): number[] {
  // empty map
  const diffMap = new Map();

  const ans: number[] = [];

  // on every element, calculate the difference by target - element
  // intuition is that if any later element in array is equal to that diff
  // it can be added to current elemet to get the target (z - x = y mean x + y = z)
  for (let i = 0; i < nums.length; i++) {
    // find diff
    const diff = target - nums[i];

    // if this number already exist in the map
    // it means any previous element when subtracted from target, gave us that diff
    // else set the diff in the map
    if (diffMap.has(nums[i])) {
      ans.push(diffMap.get(nums[i]));
      ans.push(i);
      break;
    } else {
      diffMap.set(diff, i);
    }
  }

  return ans;
}
