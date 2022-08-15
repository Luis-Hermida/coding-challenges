function vowelsAndConsonants(s) {
  const consonants = [];

  [...s].forEach((letter) => {
    "aeiou".indexOf(letter) != -1
      ? console.log(letter)
      : consonants.push(letter);
  });

  consonants.forEach((letter) => console.log(letter));
}

vowelsAndConsonants("javascript");
vowelsAndConsonants("hello world");
