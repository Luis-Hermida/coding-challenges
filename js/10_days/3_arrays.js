function getSecondLargest(nums) {
  let largestNumber = 0;
  let secondLargestNumber = 0;

  nums.forEach((num) => {
    if (num > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = num;
    }

    if (num < largestNumber && num > secondLargestNumber) {
      secondLargestNumber = num;
    }
  });

  return secondLargestNumber;
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8])); // 7
console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 9
