function longestCommonPrefix(strs: string[]): string {
  // set res as the first string of the array
  // because when the array is shortest (i.e. length 1), the first element itself is the answer
  let res = strs[0];

  // iterate over the input array, starting from index 1
  // if array was of length one, first element itself will be returned (as stored in res)
  // else check each string with the res
  for (let i = 1; i < strs.length; i++) {
    let currentStr = strs[i];
    // take a j starting from 0
    let j = 0;
    // making sure that j doesn't go out of bound of both current string that we are looking at and the res
    while (j < currentStr.length && j < res.length) {
      // if characters match simply increase j
      // else stop the loop as the mismatch is found, and prefix can't exceed
      if (res[j] === currentStr[j]) {
        j++;
      } else {
        break;
      }
    }
    // at this condition loop could have terminated either by the while condition itself or the break key word
    // simply extract the substring from the res and reassign it to the res [0, j-1] (inclusive)
    // i.e. if res was 'loremipsum' and j was 5, get substring 'lorem' i.e. for index [0, 1, 2, 3, 4]
    res = res.substring(0, j);
    // if at any point res is zero, no further need to check for prefixes as it will always be empty string
    if (res === "") break;
  }
  return res;
}
