/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // store the count of each color type (0, 1, 2) in this case
  let zero = 0,
    one = 0,
    two = 0;

  for (let num of nums) {
    switch (num) {
      case 0:
        zero++;
        break;
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
      default:
        break;
    }
  }

  // keep setting the zeroes first, once zeroes are set then start setting ones
  // once ones are set, start setting twos
  for (let i = 0; i < nums.length; i++) {
    if (zero) {
      nums[i] = 0;
      zero--;
    } else if (one) {
      nums[i] = 1;
      one--;
    } else {
      nums[i] = 2;
      two--;
    }
  }

  // there is also a crack head solution -> dutch flag algo (ignore that bs to keep things simple)
}
