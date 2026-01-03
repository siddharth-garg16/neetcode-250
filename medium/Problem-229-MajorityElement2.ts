function majorityElement(nums: number[]): number[] {
  // simple approach to store count of each number in a hashmap
  // and going over hashmap to check for the answers
  const counter = new Map();
  for (let num of nums) {
    if (counter.has(num)) {
      counter.set(num, counter.get(num) + 1);
    } else {
      counter.set(num, 1);
    }
  }
  const ans = [];
  const cutoff = Math.floor(nums.length / 3);
  for (const [k, v] of counter.entries()) {
    if (v > cutoff) ans.push(k);
  }
  return ans;
}
