let array = [1, 2, 3, 5, 6];
let array2 = [4, 7, 8, 10];
let output = [1, 2, 3, 4, 5, 6, 7, 8, 10];

while (array.length && array2.length) {
  checkArraysAndIncrementIndex();
}

const checkArraysAndIncrementIndex = () => {
  // Check if an array has been completed
  if (!array.length) {
    return [...array2];
  } else if (!array2.length) {
    return [...array];
  }

  // Get the next lowest value
  if (array[0] > array2[0]) {
    return array.unshift();
  } else {
    return array2.unshift();
  }
};
