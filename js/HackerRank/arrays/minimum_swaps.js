// First solution -- (poor performance)
function minimumSwaps(arr) {
  let minIndex = 0;
  let swapCounter = 0;
  let forCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    forCounter++;

    if (arr[i] - 1 === minIndex && arr[i] !== arr[minIndex]) {
      arr[i] = arr[minIndex];
      arr[minIndex] = minIndex + 1;
      minIndex++;
      swapCounter++;
      i = 0;
    } else if (arr[i] - 1 === minIndex) {
      minIndex++;
      i = 0;
    }
  }
  return swapCounter;
}

// Better solution from discussions
// When we detect an invalid value in the if we create another index (j) and
// in the while we search for the valid value that should be on arr[i]
function minimumSwaps(a) {
  let swap = 0;
  for (let i = 0; i < a.length; i++) {
    if (i + 1 != a[i]) {
      let t = i;
      while (a[t] != i + 1) {
        t++;
      }
      let temp = a[t];
      a[t] = a[i];
      a[i] = temp;
      swap++;
    }
  }
  return swap;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
