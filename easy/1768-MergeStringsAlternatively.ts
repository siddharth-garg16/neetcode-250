function mergeAlternately(word1: string, word2: string): string {
  // point two pointers at the start of each string
  let first = 0,
    second = 0;

  let merged = "";

  // while both are inbound, keep adding alternatively
  while (first < word1.length && second < word2.length) {
    merged += word1[first] + word2[second];
    first++;
    second++;
  }

  // if word1 was longer, add remaining characters from word1
  while (first < word1.length) {
    merged += word1[first];
    first++;
  }

  // if word2 was longer, add remaining characters from word2
  while (second < word2.length) {
    merged += word2[second];
    second++;
  }

  return merged;
}
