function groupAnagrams(strs: string[]): string[][] {
  // create an empty object to hold key: values
  // values would be the group of the anagrams in the form of an array
  // key will be computed based on the frequency of the characters
  let res: { [key: string]: string[] } = {};
  // loop over the input array
  for (let str of strs) {
    // create new array of size 26 for each string of the input
    // there are only lowercase alphabets in the string (hence constant 26 length array)
    const counterArr = new Array(26).fill(0);
    // go over each character of the current
    for (let c of str) {
      // get character code for each character
      // charCodeAt(index)  => index here is the index of the character of which charCode is required i.e. 'lorem'.charCodeAt(1) will give charcode of 'l'
      // increase the counters at index (0 for 'a', 1 for 'b' etc.)
      counterArr[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    // join the elements of the counterArr
    // any anagram will generate the same key because the counter for the each character will be same
    const key = counterArr.join("-");
    // if object doesn't have the same key, set the key with empty array and push the string in that array
    // if the key already exists, no need to set it, simply just push the string in the existing array
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(str);
  }

  // return values
  return Object.values(res);
}
