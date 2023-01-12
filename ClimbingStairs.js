/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev2 = 0,
    prev = 1;
  for (let i = 0; i < n; i++) {
    let curr = prev2 + prev;
    prev2 = prev;
    prev = curr;
  }
  return prev;
};
