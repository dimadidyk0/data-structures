class UnionByRankFind {
  private root: number[];
  private rank: number[];
  constructor(length: number) {
    this.root = Array.from({ length }, (_, i) => i);
    this.rank = Array.from({ length }, (_, i) => i);
  } 

  public find = (a: number): number => {
    while (a !== this.root[a]) {
      a = this.root[a];
    }

    return a;
  }

  public union(a: number, b: number): void {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      if (this.rank[rootA] > this.rank[rootB]) {
          this.root[rootB] = rootA;
      } else if (this.rank[rootA] < this.rank[rootB]) {
          this.root[rootA] = rootB;
      } else {
          this.root[rootB] = rootA;
          this.rank[rootA] += 1;
      }
    }
  }

  public connected(a: number, b: number) {
    return this.find(a) === this.find(b);
  }
}

const ubrf = new UnionByRankFind(10);
// 1-2-5-6-7 3-8-9 4

ubrf.union(1, 2);
ubrf.union(2, 5);
ubrf.union(5, 6);
ubrf.union(6, 7);
ubrf.union(3, 8);
ubrf.union(8, 9);
console.log(ubrf);
console.log(ubrf.connected(1, 5)); // true
console.log(ubrf.connected(5, 7)); // true
console.log(ubrf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
ubrf.union(9, 4);
console.log(ubrf);
console.log(ubrf.connected(4, 9)); // true
