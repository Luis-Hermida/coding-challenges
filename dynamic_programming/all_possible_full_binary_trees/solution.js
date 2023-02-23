// Stats
// Runtime - 156 ms beats 24.66%
// Memory - 66 mb beats 5.48%

/*

  Time Complexity: O(2^N)

  Space Complexity: O(2^N)
*/

const memo = [[null]];

var allPossibleFBT = function(n) {
    // Check if we should exit - recursion
    if (memo[n]) return memo[n];

    const ans = [];

    if (n % 2 === 1) {
        for (let i = 0; i < n; i++) {
            const j = n - 1 - i;

            for (let left of allPossibleFBT(i)) {
                for (let right of allPossibleFBT(j)) {
                    const node = new TreeNode();
                    node.left = cloneTree(left);
                    node.right = cloneTree(right);
                    ans.push(node);
                }
            }
        }

    }

    memo[n] = ans;
  
    return memo[n];
};

function cloneTree(node) {
  if (node == null) return null;
  
  const root = new TreeNode(node.val);
  root.left = cloneTree(node.left);
  root.right = cloneTree(node.right);
  
  return root;
};