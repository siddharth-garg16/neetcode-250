class MyHashMap {
  hashmap: { [key: string]: number };

  constructor() {
    // set empty object
    this.hashmap = {};
  }

  put(key: number, value: number): void {
    // set or update the key with the value
    this.hashmap[key] = value;
  }

  get(key: number): number {
    // if key exist then return mapped value else return -1
    if (this.hashmap.hasOwnProperty(key)) return this.hashmap[key];
    else return -1;
  }

  remove(key: number): void {
    // remove entry from the object
    delete this.hashmap[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
