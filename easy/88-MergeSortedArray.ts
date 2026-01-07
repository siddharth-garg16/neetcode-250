/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // brute force: set elements of nums2 into nums1's placeholder zeroes
  // then sort nums1
  // O((m+n).log(m+n))
  // let i = m;
  // let j = 0;
  // while(j < n){
  //     nums1[i] = nums2[j];
  //     i++;
  //     j++;
  // }
  // nums1.sort((a, b) => a - b);

  // ================================================================================

  // better approach: O(m+n)
  // i points to the last valid element of the nums1
  // j points to the last element of nums2
  // k points to the last element of the nums1
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  // start inserting from the back
  // if nums1[i] > nums2[j], set nums1[i] at nums1[k] else nums2[j]
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // the miminum element lies in the nums1, above loop will work as all the values from the nums2 will already be mapped using comparison operator
  // but if the minimum value lies in nums2, all the values will be used from nums1 and i will go out of bounds
  // hence check if there are remaining elements in nums2 which are not set yet and set them
  // e.g. [1, 2, 4, 6, 0, 0, 0], [3, 5, 9]
  // eventually when we'll compare 2 and 3, 3 will be set and j will go out of bound before i since minimum element i.e. 1 is in nums1

  // but in [2, 3, 4, 0, 0], [1, 5]
  // eventually when we'll compare 1 and 2, i will go out of bound but 1 is still left there to be set
  // use below while loop to make sure all the elements in nums2 that are smaller than the minimum element of nums1 are also set
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
