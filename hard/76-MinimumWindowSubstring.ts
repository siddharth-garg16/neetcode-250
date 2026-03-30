function minWindow(s: string, t: string): string {
    // if t is empty, simply return empty string
    if (t === "") return "";

    // keep count of all the characters in t
    const countT: { [key: string]: number } = {};
    // will be used to keep count of all elements in s' current window
    const window: { [key: string]: number } = {};

    // set the character count for t
    for (const ch of t) {
        countT[ch] = (countT[ch] || 0) + 1;
    }

    // assume len of minimum substring is infinity (since it is supposed to be minimized)
    let resultLen = Number.POSITIVE_INFINITY;
    // keep the start and end index of the minimum substring seen so far that matches the requirement
    let result: number[] = [];

    // have is the count of how many unique characters in t are currently satisfied in the current window
    let have = 0,
        need = Object.keys(countT).length; // need is the count of unique characters in t that we need to have in the current window to satisfy the requirement

    // sliding window ends
    let l = 0,
        r = 0;

    // while r is in bound
    while (r < s.length) {
        // get the character and set it in current window counter map
        let c = s[r];
        window[c] = (window[c] || 0) + 1;
        // if the t has that character and the count of that character in current window matches the count in t, then we have satisfied one unique character requirement
        // increase have by one then
        if (countT[c] && window[c] === countT[c]) {
            have++;
        }
        // while doing above operation if we reach a scenario where a substring window matches the requirement
        // we can now try set the res len and the indices of that substring [start, end]
        while (have === need) {
            // see if the current window is smaller than the previously recorded minimum window, if yes, update the result
            if (r - l + 1 < resultLen) {
                resultLen = r - l + 1;
                result = [l, r];
            }
            // try to shrink it from left
            window[s[l]]--;
            // if the character that we are leaving behind exists in t and its count becomes less than the required count in t
            // then we have one less unique character requirement satisfied, decrease have by one
            if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                have--;
            }
            // increase l since we left the character at l behind
            l++;
        }
        // increase r to expand the window
        r++;
    }

    // if result was never changed, return '' else substring from what indices we have for the substring
    return resultLen === Number.POSITIVE_INFINITY
        ? ""
        : s.slice(result[0], result[1] + 1);
}
