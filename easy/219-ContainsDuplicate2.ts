function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // intuition is to simply store each element of nums as key and its index as value
  const hashmap = new Map<number, number>(); // {element => element's latest index}

  for (let i = 0; i < nums.length; i++) {
    // before setting the latest this element and i as its latest index in map
    // check if the element already exists in the hashmap and the previous index with which it was saved lies in the allowed window size of k (i.e. i - hashmap.get(nums[i]) <= k)
    if (hashmap.has(nums[i]) && i - hashmap.get(nums[i]) <= k) {
      return true;
    }
    // keep updating element's latest index
    hashmap.set(nums[i], i);
  }

  return false;
}
