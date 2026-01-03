// Intuition: the fastest way to complete all the piles is to eat at the rate of maximum sized pile per hour
// i.e.for fastest completion => number of banana to eat in hour is max element in the array.
// length of array becomes the total hours to finish the piles.

// catch is to reduce this eating speed to the minimum value, so that piles can still be finished in the given 'H' hours.
// minimum eating speed can be 1 per hour and maximum can be the size of the largest pile.
// acts as the lower and upper bound for the binary search
function minEatingSpeed(piles: number[], h: number): number {
  let lower: number = 1,
    upper: number = Math.max(...piles);

  // default answer should be the maximum (since, h >= piles.length)
  let result: number = upper;

  while (lower <= upper) {
    const mid = Math.floor((lower + upper) / 2);
    let totalTime = 0;
    // calculate totalTime consumed to eat all piles of banana
    for (let pile of piles) {
      totalTime += Math.ceil(pile / mid);
    }
    // if the time taken was more than the target time of h, needs to eat quicker (hence increase the lower bound)
    // else need to set the result with mid, since it less than the default assigned value of maximum pile size (goal here is to find the minimum value of eating speed that can still get the job done in given h hours)
    // after setting the result, decrease the upper bound, just to check how close we can get to the minimum value of eating speed that will get the job done
    if (totalTime > h) {
      lower = mid + 1;
    } else {
      result = mid;
      upper = mid - 1;
    }
  }
  return result;
}
