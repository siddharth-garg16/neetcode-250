/**
 * BRUTE FORCE SOLUTION (slightly optimized as no separate sorting done, took advantage of already sorted arrays):
 * create a new empty array
 * take two pointers on both input arrays
 * compare and push the smaller in the new array and move that pointer
 * if the one array is exhausted, push all remaining elements from the other array
 * finally, calculate the median from the new array
 * (if even length of merged array, get two middles and average them outs)
 * (if odd, sreturn the middle element)
 */

// JUST ANOTHER CRACKHEAD SOLUTION
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // what total length would be if we actually merged the two arrays
  let totalLengthPostMerge = nums1.length + nums2.length;
  // half of that total length
  let half = Math.floor((totalLengthPostMerge + 1) / 2);

  // making sure the array on which binary search is run is smaller
  // avoids the edge case where the calculated mid is exceeding the length of the other array
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  let l = 0;
  let r = nums1.length;

  while (l <= r) {
    // potential cutoff from the first array that will contribute to the LHS of the median
    const i = Math.floor((l + r) / 2);
    // calculated cutoff (using 'i') from the second array that will contribute to the LHS of the median
    const j = half - i;

    // setting the minimum and maximum integer values to avoid empty array edge cases
    const nums1Left = i > 0 ? nums1[i - 1] : Number.MIN_SAFE_INTEGER;
    const nums1Right = i < nums1.length ? nums1[i] : Number.MAX_SAFE_INTEGER;

    const nums2Left = j > 0 ? nums2[j - 1] : Number.MIN_SAFE_INTEGER;
    const nums2Right = j < nums2.length ? nums2[j] : Number.MAX_SAFE_INTEGER;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (totalLengthPostMerge % 2 !== 0) {
        return Math.max(nums1Left, nums2Left);
      }
      return (
        (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
      );
    } else if (nums1Left > nums2Right) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
  return -1;
}
