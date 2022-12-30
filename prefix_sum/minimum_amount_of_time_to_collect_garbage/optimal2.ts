// Stats
// Runtime - 196 ms beats 80%
// Memory - 62.6 MB beats 50.29%

/*
  It created an add value with a default of 1 and start looping though the main loop
  where we start staking the distances for each type of garbage to the add value.

  Then it loops though the characters of each garbage value and for each type we add the
  add value to the answer and defaults the add value to 1.

  Time Complexity:
  O(1) - For the main loop
  O(n) - For looping though the characters of the garbage.

  Space Complexity:
  glassTruck
  paperTruck
  metalTruck
  answer
*/

var garbageCollection = function (garbage: string[], travel: number[]): number {
  let glassTruck = 1;
  let paperTruck = 1;
  let metalTruck = 1;
  let answer = 0;

  for (let i = 0; i < garbage.length; i++) {
    let dist = i ? travel[i - 1] : 0;
    glassTruck += dist;
    paperTruck += dist;
    metalTruck += dist;

    [...garbage[i]].forEach((char) => {
      if (char === "G") {
        answer += glassTruck;
        glassTruck = 1;
      } else if (char === "P") {
        answer += paperTruck;
        paperTruck = 1;
      } else {
        answer += metalTruck;
        metalTruck = 1;
      }
    });
  }

  return answer;
};
