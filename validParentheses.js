/**
 * @param {string} s
 * @return {boolean}
 */

const symbols = new Map();
symbols.set("(", ")");
symbols.set("[", "]");
symbols.set("{", "}");

var isValid = function (s) {
  var array = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") array.push(")");
    else if (s[i] === "[") array.push("]");
    else if (s[i] === "{") array.push("}");
    else if (s.length === 0 || array[array.length - 1] !== s[i]) return false;
    else array.pop();
  }
  return array.length === 0;
};

console.log(isValid("()"));
