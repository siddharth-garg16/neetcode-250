function minSubArrayLen(target: number, nums: number[]): number {
    // worst case: sum of all elements is equal or greater than target
    // we need to minimize here, so kept the the value one higher than the array length
    let res = nums.length + 1;
    // total of current window
    let total = 0;

    let l = 0,
        r = 0;

    while (r < nums.length) {
        // update window total
        total += nums[r];
        // the moment we found total is greater than or equal to target, we can try to shrink the window from left
        // we keep shrinking the window until total is less than target, and update the result in the process to get the minimized
        while (total >= target) {
            res = Math.min(res, r - l + 1);
            total -= nums[l];
            l++;
        }
        r++;
    }
    // if length is still one higher than the array length, it means we never found a valid window, so return 0, otherwise return the result
    return res === nums.length + 1 ? 0 : res;
}
