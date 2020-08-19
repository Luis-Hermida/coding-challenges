function repeatedString(s, n) {
    let occurences = s.split('a').length - 1;
    let quotient = Math.floor(n / s.length);
    let remainder = n % s.length;
    let occurencesOnRemainder = s.slice(0, remainder).split('a').length - 1;

    return (occurences * quotient + occurencesOnRemainder);
}

console.log(repeatedString('aba', 10)) // 7
console.log(repeatedString('abc', 1500)) // 500


