function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (err) {
    console.log(err.message);
    console.log(s);
  } finally {
    console.log("Finally ran");
  }
}

reverseString("Hola como estas"); // satse omoc aloH
reverseString(123); // s.split is not a function
