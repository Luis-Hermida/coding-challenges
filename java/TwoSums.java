// O(log (n ^ 2))
class Solution {

  public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        int missingValue = target - nums[i];

        if (nums[j] == missingValue) {
          return new int[] { i, j };
        }
      }
    }

    throw new IllegalArgumentException("no match");
  }
}

// O(log (n))
class Solution {

  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> num_map = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      int missingValue = target - nums[i];

      if (num_map.containsKey(missingValue)) {
        return new int[] { num_map.get(missingValue), i };
      }

      num_map.put(nums[i], i);
    }
    throw new IllegalArgumentException("no match");
  }
}
