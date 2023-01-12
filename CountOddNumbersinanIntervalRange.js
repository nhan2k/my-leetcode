/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let i = low;
  let result = [];
  while (i <= high) {
    if (i % 2 !== 0) {
      result.push(i);
    }
    i++;
  }
  return result;
};

console.log(countOdds(8, 10));
