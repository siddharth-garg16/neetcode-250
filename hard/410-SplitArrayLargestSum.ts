// Intuition:

// the largest the sum could be is the sum of all the elments of the array
// because if k is 1, then the entire array is the subarray array, no splits required

// the smallest the sum could be is the largest element of the array (minimise the maximum sum)

// these two act as the boundaries of the binary search based solution

function splitArray(nums: number[], k: number): number {
  let left: number = Math.max(...nums);
  let right: number = nums.reduce((acc, val) => acc + val, 0);
  // our target is to minimise the maximum sum of the subarray i.e. minimse the right while maing sure that array is divided into k subarrays
  while (left < right) {
    // compute mid, if the array can be divided in k subarrays such that the largest sum of the subarrays is mid or less
    const mid = Math.floor((left + right) / 2);
    // keeping parts as 1, since entire array is a subarray (assumption we did to get right)
    let parts = 1;
    let curSum = 0;
    // iterate over the array, as soon as the running sum exceeds mid, call it end of a part
    for (let num of nums) {
      // adding anymore num would increase cursum over mid, no need to add it
      // just call it a subarray and increase parts by one
      // reset cursum to num, as it is the start of a new subarray and next iteration would add the element next to this current num
      if (curSum + num > mid) {
        curSum = num;
        parts += 1;
      } else {
        curSum += num;
      }
    }
    // if the parts in which the array could be divided was more than mid, then we know we need to increase the mid
    // since it is creaing too many subarrays that we can't make (max is k)
    if (parts > k) {
      left = mid + 1;
    } else {
      // else set the right to mid
      // keep repeating it as right can be lower than as well (we know it is a valid answer but there could value lesser than cuurent mid, that will also satisfy the conditions)
      // then again, the goal is to minimize the maximum sum of the subarrays
      right = mid;
    }
  }
  return right;
}
