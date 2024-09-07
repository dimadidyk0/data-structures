// https://leetcode.com/problems/number-of-ways-to-split-array/

function waysToSplitArray(nums: number[]): number {
  let prefix: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      prefix.push(prefix[prefix.length - 1] + nums[i]);
  }

  let amount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      if (prefix[i] >= prefix[nums.length - 1] - prefix[i]) {
          amount++;
      }
  }

  return amount;
};
