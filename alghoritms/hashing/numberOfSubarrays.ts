// https://leetcode.com/problems/count-number-of-nice-subarrays/
function numberOfSubarrays(nums: number[], k: number): number {
  let answer = 0;
  let odds = 0;
  const map = new Map([[0,1]]);

  for (let num of nums) {
      odds += num % 2;
      map.set(odds, (map.get(odds) || 0) + 1)
      answer += map.get(odds - k) || 0;
  }

  return answer;
};