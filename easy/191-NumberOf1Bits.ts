function hammingWeight(n: number): number {
    let setBits = 0;

    while (n) {
        // and with 1 to check is lsb is set or not, if set then increment the count
        if (n & 1) setBits++;
        // right shift the bits by 1 to check the next bit in the next iteration
        n = n >> 1;
    }

    return setBits;
}
