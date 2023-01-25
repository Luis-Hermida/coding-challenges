// Stats
// Runtime - 87 ms beats 63.35%
// Memory - 45.9 mb beats 49.56%

/*
  Time Complexity: O(n)

  Space Complexity: O(n)
*/

var buildArray = function(nums) {
    const ans: number[] = [];

    nums.forEach((value, index) => {
        ans.push(nums[value])
    })

    return ans
};