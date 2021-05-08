function weightedMean(X, W) {
  let totalValueSum = 0;
  let totalWeightSum = 0;
  X.forEach((dataRecord, i) => {
    totalValueSum += dataRecord * W[i];
    totalWeightSum += W[i];
  });
  console.log((totalValueSum / totalWeightSum).toFixed(1));
}

weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5]);
