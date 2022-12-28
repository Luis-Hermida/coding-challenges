/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
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
