export {};
// Stats
// Runtime - 51 ms beats 98.82%
// Memory - 41.8 mb beats 82.69%

/*

  Time Complexity: O(1)

  Space Complexity: O(1)
*/
var minimumSum = function (num) {
  const temp = num.toString().split("").sort();
  return parseInt(temp[0] + temp[2]) + parseInt(temp[1] + temp[3]);
};
