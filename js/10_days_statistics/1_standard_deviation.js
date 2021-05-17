function getSum(arr, subtruct) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (subtruct) {
      let value = arr[i] - subtruct;
      total += value * value;
    } else {
      total += arr[i];
    }
  }
  return total;
}

function stdDev(arr) {
  let sum = Math.sqrt(getSum(arr, getSum(arr, null) / arr.length) / arr.length);
  console.log(sum.toFixed(1));
}

stdDev([10, 40, 30, 50, 20]);
