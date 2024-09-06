// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
      return 0
  }

  let answer = 0, left = 0, current = 1;
  for (let right = 0; right < nums.length; right++) {
      current *= nums[right];

      while (current >= k) {
          current /= nums[left];
          left++;
      }

      answer += right - left + 1;
  }

  return answer;
};