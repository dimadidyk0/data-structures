// https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
function findTheLongestSubstring(s: string): number {
  const bitValue = {a:1,i:2,u:4,e:8,o:16};
  const countingMap = new Map([[0, -1]]);
  let temp = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (bitValue[char]) {
          temp = temp ^ bitValue[char];
      }

      if (countingMap.has(temp)) {
          answer = Math.max(answer, i - countingMap.get(temp));
      } else {
          countingMap.set(temp, i)
      }
  }

  return answer;
};