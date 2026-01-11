function twoSum(numbers: number[], target: number): number[] {
  // two pointer approach
  // l at start, r at end
  let l = 0,
    r = numbers.length;

  const ans: number[] = [];
  while (l < r) {
    const total = numbers[l] + numbers[r];
    // total is equal to target, add (l+1) and (r+1) to ans because problem says it is 1-indexed array
    if (total === target) {
      ans.push(l + 1, r + 1);
      break;
    }

    // since numbers is in non-decreasing order
    // if total is less than target, it means effect of numbers[l] is too significant that the total dropped below target, so increase l
    // else decrease r
    if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }

  return ans;
}
