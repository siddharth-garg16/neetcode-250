function numRescueBoats(people: number[], limit: number): number {
  // sort the array in order to pick the lightest and heaviest persons
  // intuition is that since boat can carry at most two persons, pair lighttest and heaviest together
  // and if their combined weight exceeds limit, then only heaviest person can go alone
  // move his fatass, and try lighter person with second heaviest
  // continue this until all persons are assigned boats
  people.sort((a, b) => a - b);

  let minimumBoatsRequired = 0;

  // make i and j point to the opposite ends so they point to lightest and heaviest respectively
  let i = 0,
    j = people.length - 1;

  while (i <= j) {
    // if i and j are both ponting to the same person, then it means rest all are already shipped
    // move him as well and break the loop
    if (i === j) {
      minimumBoatsRequired += 1; // one boat was used to ship this last individual
      break;
    }

    if (people[i] + people[j] > limit) {
      // add both weights and if it exceeds limit
      // ship the heavier one i.e. j--;
      minimumBoatsRequired += 1; // one boat was used to ship heavier one
      j--;
    } else {
      // ship both of them together i.e. i++ and j--
      minimumBoatsRequired += 1; // one boat was used to both
      i++;
      j--;
    }
  }

  return minimumBoatsRequired;
}
