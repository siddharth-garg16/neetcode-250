function majorityElement(nums: number[]): number {
  // brute force solution
  // set count in map
  // check if which element count is bigger than Math.floor(nums.length / 2)
  // return that element
  // let counter: {[key: string] : number} = {};
  // for(let num of nums){
  //     counter[num] = (counter[num] || 0) + 1
  // }
  // for(let [key, value] of Object.entries(counter)){
  //     if(value > Math.floor((nums.length / 2))) return Number(key)
  // }

  // CRACKHEAD SOLUTION
  // Boyer–Moore Majority Vote Algorithm
  // set count as 1 and majority as first element (base condition is that if one element in the array => that element is majority)
  let count = 1;
  let majority = nums[0];
  // go over the array
  for (let i = 1; i < nums.length; i++) {
    // if the current element is equal to majority, increase the count for that majority
    if (nums[i] === majority) {
      count += 1;
    } else {
      // if current element is not equal to majority, decrease the count for that majority
      // if the count has become zero, that means other elements has occured more times than the majority => hence update the majority and increase the counter for the new majority
      if (count === 0) {
        majority = nums[i];
        count += 1;
      } else {
        count -= 1;
      }
    }
  }
  return majority;
}
