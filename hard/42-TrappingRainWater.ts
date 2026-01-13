function trap(height: number[]): number {
  // intuition: check what is the maximum to the left hand side and right hand side of a particular index
  // since we will know they will represent container boundries
  const maxLeft = [];
  const maxRight = [];
  let maxOnLeftSoFar = 0;
  let maxOnRightSoFar = 0;
  // e.g. for [0,1,0,2,1,0,1,3,2,1,2,1]
  // maxLeft: [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]
  // maxRight: [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0]
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(maxOnLeftSoFar);
    maxOnLeftSoFar = Math.max(maxOnLeftSoFar, height[i]);
  }
  for (let i = height.length - 1; i > -1; i--) {
    maxRight.push(maxOnRightSoFar);
    maxOnRightSoFar = Math.max(maxOnRightSoFar, height[i]);
  }
  maxRight.reverse();

  let totalVolume = 0;

  for (let i = 0; i < height.length; i++) {
    // take minimum of the left max and right max at index because that is the overflowing condition
    // we know the width is 1 unit for i and max height is the miniumum of the left max and right max
    // so, Math.min(maxLeft[i], maxRight[i]) - height[i] becomes volume of water stored at i
    // not that if volume is negative, holding volume is treated as zero
    // e.g. [3, 7, 4] => Min(3, 4) - 7 => -4 => 0 (because the block at i so large it eclipse the boundries for it to store any water)
    const volumeAtCurrentIndex =
      Math.min(maxLeft[i], maxRight[i]) - height[i] > -1
        ? Math.min(maxLeft[i], maxRight[i]) - height[i]
        : 0;
    totalVolume += volumeAtCurrentIndex;
  }

  return totalVolume;
}
