/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let i = s.length - 1;
  let count = 0;

  while (i >= 0) {
    if (s[i] === " ") {
      break;
    }
    console.log(s[i]);
    count++;
    i--;
  }

  return count;
};
