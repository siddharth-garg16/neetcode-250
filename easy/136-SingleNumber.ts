function singleNumber(nums: number[]): number {
    // initialized with 0 as xor with 0 give back same number
    let uniqueNum = 0;

    // keep xoring, as duplicate numbers will cancel each other out, leaving only the unique number
    // based on: a ^ a = 0, a ^ 0 = a and a ^ 1 = ~a
    for (let num of nums) {
        uniqueNum ^= num;
    }

    return uniqueNum;
}
