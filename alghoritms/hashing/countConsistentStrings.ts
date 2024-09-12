// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/?envType=daily-question&envId=2024-09-12
function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedMap = new Set(allowed.split(''));
  function isConsistent (s: string): boolean {
      for (let char of s) {
          if (!allowedMap.has(char)) {
              return false;
          }
      }
      return true;
  }
  return words.filter(isConsistent).length;
};