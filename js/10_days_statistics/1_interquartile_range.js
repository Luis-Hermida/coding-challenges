function getMedianOfArray(arr) {
  let arrMiddleValue = arr.length / 2;

  return arrMiddleValue % 1 === 0
    ? (arr[arrMiddleValue - 1] + arr[arrMiddleValue]) / 2
    : arr[Math.floor(arrMiddleValue)];
}

function interQuartile(values, freqs) {
  let dataArray = [];
  values.forEach((x, index) => {
    for (let i = 0; i < freqs[index]; i++) {
      dataArray.push(x);
    }
  });
  dataArray.sort((a, b) => a - b);

  let calculateMiddleValue = dataArray.length / 2;
  let q1 = getMedianOfArray(
    dataArray.slice(0, Math.floor(calculateMiddleValue))
  );
  let q3 =
    calculateMiddleValue % 1 === 0
      ? getMedianOfArray(dataArray.slice(Math.floor(calculateMiddleValue)))
      : getMedianOfArray(dataArray.slice(Math.floor(calculateMiddleValue + 1)));

  console.log((q3 - q1).toFixed(1));
}
