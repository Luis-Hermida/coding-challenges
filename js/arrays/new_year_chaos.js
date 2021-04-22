function minimumBribes(q) {
  let bribesCounter = 0;
  let status = undefined;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      status = "Too chaotic";
    }

    // If the value of (q[i] - 2) is less than the index value
    // Ej: (q[4] -2) < 4
    //     (4 - 2)   < 4

    // We use the -2 because if we added more range code will fall on "Too chaotic" exit by default.
    // (There is no need it wont break but it will loop more).

    // Ej: minimumBribes([3, 2, 1, 5, 6, 4]); // 5
    // The minumin runs of this array would be 6 and the maximum would be 15. Thats the reason of 'let j = Math.max(0, q[i] - 2))'
    // (15 runs if we set j = 0 or j = a lot)
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[i] < q[j]) {
        bribesCounter++;
      }
    }
  }

  status ? console.log(status) : console.log(bribesCounter);
}

// minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
// minimumBribes([1, 2, 5, 4, 3]);
minimumBribes([3, 2, 1, 5, 6, 4]); // 5
