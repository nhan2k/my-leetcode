/**
 * @param {string} s
 * @return {number}
 */

const romans = new Map();
romans.set("I", 1);
romans.set("V", 5);
romans.set("X", 10);
romans.set("L", 50);
romans.set("C", 100);
romans.set("D", 500);
romans.set("M", 1000);
romans.set("IV", 4);
romans.set("IX", 9);
romans.set("XL", 40);
romans.set("XC", 90);
romans.set("CD", 400);
romans.set("CM", 900);

var romanToInt = function (s) {
  let result = 0;
  let index = 0;
  while (index < s.length) {
    let sub = romans.get(s[index] + s[index + 1]);
    if (sub) {
      result += sub;
      index += 2;
    } else {
      result += romans.get(s[index]);
      index++;
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
