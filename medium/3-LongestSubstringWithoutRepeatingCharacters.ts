function lengthOfLongestSubstring(s: string): number {
  // create a hashmap (element => index of its latest occurence)
  const hashmap = new Map();
  // assume result to be zero, empty string base case
  let res = 0;

  // set l and r at the start, will be used as ends of the sliding window algorithm
  let l = 0,
    r = 0;

  // while end of the sliding window is in bound
  while (r < s.length) {
    const currentChar = s[r];
    // if we found current character is already set in hashmap
    // move l to the that max between l and that (mapped index + 1)
    // TRICKY OBERVATION!!!!!! on why we did Math.max(hashmap.get(s[r]) + 1, l) and didn't simple=y used hashmap.get(s[r]) + 1
    // there can be situation we found a repeating charccters between repeating charcters
    // e.g. 'abcdefcgb' => repeating c's inside repeating b's
    // when we will be at second c, res will remain to be 6 ('abcdef') which is the max res so far
    // now when we will be at second b, we don't want to move l to the index 3, because if set l back to 3 it will be invalid
    // because it will then contain duplicate c's
    if (hashmap.has(currentChar)) {
      l = Math.max(hashmap.get(currentChar) + 1, l);
    }
    // keep adding new entries or updating the older entries with latest index in the map
    hashmap.set(currentChar, r);
    // updating res with max between existing res and possible new res (r - l + 1)
    // did (r - l + 1) because a in string 'abc', l at 0 and r at 2 give length 3 with this formula
    // if we did (r - l), we'll be short by 1 on the length
    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
}
