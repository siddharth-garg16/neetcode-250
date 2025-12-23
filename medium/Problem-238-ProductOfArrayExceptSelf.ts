function productExceptSelf(nums: number[]): number[] {
  // create a prefix sum and a postfix product
  // i.e. for input array => [5, 3, 2, 1, 4] => total product of the elements of the array is 120
  // prefix product => [5, 15, 30, 30, 120]
  // postfix product=> [120, 24, 8, 4, 4]
  const preFix = new Array(nums.length).fill(0);
  const postFix = new Array(nums.length).fill(0);

  // setting prefix product by index to avoid complexity for push
  let p = 1;
  for (let i = 0; i < nums.length; i++) {
    p *= nums[i];
    preFix[i] = p;
  }

  // reset p to 1
  // setting postfix product by index to avoid complexity for unshift
  p = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    p *= nums[i];
    postFix[i] = p;
  }

  const res = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      // for first index, postfix array's second index (1) will have the product of the array except the first element
      // i.e. in above example, 24.
      res[i] = postFix[i + 1];
    } else if (i === nums.length - 1) {
      // for last index, prefix array's last second index (length - 2) will have the product of the array except the last element
      // i.e. in above example, 30.
      res[i] = preFix[i - 1];
    } else {
      // rest of the elements product of array except self can be computed using both prefix and postfix
      // for element at index i of input, prefix's i-1 * postfix's i+1
      // becuase prefix would have the product of all element before 2, and postfix would have the product of all elements after 2
      // e.g. for element 2 (which is at index 2 of input)
      // prefix[1] * postfix[i+1] = 15 * 4
      // i.e. 60
      res[i] = postFix[i + 1] * preFix[i - 1];
    }
  }

  return res;
}
