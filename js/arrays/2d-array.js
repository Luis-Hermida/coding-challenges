function hourglassSum(arr) {
  let hourglassMax = -63;

  const getHourglass = (rowIndex, columnIndex) => {
    return (
      arr[rowIndex][columnIndex] +
      arr[rowIndex][columnIndex + 1] +
      arr[rowIndex][columnIndex + 2] +
      arr[rowIndex + 1][columnIndex + 1] +
      arr[rowIndex + 2][columnIndex] +
      arr[rowIndex + 2][columnIndex + 1] +
      arr[rowIndex + 2][columnIndex + 2]
    );
  };

  for (let r = 0; r < arr.length - 2; r++) {
    for (let c = 0; c < arr[r].length - 2; c++) {
      let hourglassValue = getHourglass(r, c);
      if (!isNaN(hourglassValue) && hourglassValue > hourglassMax)
        hourglassMax = hourglassValue;
    }
  }

  return hourglassMax;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
); // 19
console.log(
  hourglassSum([
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
); // 0
