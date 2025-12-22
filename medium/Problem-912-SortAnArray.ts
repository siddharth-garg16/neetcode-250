function sortArray(nums: number[]): number[] {
  // straight up merge sort to get O(N.LOGN) runtime complexity
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

function mergeSort(arr: number[], start: number, end: number): void {
  // do partition as long as it can be separated (i.e. length >= 2)
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    // keep separating till length 1 sub-array is reached
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    // finally merge
    merge(arr, start, mid, end);
  }
}

function merge(arr: number[], start: number, mid: number, end: number): void {
  // divided in two parts (start to mid, mid+1 to end);
  // take an empty array and merge the two sorted arrays into sorted manner
  let mix: number[] = new Array(end - start + 1).fill(0);
  let i: number = start;
  let j: number = mid + 1;
  let k: number = 0;

  // take initial pointers to the start of both, if smaller add it to mix, increase that pointer
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      mix[k] = arr[i];
      i++;
    } else {
      mix[k] = arr[j];
      j++;
    }
    k++;
  }

  // if one of the pointers are out of bound, fill the reamining elemnts of the other array into mix
  while (i <= mid) {
    mix[k] = arr[i];
    i++;
    k++;
  }
  while (j <= end) {
    mix[k] = arr[j];
    j++;
    k++;
  }

  // set elements of mix to the original array (related the index by start)
  // 0 of mix will be start in original array
  for (let idx = start; idx <= end; idx++) {
    arr[idx] = mix[idx - start];
  }
}
