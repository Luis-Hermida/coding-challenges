function rotLeft(a, d) {
  const rotatedArray = a;

  for (let i = d; i > 0; i--) {
    rotatedArray.push(rotatedArray.shift());
  }
  return rotatedArray;
}

// Better solution
function rotLeft(a, d) {
  return [...a.slice(d % a.length), ...a.slice(0, d % a.length)];
}

console.log(rotLeft([1, 2, 3, 4, 5, 6], 8)); // 3 rotations // [ 4, 5, 6, 1, 2, 3 ]
