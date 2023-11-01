export {};
// Stats
// Runtime - 67 ms beats 85.52%
// Memory - 41.3 mb beats 99.25%

/*
  Time Complexity: O(n^3)

  Space Complexity: O(1)
*/

var sumOddLengthSubarrays = function (arr: number[]): number {
  let arrayLength = arr.length;
  let totalSum = 0;

  for (let left = 0; left < arrayLength; left++) {
    for (let right = left; right < arrayLength; right++) {
      if ((right - left + 1) % 2 === 1) {
        let currentSum = 0;
        for (let index = left; index < right + 1; ++index) {
          currentSum += arr[index];
        }

        totalSum += currentSum;
      }
    }
  }

  return totalSum;
};
