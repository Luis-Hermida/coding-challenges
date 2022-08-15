function getDayName(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(date);
}

function main() {
  const d = +readLine();

  for (let i = 0; i < d; i++) {
    const date = readLine();

    console.log(getDayName(date));
  }
}
