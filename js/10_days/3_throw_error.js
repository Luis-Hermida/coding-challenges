function isPositive(a) {
  if (!a) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  } else {
    return "YES";
  }
}

const runs = [5, 0, -5];
runs.forEach((n) => {
  try {
    console.log(isPositive(n));
  } catch (e) {
    console.log(e.message);
  }
});
