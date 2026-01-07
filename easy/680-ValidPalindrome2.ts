function validPalindrome(s: string): boolean {
  // idea is that we'll use two pointer method to check if matching characters
  // just how we would normally check a palindrome string
  // now since we have a condition that if input string can also be considered palindrome if we remove at most one character from it
  // we need to check what if removing one character also make it palindrome or not

  let l = 0,
    r = s.length - 1;
  while (l < r) {
    // when we found a mismatch, just check if removing either character at l or character at r makes the remaining string bounded by l and r a palindrome
    // e.g. 'abdxyzkzyxdcba'
    // we found mismatch that character d and c
    // check if either of 'xyzkzyxdc' (l+1, r) and 'dxyzkzyxd' (l, r-1) is palindrome
    // if yes, then we could say that removing one of the characters (d or c) in this case, left us with palindrome string
    // if not, then even after removing (d or c), we still won't get a palindrome string
    if (s[l] !== s[r]) {
      return checkPalindrome(s, l + 1, r) || checkPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }

  // we never found a mismatch, it was already a palindrome, return true
  return true;
}

// general helper function that checks palindrome from index l to r (both inclusive) of s
function checkPalindrome(str: string, l: number, r: number): boolean {
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}
