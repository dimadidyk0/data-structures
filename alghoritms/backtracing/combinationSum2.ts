// https://leetcode.com/problems/combination-sum-ii/?envType=daily-question&envId=2024-08-13

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates: [], target: number): number[][] {
  let result: number[][] = [];
  // sort to not duplicate calculations in the future
  candidates.sort((a,b) => a - b);

  function backtracing(curr, target, idx) {
      if (target === 0) {
          result.push(curr);
          return;
      }

      else if (target < 0) {
          return;
      }

      for (let i = idx; i < candidates.length; i++) {
          if (i!==idx && candidates[i]===candidates[i-1]) {
              // it means we did whis calculations before
              continue;
          }
          const el = candidates[i];
          backtracing(curr.concat(el), target - el, i + 1);
      }
  }

  backtracing([], target, 0);

  return result;
};
