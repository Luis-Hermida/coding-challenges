// Stats
// Runtime - 307 ms beats 66.47%
// Memory - 64.4 mb beats 66.77%

/*

  Time Complexity: O(n)

  Space Complexity: O(n)
*/
var getTargetCopy = function (original, cloned, target) {
  if (original == null) {
    // Base case aka stop condition
    // empty tree or empty node
    return null;
  }

  // General cases
  if (original == target) {
    // current original node is target, so is cloned
    return cloned;
  }

  // Either left subtree has target, or right subtree has target
  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};
