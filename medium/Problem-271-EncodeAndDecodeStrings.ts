// leetcode 271 - Encode and decode strings
class Solution {
  // formatting it by the length and # (LENGTH# is delimiter)
  // ['alpha', 'beta] => '5#alpha4#beta'
  encode(strs: string[]): string {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  /** * @param {string} str * @returns {string[]} */
  decode(str: string): string[] {
    let res = [];
    let i = 0;
    while (i < str.length) {
      // start both i and j at same
      let j = i;
      // increase j until we found #
      while (str[j] !== "#") {
        j++;
      }
      // now, substring from i to j will be the Length that we added to the delimiter
      // parse it so we can know the length of substring that needs to be decoded
      const len = parseInt(str.substring(i, j));
      // move i to j+1, as it will move i to the first character of the string that needs to be decoded
      i = j + 1;
      // move j to i + len => it will move j to the next index of that of the last charcter if the string that needs to be decoded
      j = i + len;
      // push the substring
      res.push(str.substring(i, j));
      // set i equal to j => base condition that i and j should start from same index to get each string that is to be decoded
      i = j;
    }
    return res;
  }
}
