/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target > nums[i - 1] && target < nums[i]) {
      return i;
    }
  }
  return nums.length;
};
