// Stats
// Runtime - 74 ms beats 66.90%
// Memory - 44.9 mb beats 38.62%

/*

  Time Complexity: O(4)?

  Space Complexity: O(4)?
*/
const transpose = (grid) => grid[0].map((x, i) => grid.map((x) => x[i]));

var maxIncreaseKeepingSkyline = function (grid) {
  let rowMaxes = grid.map((row) => Math.max(...row));
  let colMaxes = transpose(grid).map((row) => Math.max(...row));
  let increase = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let newTotal = Math.min(rowMaxes[i], colMaxes[j]);
      increase += newTotal - grid[i][j];
    }
  }
  return increase;
};
