/**
 * Dry run for cases both where a number has a perfect square and where it doesn't
 * relation establishes that in case of perfect return the perfect square
 * else end, as it will point to nearest integer
 */
function mySqrt(x: number): number {
  let start: number = 0,
    end: number = x;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const squared = mid * mid;
    if (squared === x) return mid;
    else if (squared > x) end = mid - 1;
    else start = mid + 1;
  }
  return end;
}
