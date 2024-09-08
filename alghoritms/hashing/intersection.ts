// https://leetcode.com/problems/intersection-of-multiple-arrays/
function intersection(nums: number[][]): number[] {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      for (let y = 0; y < nums[i].length; y++) {
          const num = nums[i][y];
          map.set(num, (map.get(num) || 0) + 1);
      }
  }

  const answer: number[] = [];
  for (let [key,value] of map) {
      if (value === n) {
          answer.push(key);
      }
  }
  return answer.sort((a,b) => a - b);
};