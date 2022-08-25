const request = require("request");

async function getMovieList(year) {
  // Create endpoint with parameter
  const movieEndpoint = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  // Fetch response
  const movies = await myFetch(movieEndpoint);
  // Convert string reponse to object
  const moviesObj = JSON.parse(movies);
  // Store and return titles array
  const moviesTitles = [];
  moviesObj.data.forEach((movieData) => {
    moviesTitles.push(movieData.Title);
  });
  return moviesTitles;
}

function myFetch(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) reject(error);
      else resolve(body);
    });
  });
}

//
async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = readLine().trim();

  // Call to our function
  const results = await getMovieList(year);

  if (results.length > 0) {
    for (const result of results) {
      ws.write(`${result}\n`);
    }
  } else {
    ws.write("No Results Found");
  }

  ws.end();
}

main();
