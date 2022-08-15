function sockMerchant(n, ar) {
    let pairCounter = 0;
    ar.sort()
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i + 1]) {
            pairCounter++;
            i++;
        }
    }
    return pairCounter;
}

function sockMerchant(n, ar) {
    ar.sort();

}

console.log(sockMerchant(5, [10, 20, 20, 10, 20])) // 2
console.log(sockMerchant(10, [10, 20, 20, 10, 20, 30, 40, 50, 60, 40])) // 3
console.log(sockMerchant(20, [10, 20, 20, 10, 20, 30, 40, 50, 60, 40, 30, 40, 50, 60, 40, 30, 40, 50, 60, 40])) // 8
