class MyHashSet {
  hashset: boolean[];

  constructor() {
    // set false to the array of size 10**6 + 1
    // index will be treated as the key and vice-versa
    this.hashset = new Array(Math.pow(10, 6) + 1).fill(false);
  }

  add(key: number): void {
    // set value at index key as true
    this.hashset[key] = true;
  }

  remove(key: number): void {
    // set value at index key as false
    this.hashset[key] = false;
  }

  contains(key: number): boolean {
    // return value at index key (true if it exists, false if it doesn't)
    return this.hashset[key];
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
