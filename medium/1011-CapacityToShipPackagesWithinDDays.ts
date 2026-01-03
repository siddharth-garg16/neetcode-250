// Intuition: fastest way a ship can move all the weights is in 1 day, i.e. if it had the capacity equal to the sum of all weights (upper bound)
// minimum capacity of ship must be the largest weight, else it will never be able to move that weight (lower bound)

// catch is to find the minimum capacity with which weights can be moved in the given days
// mid acts as the potential capacity of the ship
function shipWithinDays(weights: number[], days: number): number {
  let lower: number = Math.max(...weights);
  let upper: number = weights.reduce((acc, val) => acc + val, 0);
  let result: number = upper;

  while (lower <= upper) {
    const mid = Math.floor((lower + upper) / 2);

    // check for the number of days required with mid as ship capacity
    let weightThatCanBeShippedInADay = 0;
    // setting totalDays to 1, instead of 0
    // e.g. [1, 2, 3, 4, 5] with mid = 6
    // 1, 2, 3 in day 1 [while adding 4 it exceeded 6, reset weight and increment days]
    // 4 in day 2 [while adding 5 it exceeded 6, reset weight and increment days]
    // 5 in day 3 [loop would break before accounting day 3 for last elements if totalDays was set to 0]
    let totalDays = 1;
    for (let weight of weights) {
      if (weightThatCanBeShippedInADay + weight > mid) {
        totalDays += 1;
        weightThatCanBeShippedInADay = 0;
      }
      weightThatCanBeShippedInADay += weight;
    }

    // if the totalDays are more, ship capacity is too low => increase lower bound
    if (totalDays > days) {
      lower = mid + 1;
    } else {
      // if it can be shipped in lesser or equal days, set result value with minimum of current result and capacity
      // decrease the ship capacity to get to the minimum value possible for ship capacity that can get the job done
      result = Math.min(result, mid);
      upper = mid - 1;
    }
  }
  return result;
}
