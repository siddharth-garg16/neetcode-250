function containsDuplicate(nums: number[]): boolean {
  // set an empty map
  // add new entry if the map doesn't have it (mapped with value -> index)
  // if map already has it, simply return true

  const seenBefore = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (seenBefore.has(nums[i])) return true;
    else seenBefore.set(nums[i], i);
  }

  return false;
}
