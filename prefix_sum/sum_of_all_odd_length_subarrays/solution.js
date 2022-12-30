// Stats
// Runtime - 297 ms beats 5.9%
// Memory - 60.8 beats 5.9%

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let arrayLength = arr.length;
  let totalSum = 0;
  let sumArray = [];

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
