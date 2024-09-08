// https://leetcode.com/problems/subarray-sum-equals-k/
function subarraySum(nums: number[], k: number): number {
  const map = new Map([[0, 1]]);
  let answer = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
      curr += nums[i];
      answer += map.get(curr - k) || 0;
      map.set(curr, (map.get(curr) || 0) + 1);
  }

  return answer;
};