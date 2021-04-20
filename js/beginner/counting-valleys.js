function countingValleys(n, s) {
    let levelIndex = 0;
    let countValleys = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            levelIndex++;
            if (levelIndex === 0) {
                countValleys++;
            }
        } else {
            levelIndex--;
        }
    }
    return countValleys;
}

console.log(countingValleys(8, 'UDDDUDUU')) // 1
console.log(countingValleys(12, 'DDUUDDUDUUUD')) // 2