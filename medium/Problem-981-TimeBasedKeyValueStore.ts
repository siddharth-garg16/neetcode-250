// simple problem: just create a mind map of the data structure, else it is normal binary search
// it is basically an array which is sorted based on timestamp : each entry is an array of size two i.e. [timestamp: number, value: string]
// we can have same timestamp as well, we just have to find the timestamp that is timestamp <= searchedTimestamp
// if there is no timestamp that is equal to the searched timestamp, return the timestamp that closest to it but smaller
// else return the latest

// e.g. [1, 2, 2, 4, 4, 5]; => if searched for 3, return 2 that is on index 2
// [1, 2, 2, 3, 3, 3, 4, 5] => if searched for 3, return 3 that is on index 5

class TimeMap {
  private entries;

  constructor() {
    this.entries = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.entries.has(key)) {
      this.entries.set(key, []);
    }
    const newEntry = [timestamp, value];
    this.entries.get(key).push(newEntry);
  }

  get(key: string, timestamp: number): string {
    const values = this.entries.get(key) || [];
    let left = 0,
      right = values.length - 1;
    let result = "";
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // if the timestamp is smaller or equal that can be a potential answer
      // so keep updating the result
      // see if there is anoher timestamp that meets this criteria because we need the most latest one
      if (values[mid][0] <= timestamp) {
        result = values[mid][1];
        left = mid + 1;
      }
      // time stamp is bigger, reduce right because all the timestamps on the RHS will be bigger
      else {
        right = mid - 1;
      }
    }
    return result;
  }
}
