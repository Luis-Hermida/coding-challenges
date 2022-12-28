// Stats
// Runtime - 3427 ms beats 5.15%
// Memory - 63.3 MB beats 41.14%

// Helpers
function calculateSum(array) {
  return array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let paperTruckTime = 0;
  let lastHouseWithPaperIndex = 0;

  let glassTruckTime = 0;
  let lastHouseWithGlassIndex = 0;

  let metalTruckTime = 0;
  let lastHouseWithMetalIndex = 0;

  garbage.forEach((type, index) => {
    let currentTravelIndex = index ? index : 0;

    let housePaperGarbage = (type.match(/P/g) || []).length;
    let houseGlassGarbage = (type.match(/G/g) || []).length;
    let houseMetalGarbage = (type.match(/M/g) || []).length;

    if (housePaperGarbage) {
      paperTruckTime += housePaperGarbage;
      let traveledSum = calculateSum(
        travel.slice(lastHouseWithPaperIndex, currentTravelIndex)
      );
      lastHouseWithPaperIndex = currentTravelIndex;
      paperTruckTime += traveledSum;
    }

    if (houseGlassGarbage) {
      glassTruckTime += houseGlassGarbage;
      let traveledSum = calculateSum(
        travel.slice(lastHouseWithGlassIndex, currentTravelIndex)
      );
      lastHouseWithGlassIndex = currentTravelIndex;
      glassTruckTime += traveledSum;
    }

    if (houseMetalGarbage) {
      metalTruckTime += houseMetalGarbage;
      let traveledSum = calculateSum(
        travel.slice(lastHouseWithMetalIndex, currentTravelIndex)
      );
      lastHouseWithMetalIndex = currentTravelIndex;
      metalTruckTime += traveledSum;
    }
  });

  return paperTruckTime + glassTruckTime + metalTruckTime;
};
