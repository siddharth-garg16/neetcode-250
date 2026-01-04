function subarraySum(nums: number[], k: number): number {
  // intuition is that we'll keep the prefix sum on the go
  // because sum from index [2, 5] = sum from index [0, 5] - sum from index [0, 1]
  // ALGO: we will keep checking the difference = (current prefix - k)
  // if the prefix map has that difference, we know at some point earlier prefix some was difference
  // which means that eliminating that subarray which gave us that prefix sum from current prefix sum
  // we are left with k

  // e.g. [1, 2, 3, -3, 1], k = 3
  // prefix sum till 1 (last index) will be 4
  // does (4 - k) i.e. 1 exist in map
  // yes, it does. at first index prefix sum was 1
  // so it means if we remove that prefix sum, we are ;eft with k i.e. prefix sums of subarray [2, 3, -3, 1]

  // will hold prefixSum as key and how many times that prefix sum has occured as value
  // e.g. [1, 2, 3, -3];
  // prefix sum for above example would change like 1 => 3 => 6 => 3
  // it would look something like this {1 => 1, 3 => 2 (twice), 6 => 1}
  const prefixSumMap = new Map();
  // set prefix sum zero with occurance as one
  // say we had [1, 2, 3, 4] and k is 6
  // when we got to sub array [1, 2, 3] and prefix sum becomes 6, this subaaray is valid answer
  // to keep algorithm in check, (prefixSum - k) exist in map
  // set a default 0 with count 1 (it means nothing was trimmed off from the current pefix sum, as the current prefix sum is from the start of the array)
  prefixSumMap.set(0, 1);

  // holds the current running sum
  let curSum = 0;
  let res = 0;

  for (let num of nums) {
    // add to prefix
    curSum += num;
    // compute difference to check if we have seen any previous prefixSum equals to the difference
    // if yes, how many times => add it to the res
    const diff = curSum - k;
    if (prefixSumMap.has(diff)) {
      res += prefixSumMap.get(diff);
    }
    // also keep updating our map for every prefixSum
    // set curSum in the map with count as 1 if it doen't exist
    // if it does, increase the count
    if (prefixSumMap.has(curSum)) {
      prefixSumMap.set(curSum, prefixSumMap.get(curSum) + 1);
    } else {
      prefixSumMap.set(curSum, 1);
    }
  }

  return res;
}
