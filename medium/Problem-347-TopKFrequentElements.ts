function topKFrequent(nums: number[], k: number): number[] {
  // idea is to create two separate data structures
  // one to maintain the the count(frequency) of each element => simple hashmap
  // another to group and store elements with similar frequency => higher frequency elements will be picked for the answer (removes the sorting complexity on O(N.LOGN)) => an array of size the length of the nums, with index being used to map frequency and element at that index being the array that has elements with frequency equal to the index

  // counter map (element => frequency)
  const countMap: { [key: string]: number } = {};
  // length of indexFrequencyArray to be nums.length + 1 because if all elements were same in nums, the frequency for that element will be length of nums + 1
  // eg. [1, 1, 1] => frequency of 1 is 3, length for indexFrequencyArray should be 4 because at index 4 we will store 1 in an array
  const indexFrequencyArray: number[][] = [];
  // used loop and push to avoid deep/shallow copy issues
  for (let i = 0; i <= nums.length; i++) {
    indexFrequencyArray.push([]);
  }

  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // access keys in countMap
  // push it to the array at index equal to their frequency
  for (const key in countMap) {
    indexFrequencyArray[countMap[key]].push(parseInt(key));
  }

  const res: number[] = [];
  // iterating from the right hand side, since highest frequency elements are required
  for (let i = indexFrequencyArray.length - 1; i > 0; i--) {
    // didn't use spread operator as length of res can get more than k
    for (const n of indexFrequencyArray[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
  return res;
}
