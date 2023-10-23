function findMiddleIndex(nums: number[]): number {
  let totalSum = 0;
  let leftSum = 0;

  for (let index = 0; index < nums.length; index++) {
    totalSum += nums[index];
  }

  for (let index = 0; index < nums.length; index++) {
    if (leftSum * 2 === totalSum - nums[index]) {
      return index;
    }
    leftSum += nums[index];
  }

  return -1;
}

console.log(findMiddleIndex([2, 3, -1, 8, 4])); // 3
console.log(findMiddleIndex([1, -1, 4])); // 2
console.log(findMiddleIndex([2, 5])); // -1
