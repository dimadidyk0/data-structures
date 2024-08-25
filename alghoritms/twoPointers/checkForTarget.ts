/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkForTarget = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
      // curr is the current sum
      let curr = nums[left] + nums[right];
      if (curr == target) {
          return true;
      }
      
      if (curr > target) {
          right--;
      } else {
          left++;
      }
  }
  
  return false;
}