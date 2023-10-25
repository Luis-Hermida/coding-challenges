// Stats
// Runtime - 3427 ms beats 5.15%
// Memory - 63.3 MB beats 41.14%

/*
  It creates a counter for each truck and a flag that marks the last visited house.

  It checks each record of the the garbage to get the type of garbage and for each type
  we want to update the counter and calculate the time by using the current position
  and the last visited house.

  Time Complexity:
  - O(1) - For the main loop though the garbage.
  - O(n) - For slicing the sub-arrays which will repeat for each type of garbage, can be up to 3.
  - O(n) - For the reduce of the sliced travel array to calculate the time, can be up to 3.

  Space Complexity:
  - paperTruckTime
  - lastHouseWithPaperIndex
  - glassTruckTime
  - lastHouseWithGlassIndex
  - metalTruckTime
  - lastHouseWithMetalIndex

  And inside the main loop:
  - housePaperGarbage
  - houseGlassGarbage
  - houseMetalGarbage
  - traveledSum
*/

// Helpers
function calculateSum(array) {
  return array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}

var garbageCollection = function (garbage: string[], travel: number[]): number {
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
