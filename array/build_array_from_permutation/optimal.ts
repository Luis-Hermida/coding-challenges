export {};
// Stats
// Runtime - 117 ms beats 30%
// Memory - 45.1 mb beats 90%

/*
  Time Complexity: O(n)

  Space Complexity: O(n)
*/
let buildArray = function (nums) {
  let q = nums.length;

  // turn the array into a= qb + r
  nums.forEach((value, index) => {
    let r = nums[index];

    /*
	    retrieve correct value from potentially already processed element
	    i.e. get r from something maybe already in the form a = qb + r
	    if it isnt already processed (doesnt have qb yet), that's ok b/c
	    r < q, so r % q will return the same value
    */
    let b = nums[nums[index]] % q;

    nums[index] = q * b + r;
  });

  // extract just the final b values
  nums.forEach((value, index) => {
    nums[index] = Math.floor(nums[index] / q);
  });

  return nums;
};
