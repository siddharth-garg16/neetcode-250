function maxArea(height: number[]): number {
  // assume the max volume to be 0, we'll compute the volume between two candidate lines and change it if that valume if larger than the existing volume
  // it will be maximized since that is the requirement
  let maxVol = 0;

  // let i and j point to the opposite ends of the array
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    // since the lines are spaced 1 unit apart, the width is simply j - i
    // the height is determined by the shorter line, becuase the water would overflow otherwise
    const containerVol = (j - i) * Math.min(height[i], height[j]);
    // set the maximum volume if the current container volume is larger
    maxVol = Math.max(maxVol, containerVol);

    // General idea: we'll move the pointer pointing to the shorter line inward, because moving the longer line inward would only decrease the volume

    // TRICKY OBSERVATION: if the lines are same length, it doesn't matter if we decrease j or increase i, because either way we are removing a line of the same height

    // the thing is, if the volume before we computed volume between same height lines was not maximum, then this is the maximum so far
    // and if we found any line larger between these two, volume would still be determined by the shorter line (which in our case if same)

    // and even if the volume before we computed volume between same height lines was maximum, moving either pointer would still be valid, because this volume didn't matter
    if (height[i] >= height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxVol;
}
