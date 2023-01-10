/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let index = 0; index < strs.length; index++) {
    while (strs[index].indexOf(prefix) === -1) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
