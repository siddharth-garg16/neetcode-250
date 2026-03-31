function countBits(n: number): number[] {
    // brute force
    // const ans = [];
    // for (let i = 0; i <= n; i++) {
    //     let setBits = 0; // set bits as 0 for each i
    //     let num = i; // set i to num for right shift operation
    //     while (num) {
    //         if (num & 1) setBits++;
    //         num = num >> 1;
    //     }
    //     ans.push(setBits);
    // }
    // return ans;

    // =====================================================================

    // optimal (observation based on the pattern of set bits in binary representation)
    /**
     * 00000000 => 0
     * 00000001 => 1 (1 + set bits in 0 i.e n - 1) (offset as 1, as it is a number with 1 set bit)
     * 00000010 => 2 (1 + set bits in 0 i.e n - 2) (offset as 2, as it is a number with 1 set bits)
     * 00000011 => 3 (1 + set bits in 1 i.e n - 2) (offset didn't change as it is a number with more than 1 set bits)
     * 00000100 => 4 (1 + set bits in 0 i.e n - 4) (offset as 4, as it is a number with 1 set bit)
     * 00000101 => 5 (1 + set bits in 1 i.e n - 4) (offset didn't change as it is a number with more than 1 set bits)
     * 00000110 => 6 (1 + set bits in 2 i.e n - 4) (offset didn't change as it is a number with more than 1 set bits)
     * 00000111 => 7 (1 + set bits in 3 i.e n - 4) (offset didn't change as it is a number with more than 1 set bits)
     * 00001000 => 8 (1 + set bits in 0 i.e n - 8) (offset as 8, as it is a number with 1 set bit)
     * 00001001 => 9 (1 + set bits in 1 i.e n - 8) (offset didn't change as it is a number with more than 1 set bits)
     * 00001010 => 10 (1 + set bits in 2 i.e n - 8) (offset didn't change as it is a number with more than 1 set bits)
     */
    const ans = new Array(n + 1).fill(0);
    // set offset as 1, because multiplying it with 2 again and again will give us the next number with only one set bit
    let offset = 1;
    // started from 1, as 0 is already set at index 0
    for (let i = 1; i <= n; i++) {
        // if we have reached a number which now has only 1 set bit (double of previous number which has 1 set bit)
        if (offset * 2 === i) {
            offset = i; // updated the offset and will keep it until we encounter another number with single set bit, i.e. double of this offset
        }
        ans[i] = 1 + ans[i - offset];
    }
    return ans;
}
