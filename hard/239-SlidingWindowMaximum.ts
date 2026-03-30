function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const output = new Array(n - k + 1);
    const q = new Deque<number>(); // we will keep monotonic increasing deque
    let l = 0,
        r = 0;
    while (r < n) {
        // if deque is not empty and the last element is smaller keep popping them
        while (q.size() && nums[q.back()!] < nums[r]) {
            q.popBack();
        }
        // push the larger element index to the back of the deque
        q.pushBack(r);

        // if the left pointer is greater than the front of the deque, pop it from the front
        if (l > q.front()!) {
            q.popFront();
        }
        if (r + 1 >= k) {
            output[l] = nums[q.front()!];
            l++;
        }
        r++;
    }
    return output;
}

class Deque<T> {
    private items: { [key: number]: T } = {};
    private frontIndex: number = 0;
    private rearIndex: number = 0;

    // Add to front
    pushFront(value: T): void {
        if (this.isEmpty()) {
            this.pushBack(value);
        } else {
            this.frontIndex--;
            this.items[this.frontIndex] = value;
        }
    }

    // Add to back
    pushBack(value: T): void {
        this.items[this.rearIndex] = value;
        this.rearIndex++;
    }

    // Remove from front
    popFront(): T | undefined {
        if (this.isEmpty()) return undefined;
        const value = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    // Remove from back
    popBack(): T | undefined {
        if (this.isEmpty()) return undefined;
        this.rearIndex--;
        const value = this.items[this.rearIndex];
        delete this.items[this.rearIndex];
        return value;
    }

    // Peek front
    front(): T | undefined {
        return this.isEmpty() ? undefined : this.items[this.frontIndex];
    }

    // Peek back
    back(): T | undefined {
        return this.isEmpty() ? undefined : this.items[this.rearIndex - 1];
    }

    // Size
    size(): number {
        return this.rearIndex - this.frontIndex;
    }

    // Check empty
    isEmpty(): boolean {
        return this.size() === 0;
    }

    // clear the deque
    clear(): void {
        this.items = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }
}
