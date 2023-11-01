export {};
// Stats
// Runtime - 240 ms beats 32.35%
// Memory - 72.8 mb beats 92.84%

/*

  Time Complexity: O(log n)

  Space Complexity: O(log n)
*/
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  if (root === null) return sum;

  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }

  if (root.val <= high && root.val >= low) {
    sum += root.val;
  }

  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }

  return sum;
};
