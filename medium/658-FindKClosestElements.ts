function findClosestElements(arr: number[], k: number, x: number): number[] {
    // setting r to array's length - k
    // since window is always k consecutive elements. So if the array has n elements,
    // the last possible starting index for a window of size k is n - k

    // idea is there are two possibilities, all the k elements are on the right of r, we need to move the l to r
    // or they to the left of r, then we need to shrinkr pointer to the left
    let left = 0,
        right = arr.length - k;

    while (left < right) {
        // we get a middle index of l and r
        let mid = Math.floor((left + right) / 2);
        // compute the closest element between element at mid and mid + k, which is the last element in the current window of size k
        // if the element at mid + k is smaller, then we know elements between mid and mid = k can't be the answer as array is sorted => moved l closer to r
        // else elements to the right of mid can't be closer => moved r closer to l (did r = mid bacause mid is still a valid starting index for a window of size k)
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // l now points to the starting index of the window of size k with the closest elements to x, so we return the subarray starting from l with size k
    return arr.slice(left, left + k);
}
