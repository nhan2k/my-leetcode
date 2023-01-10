/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arrStr = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }

    carry = sum > 1 ? 1 : 0;
    arrStr.unshift(sum % 2);
  }
  if (carry !== 0) {
    arrStr.unshift(carry);
  }

  return arrStr.join("");
};
