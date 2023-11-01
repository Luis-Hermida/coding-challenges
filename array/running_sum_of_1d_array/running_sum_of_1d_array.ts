export {};

function runningSum(nums: number[]): number[] {
  let currentSum = 0;
  const sumsArray: number[] = [];

  nums.forEach((num) => {
    currentSum += num;
    sumsArray.push(currentSum);
  });

  return sumsArray;
}

console.log(runningSum([1, 2, 3, 4])); // [ 1, 3, 6, 10 ]
console.log(runningSum([1, 1, 1, 1, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(runningSum([3, 1, 2, 10, 1])); // [ 3, 4, 6, 16, 17 ]
