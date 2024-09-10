// https://leetcode.com/problems/find-players-with-zero-or-one-losses/

function findWinners(matches: number[][]): number[][] {
  const players = new Set<number>();
  const losers = new Map<number, number>();

  for (let [winner, loser] of matches) {
      players.add(winner).add(loser);
      losers.set(loser, (losers.get(loser) || 0) + 1);
  }
  let answ1: number[] = [];
  let answ2: number[] = [];
  for (let player of players) {
      if (!losers.has(player)) {
          answ1.push(player);   
      } else if (losers.get(player) === 1) {
          answ2.push(player);   
      }
  }

  function incr(a: number, b: number): number { return a - b };

  return [answ1.sort(incr), answ2.sort(incr)];
};