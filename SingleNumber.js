/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arrAppearsTwice = [];
  let singleOne = null;

  for (let i = 0; i < nums.length; i++) {
    if (arrAppearsTwice.find((e) => e === nums[i])) {
      arrAppearsTwice.push(nums[i]);
    } else {
      singleOne = nums[i];
      arrAppearsTwice.push(nums[i]);
    }
  }
  if (arrAppearsTwice.length === 1) {
    return arrAppearsTwice[0];
  }
  return singleOne;
};

singleNumber([4, 1, 2, 1, 2]);
