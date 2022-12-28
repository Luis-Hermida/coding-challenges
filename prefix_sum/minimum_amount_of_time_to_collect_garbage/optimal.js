// Stats
// Runtime - 289 ms beats 49.14%
// Memory - 69.5 MB beats 29.71%

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
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
