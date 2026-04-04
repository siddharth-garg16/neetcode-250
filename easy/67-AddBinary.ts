function addBinary(a: string, b: string): string {
    let i = a.length - 1,
        j = b.length - 1;

    let res = [];

    let carry = 0;

    // we binded the loop condition with 'or' beacuse even if a is shorter than b, we can treat it as zero for binary addition
    while (i >= 0 || j >= 0 || carry > 0) {
        // if i still in bound get the bit from a, otherwise treat it as zero
        let digitA = i >= 0 ? Number(a[i]) : 0;
        // if j still in bound get the bit from b, otherwise treat it as zero
        let digitB = j >= 0 ? Number(b[j]) : 0;
        // total it with carry
        let total = digitA + digitB + carry;
        // observation: when we add two bits and a carry, the result can only be 0, 1, 2, or 3.
        // if total is 0 or 2, we push 0 to the result, if total is 1 or 3, we push 1 to the result.
        res.push(total % 2);
        // if total is 2 or 3, we have a carry of 1 for the next iteration, otherwise we have no carry.
        carry = Math.floor(total / 2);
        i--;
        j--;
    }

    return res.reverse().join("");
}
