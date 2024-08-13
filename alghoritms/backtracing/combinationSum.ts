// https://leetcode.com/problems/combination-sum/submissions/1354565872/
// https://medium.com/geekculture/backtracking-algorithm-95622dcb6ac8

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates: number[], target: number): number[][] {
  const results: number[][] = [];
  const temp: number[] = [];

  function backtrail(index, target) {
      if (0 === target) {
          results.push([...temp]);
          return;
      }

      if (target < 0 || index >= candidates.length) {
          return;
      }

      temp.push(candidates[index]);
      backtrail(index, target - candidates[index])
      temp.pop();
      backtrail(index + 1, target)
  }

  backtrail(0, target);

  return results;
};


// combinationSum([2, 3, 6, 7], 7):

// [ 2 ]
// [ 2, 2 ]
// [ 2, 2, 2 ]
// [ 2, 2, 2, 2 ]      //We backtrack here to remove the last 2
// [ 2, 2, 2, 3 ]      //We backtrack here to remove the 3
// [ 2, 2, 2, 6 ]      //We backtrack here to remove the 6
// [ 2, 2, 2, 7 ]      //We backtrack here to remove the 7 & 2
// [ 2, 2, 3 ] //We push this as a solution & backtrack to remove the 3
// [ 2, 2, 6 ]         //We backtrack here to remove the 6
// [ 2, 2, 7 ]         //We backtrack here to remove the 7 & 2
// [ 2, 3 ]     //The same pattern continues the until we reach the end
// [ 2, 3, 3 ]
// [ 2, 3, 6 ]
// [ 2, 3, 7 ]
// [ 2, 6 ]
// [ 2, 7 ]
// [ 3 ]
// [ 3, 3 ]
// [ 3, 3, 3 ]
// [ 3, 3, 6 ]
// [ 3, 3, 7 ]
// [ 3, 6 ]
// [ 3, 7 ]
// [ 6 ]
// [ 6, 6 ]
// [ 6, 7 ]
// [ 7 ]               //This is also as solution