export {};
// Sums equals 60
function playlist(songs) {
  const songPairs = new Map();
  const target = 60;
  let numberOfPairs = 0;

  songs.forEach((song) => {
    const searchingValue = target - song;

    if (songPairs.has(searchingValue)) {
      numberOfPairs += songPairs.get(searchingValue);
    }

    songPairs.set(song, songPairs.has(song) ? songPairs.get(song) + 1 : 1);
  });

  console.log(songPairs);
  console.log(numberOfPairs);
}

// playlist([10, 50, 20, 40]); // 2
// playlist([30, 20, 30, 40, 40]); // 3
// playlist([30, 30, 30, 30, 30]); // 10

// Sums is divisible by 60
function playlist(songs) {
  const songPairs = new Map();
  const target = 60;
  let numberOfPairs = 0;

  songs.forEach((song) => {
    const currentSong = song % 60;
    const searchingValue = (target - currentSong) % 60;

    if (songPairs.has(searchingValue)) {
      numberOfPairs += songPairs.get(searchingValue);
    }

    songPairs.set(
      currentSong,
      songPairs.has(currentSong) ? songPairs.get(currentSong) + 1 : 1
    );
  });

  console.log(songPairs);
  console.log(numberOfPairs);
  return numberOfPairs;
}

playlist([10, 50, 20, 40]);
// playlist([30, 20, 30, 40, 40]);
// playlist([30, 30, 30, 30, 30]);
