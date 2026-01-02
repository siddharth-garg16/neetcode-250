function longestConsecutive(nums: number[]): number {
  // store each unique occurance of numbers in a hashset so that lookup if a element exists in the original nums becomes a constant time operation
  let hashset = new Set(nums);
  // set longest as zero, since length of nums can be zero
  let longest = 0;

  // iterate over hashset
  for (let num of hashset) {
    /**
        - acts as delimiter condition
        - if the hashset doesn't include (num - 1), it means that num should be the starting point of a possible consecutive sequence
        - idea is that we will check for only those numbers that are the start of a consecutive sequence
        - any element that is the start of such sequence (using above observation), is the longest such sequence we have found so far, so set current len as 1
        - add num and len to get next element and check if it is there in hashset
        - if it is there, that means maximum consecutive sequence now is 2
        - keep increasing len by 1, as long as we find (num + len) in hashset
        - the moment it is not found, stop the while loop
        - update the longest, if the current value of len increased the existing value of longest 
        - after we have checked longest consecutive sequence for all the numbers that are the start of such sequence, we will have the longest consecutive sequence length in longest, then simply return the longest
         */
    if (!hashset.has(num - 1)) {
      let len = 1;
      while (hashset.has(num + len)) {
        len += 1;
      }
      longest = Math.max(len, longest);
    }
  }

  return longest;
}
