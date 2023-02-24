// Stats
// Runtime - 64 ms beats 57.51%
// Memory - 42.2 mb beats 14.18%

/*

  Time Complexity: O(1)

  Space Complexity: O(1)
*/
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};
