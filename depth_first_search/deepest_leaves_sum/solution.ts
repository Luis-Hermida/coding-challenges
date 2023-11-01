export {};
// Stats
// Runtime - 189 ms beats 53.13%
// Memory - 64.4 mb beats 75.78%

/*

  Time Complexity: O(V + E)

  Space Complexity:
*/
var deepestLeavesSum = function (root) {
  let queue = [root];
  let answer;
  let queuelength;
  let current;

  while (queue.length) {
    (queuelength = queue.length), (answer = 0);
    for (let i = 0; i < queuelength; i++) {
      (current = queue.shift()), (answer += current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return answer;
};
