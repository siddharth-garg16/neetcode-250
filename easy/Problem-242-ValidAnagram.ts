function isAnagram(s: string, t: string): boolean {
  const charMap = new Map();

  // set each character of original 's' in map with their occurance count
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1);
    } else {
      charMap.set(s[i], 1);
    }
  }

  // reduce the count of the characters in the map which are encountered in 't'
  // if the count is already zero and we still encounter that character then that character has occured more times in 't', return false
  // if the character doesn't exist in the map, return false as it was not present in 's'
  for (let i = 0; i < t.length; i++) {
    if (charMap.has(t[i])) {
      if (charMap.get(t[i]) === 0) return false;
      else charMap.set(t[i], charMap.get(t[i]) - 1);
    } else {
      return false;
    }
  }

  // if there is a character that was in original 's' but not in 't', it will be in map wth count more than 0
  const remainingValues = [...charMap.values()].some((value) => value !== 0);

  // if there is character that has count more than 0, return false
  // else return true because all the checks required have already been made
  return remainingValues ? false : true;
}
