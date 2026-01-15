function characterReplacement(s: string, k: number): number {
  // hashmap will be used to map characters with their frequencies in a given window
  let count = new Map<string, number>();
  // start l and r both a zero, ends of the sliding window
  let l = 0,
    r = 0;
  // initialize res with 0,  (r -l + 1) will give length 1, base condition of string with only one character
  let res = 0;

  while (r < s.length) {
    // set/update the character at index r in hashmap
    count.set(s[r], (count.get(s[r]) || 0) + 1);
    // compute the current substring length
    let currentSubstringLength = r - l + 1;
    // intuition: we will replace the characters that are low in frequency to maximise the effectiveness of the replacement as we have limited number of k
    // subtracting currentsubstringlength with maxfrequency in the map will give us the number of swaps we need to make to replace low frequency characters with maximum frequency character
    // if that exceeds k, then we know we don't have enough swaps available
    // if that is the case keep incrementing the l until we reach within the allowed limit k

    // key observation: we decreased l aggressively because we aren't sure if increasing l by one would make (( r - l + 1) - getCurrentHighestFrequency(count)) less than or equal to  k
    // there is possibility that l right now is pointing at the majority element of the sliding window and increasing l by one, reduced the count of highest frequency
    // which would make (( r - l + 1) - getCurrentHighestFrequency(count)) increase even further
    while (r - l + 1 - getCurrentHighestFrequency(count) > k) {
      // since charcter at l was removed from current substring
      // decrease its count and update currentSubstringLength
      count.set(s[l], count.get(s[l]) - 1);
      l++;
      currentSubstringLength = r - l + 1;
    }

    // thing is that is above while was not executed, it will keep updating our res
    // maximize the res
    res = Math.max(res, currentSubstringLength);
    // increment the r after each iteration
    r++;
  }

  return res;
}

// utility fn to get the maximum value in the hashmap
function getCurrentHighestFrequency(counter: Map<string, number>): number {
  let maxVal = 0;
  return Math.max(maxVal, ...counter.values());
}
