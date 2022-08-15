function getCount(objects) {
  let sameValueCount = 0;
  objects.forEach((object) => {
    if (object.x === object.y) sameValueCount++;
  });
  return sameValueCount;
}

console.log(
  getCount([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
);
