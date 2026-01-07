function isPalindrome(s: string): boolean {
  // converted to lowercase
  s = s.toLowerCase();
  // to store only alpha numeric characters
  let nonAlphaNumeric = "";

  for (let ch of s) {
    // if character if either a-z or 0-9. append it to nonAlphaNumeric
    if (
      (ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123) ||
      (ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58)
    ) {
      nonAlphaNumeric += ch;
    }
  }

  // simple two pointer approach now
  let l = 0,
    r = nonAlphaNumeric.length - 1;
  while (l < r) {
    if (nonAlphaNumeric[l] !== nonAlphaNumeric[r]) return false;
    l++;
    r--;
  }

  return true;
}
