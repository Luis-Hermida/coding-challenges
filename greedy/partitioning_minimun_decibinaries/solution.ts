// Stats
// Runtime - 111 ms beats 82.47%
// Memory - 49.4 mb beats 63.58%

/*
  The minimum amount of deci-binaries required to sum up to 'n' will always be
  the highest character or number in the string.

  n = 135
  x = max digit of n in this case 5.

  a1 = 111
  a2 = 011
  a3 = 011
  a4 = 001
  a5 = 001

  111+11+11+1+1=135

  Time Complexity: O(L)

  Space Complexity: O(1)
*/

var minPartitions = function (n) {
  let maxValue = 1;

  [...n].forEach((number) => {
    if (Number(number) > maxValue) maxValue = Number(number);
  });

  return maxValue;
};
