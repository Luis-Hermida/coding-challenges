// Stats
// Runtime - 297 ms beats 5.9%
// Memory - 60.8 beats 5.9%

/*
  We use the current index and the length of the array to calculate
  the remaining spaces and see how many odd sub-arrays are.

  Then we slice those sub-arrays into a sum array where at the end
  we add up those values to get the result.

  Time Complexity:
  - O(1) - For the main loop.
  - O(n^n) - For slicing the sub-arrays which will repeat for each odd index.
  - O(n) - For the reduce of the sumArray.

  Space Complexity:
  - totalSum 
  - sumArray
  - remainingIndexes
*/

var sumOddLengthSubarrays = function (arr: number[]): number {
  let arrayLength: number = arr.length;
  let totalSum: number = 0;
  let sumArray: number[] = [];

  for (let i = 1; i <= arrayLength; i++) {
    totalSum += arr[i - 1];
    let remainingIndexes = arrayLength - i + 1;

    while (remainingIndexes > 1) {
      if (remainingIndexes % 2 !== 0) {
        sumArray.push(...arr.slice(i - 1, remainingIndexes + (i - 1)));
        remainingIndexes -= 2;
      } else {
        remainingIndexes--;
      }
    }
  }

  totalSum += sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  
  return totalSum;
};
