/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((n) => (n % 2 == 0 ? n * 2 : n * 3));
}

console.log(modifyArray([1, 2, 3, 4]));
console.log(modifyArray([2, 4, 10, 40]));
console.log(modifyArray([1, 3, 5, 7]));
