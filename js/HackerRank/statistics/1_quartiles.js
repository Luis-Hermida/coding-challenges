function getMedianOfArray(arr) {
  let arrMiddleValue = arr.length / 2;

  return arrMiddleValue % 1 === 0
    ? (arr[arrMiddleValue - 1] + arr[arrMiddleValue]) / 2
    : arr[Math.floor(arrMiddleValue)];
}

function quartiles(arr) {
  arr.sort((a, b) => a - b);
  let q1 = undefined;
  let q2 = undefined;
  let q3 = undefined;

  let calculateMiddleValue = arr.length / 2;
  q1 = getMedianOfArray(arr.slice(0, Math.floor(calculateMiddleValue)));
  q2 = getMedianOfArray(arr);
  calculateMiddleValue % 1 === 0
    ? (q3 = getMedianOfArray(arr.slice(Math.floor(calculateMiddleValue))))
    : (q3 = getMedianOfArray(arr.slice(Math.floor(calculateMiddleValue + 1))));

  return [q1, q2, q3];
}

console.log(quartiles([3, 7, 8, 5, 12, 14, 21, 15, 18, 14]));
console.log(quartiles([18, 45, 55, 70, 76, 83, 88, 90, 92, 92, 95, 98]));
