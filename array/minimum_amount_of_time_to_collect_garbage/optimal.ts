// Stats
// Runtime - 289 ms beats 49.14%
// Memory - 69.5 MB beats 29.71%

/*
  It creates an array for each type of garbage with the same length as the
  total garbage array. It enters the main loop and start replacing each type
  array with the value of garbage for each location and it also updates the
  last flag index.

  With the flags updated we start looping though the created arrays using the
  last flag index as a maximum, where we add the value of the garbage and the
  value of the travel array.

  Time Complexity:
  O(n^4) One for the main loop and 3 for each created array.

  Space Complexity:
  answer
  lastPaper
  lastGlass
  lastMetal
  //
  paperArr
  glassArr
  metalArr
*/

var garbageCollection = function (garbage: string[], travel: number[]): number {
  let answer = 0;
  let garbageLength = garbage.length;
  //
  let lastPaper = 0;
  let lastGlass = 0;
  let lastMetal = 0;
  //
  let paperArr = new Array(garbageLength);
  let glassArr = new Array(garbageLength);
  let metalArr = new Array(garbageLength);

  for (let i = 0; i < garbageLength; i++) {
    let garbageStr = garbage[i];

    paperArr[i] = (garbageStr.match(/P/g) || []).length;
    glassArr[i] = (garbageStr.match(/G/g) || []).length;
    metalArr[i] = (garbageStr.match(/M/g) || []).length;

    if (paperArr[i] > 0) lastPaper = i;
    if (glassArr[i] > 0) lastGlass = i;
    if (metalArr[i] > 0) lastMetal = i;
  }

  for (let i = 0; i <= lastPaper; i++) {
    answer += i === 0 ? paperArr[i] : paperArr[i] + travel[i - 1];
  }
  for (let i = 0; i <= lastGlass; i++) {
    answer += i === 0 ? glassArr[i] : glassArr[i] + travel[i - 1];
  }
  for (let i = 0; i <= lastMetal; i++) {
    answer += i === 0 ? metalArr[i] : metalArr[i] + travel[i - 1];
  }

  return answer;
};
