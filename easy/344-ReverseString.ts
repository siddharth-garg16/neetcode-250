/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // simple two pointer approach, one at the start, other at the end
  let l = 0,
    r = s.length - 1;

  // keep swapping until they both point at same index
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}
