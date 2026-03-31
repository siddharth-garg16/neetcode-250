function countBits(n: number): number[] {
    // brute force
    const ans = [];
    for (let i = 0; i <= n; i++) {
        let setBits = 0; // set bits as 0 for each i
        let num = i; // set i to num for right shift operation
        while (num) {
            if (num & 1) setBits++;
            num = num >> 1;
        }
        ans.push(setBits);
    }
    return ans;
}
