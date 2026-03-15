function checkInclusion(s1: string, s2: string): boolean {
    // if s1 is larger than s2, none of the permutations of s1 can be a substring of s2
    if (s1.length > s2.length) return false;

    // only small alphabet charcters, so constant 26 bucket space to keep counter
    // for s1
    const firstCount = new Array(26).fill(0);
    for (let ch of s1) {
        firstCount[ch.charCodeAt(0) - 97]++;
    }

    let l = 0,
        r = s1.length - 1;

    // for substring of length same as s1, compute counter for s2
    let secondCount = new Array(26).fill(0);
    for (let i = l; i <= r; i++) {
        secondCount[s2[i].charCodeAt(0) - 97]++;
    }

    while (r < s2.length) {
        // check if every bucket of both counters has the same count, if so, we found a match
        let match = true;
        for (let i = 0; i < 26; i++) {
            if (firstCount[i] != secondCount[i]) {
                match = false;
            }
        }
        if (match) return true;

        // increase both to keep window size same as s1, and check for next substring of s2
        l++;
        r++;

        // instead on completely recomputing second counter again and again
        // just decrease count of leftmost char and increase count of new rightmost char
        // check to make r isnt out of bound before accessing s2[r], since we did r++ before
        if (r < s2.length) {
            secondCount[s2[l - 1].charCodeAt(0) - 97]--;
            secondCount[s2[r].charCodeAt(0) - 97]++;
        }
    }

    return false;
}
