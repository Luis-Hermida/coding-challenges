export {};
// Stats
// Runtime - 63 ms beats 83.37%
// Memory -  42.1mb beats 69.16%

/*

  Time Complexity: O(n)

  Space Complexity: O(1)
*/

var numJewelsInStones = function (jewels, stones) {
  let jewelCounter = 0;

  [...stones].forEach((stone) => {
    jewels.includes(stone) ? jewelCounter++ : null;
  });

  return jewelCounter;
};
