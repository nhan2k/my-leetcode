function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.get(complement)) {
      return [];
      //{ map.get(complement), i };
    }
    map.set(nums[i], i);
  }
  // In case there is no solution, we'll just return null
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
