function isPositive(a) {
  if (!a) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  } else {
    return "YES";
  }
}

[5, 0, -5].forEach((n) => {
  try {
    console.log(isPositive(n));
  } catch (e) {
    console.log(e.message);
  }
});
