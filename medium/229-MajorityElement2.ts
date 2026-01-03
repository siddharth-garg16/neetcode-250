function majorityElement(nums: number[]): number[] {
  // simple approach to store count of each number in a hashmap
  // and going over hashmap to check for the answers
  //   const counter = new Map();
  //   for (let num of nums) {
  //     if (counter.has(num)) {
  //       counter.set(num, counter.get(num) + 1);
  //     } else {
  //       counter.set(num, 1);
  //     }
  //   }
  //   const ans = [];
  //   const cutoff = Math.floor(nums.length / 3);
  //   for (const [k, v] of counter.entries()) {
  //     if (v > cutoff) ans.push(k);
  //   }
  //   return ans;

  // ==================================================
  // CRACKHEAD SOLUTION (Boyer–Moore Majority Vote Algorithm but doubled)
  // idea is that there can be atmost 2 elements that can satisfy the condition of occuring more than (n//3)
  // because if there already are two elements that satisfy this condition, no other element can occur more than (n//3)
  // run boyer-moore algo but with consideration that there can be two answers
  const n = nums.length;
  // set num1, num2 as any random number between the constraint (taking zero as it neither negative nor positive, doesn't trigger my ocd lol)
  let num1 = 0,
    num2 = 0,
    cnt1 = 0,
    cnt2 = 0;

  for (const num of nums) {
    if (num === num1) {
      // encounter a num that is equal to num1, increase counter for num1
      cnt1++;
    } else if (num === num2) {
      // encounter a num that is equal to num2, increase counter for num2
      cnt2++;
    } else if (cnt1 === 0) {
      // when count for num1 vanishes, set the current num as num1
      // because numbers that are not equal to num1 or num2 vanishes num1 and num2 both
      cnt1 = 1;
      num1 = num;
    } else if (cnt2 === 0) {
      // when count for num2 vanishes, set the current num as num2
      // because numbers that are not equal to num1 or num2 vanishes num1 and num2 both
      cnt2 = 1;
      num2 = num;
    } else {
      // vanishes both num1 and num2
      cnt1--;
      cnt2--;
    }
  }

  // post above operation, we will have two nums that are most occuring in the array
  // re-iterate over the array to check the actual exact count of the both
  cnt1 = cnt2 = 0;
  for (const num of nums) {
    if (num === num1) cnt1++;
    else if (num === num2) cnt2++;
  }

  // whichever meets the cutoff of (n//3), push it res array
  const res = [];
  if (cnt1 > Math.floor(n / 3)) res.push(num1);
  if (cnt2 > Math.floor(n / 3)) res.push(num2);

  return res;
}
