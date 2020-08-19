function jumpingOnClouds(c) {
    let jumpCount = 0;

    for (let i = 0; i < c.length; i++) {
        if (c[i + 2] === 0) {
            i++;
            jumpCount++;
        } else if (c[i + 1] === 0) {
            jumpCount++;
        }
    }
    return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])) // 3